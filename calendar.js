// Shared calendar rendering – used by both del1 (index.html) and del2 (del2.html).
// Expects `calendarData` to be defined by the page's own data script before this runs.

const DAY_ABBR    = ['S','M','T','O','T','F','L']; // 0=sön
const MONTH_NAMES = [
  'Januari','Februari','Mars','April','Maj','Juni',
  'Juli','Augusti','September','Oktober','November','December'
];

function isoWeek(date) {
  const d   = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const jan1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - jan1) / 86400000 + 1) / 7);
}

// Build map: "YYYY-MM-DD" → [events]
const evMap = {};
for (const ev of calendarData.events) {
  (evMap[ev.date] ??= []).push(ev);
}

function teamLabel(teamNum) {
  const def = calendarData.teams?.[teamNum];
  return def ? `${def.name} (${def.level})` : `Furuby ${teamNum}`;
}

function buildEventCell(events) {
  const td = document.createElement('td');
  td.className = 'c-ev';

  for (const ev of events) {
    // Main event line
    const line = document.createElement('span');
    line.className = 'ev-line';

    const label = document.createElement('span');
    label.className = 'ev-label';

    let text = '';
    let cls  = '';

    if (ev.type === 'training') {
      text = ev.title || 'Träning';
      cls  = 'ev-training';

    } else if (ev.type === 'holiday') {
      text = ev.title;
      cls  = 'ev-holiday';

    } else if (ev.type === 'cup') {
      text = ev.subtitle ? `${ev.title} (${ev.subtitle})` : ev.title;
      cls  = 'ev-cup';
      if (!ev.time) label.classList.add('unconfirmed');

    } else if (ev.type === 'series') {
      const f = teamLabel(ev.team);
      text = ev.home ? `${f} – ${ev.opponent}` : `${ev.opponent} – ${f}`;
      cls  = ev.team === 1 ? 'ev-series1' : 'ev-series2';
      if (!ev.time) label.classList.add('unconfirmed');

    } else if (ev.type === 'match-a') {
      text = `A-LAGET: Furuby – ${ev.opponent}`;
      cls  = 'ev-match-a';
    }

    label.classList.add(cls);
    label.textContent = text;
    line.appendChild(label);

    if (ev.time) {
      const t = document.createElement('span');
      t.className = 'ev-time';
      t.textContent = ev.time;
      line.appendChild(t);
    }

    td.appendChild(line);

    // Location sub-line (series and cup)
    if (ev.location) {
      const loc = document.createElement('span');
      loc.className = 'ev-location';
      loc.textContent = ev.location;
      td.appendChild(loc);
    }

    // Domare sub-line for home series matches
    if (ev.type === 'series' && ev.home && ev.domare) {
      const dom = document.createElement('span');
      dom.className = 'ev-location';
      dom.textContent = `Domare: ${ev.domare}`;
      td.appendChild(dom);
    }

    // Info sub-line for A-lag matches
    if (ev.type === 'match-a') {
      const parts = [];
      if (ev.trainingCancelled) parts.push('Träning inställd');
      if (ev.bollkallar)        parts.push(`Bollkallar: ${ev.bollkallar}`);
      if (parts.length) {
        const info = document.createElement('span');
        info.className = 'ev-location';
        info.textContent = parts.join(' · ');
        td.appendChild(info);
      }
    }
  }
  return td;
}

function renderMonth(yearMonth) {
  const [year, monthIdx] = yearMonth.split('-').map(Number);
  const month = monthIdx - 1;

  const wrap = document.createElement('div');
  const h = document.createElement('div');
  h.className = 'month-title';
  h.textContent = `${MONTH_NAMES[month]} ${year}`;
  wrap.appendChild(h);

  const table   = document.createElement('table');
  const numDays = new Date(year, month + 1, 0).getDate();
  let lastWeek  = null;

  for (let d = 1; d <= numDays; d++) {
    const date = new Date(year, month, d);
    const dow  = date.getDay();
    const isSun = dow === 0;
    const isSat = dow === 6;
    const ds    = `${year}-${String(monthIdx).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const events = evMap[ds] || [];

    const week     = isoWeek(date);
    const showWeek = (dow === 1 || d === 1) && week !== lastWeek;
    if (showWeek) lastWeek = week;

    const isRed = isSun || events.some(e => e.type === 'holiday' || e.holiday === true);

    const tr = document.createElement('tr');
    if (isSun || isSat) tr.classList.add('week-end');
    if (isSun)          tr.classList.add('sunday');
    if (isRed)          tr.classList.add('red-day');

    const tdNum = document.createElement('td');
    tdNum.className = 'c-num';
    tdNum.textContent = d;
    tr.appendChild(tdNum);

    const tdDay = document.createElement('td');
    tdDay.className = 'c-day';
    tdDay.textContent = DAY_ABBR[dow];
    tr.appendChild(tdDay);

    tr.appendChild(buildEventCell(events));

    const tdWeek = document.createElement('td');
    tdWeek.className = 'c-week';
    if (showWeek) tdWeek.textContent = `v${week}`;
    tr.appendChild(tdWeek);

    table.appendChild(tr);
  }

  wrap.appendChild(table);
  return wrap;
}

const container = document.getElementById('calendar');
for (const m of calendarData.months) {
  container.appendChild(renderMonth(m));
}
