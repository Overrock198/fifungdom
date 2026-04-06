const calendarData = {
  team: "Furuby IF",
  season: "2026",
  part: 1,
  months: ["2026-04", "2026-05", "2026-06"],

  // Lagdefinitioner – namn och serienivå visas i matchrubriken
  teams: {
    1: { name: "Furuby 1", level: "nivå 4" },
    2: { name: "Furuby 2", level: "nivå 2" },
  },

  // Event types:
  //   training  – träning
  //   holiday   – röd dag/helgdag (title required)
  //   series    – seriematch (team: 1 or 2, home: true/false, opponent, location)
  //   match-a   – A-lagsmatch hemma, Div 6 Emmaboda Herr (opponent: string)
  //   cup       – cup (title required, subtitle optional)
  //
  // Optional fields on any event:
  //   time: "18:00"          – bekräftad starttid
  //   holiday: true          – gör datumsiffran röd
  //   location: "Arena, Ort" – spelplats (visas på seriematcher)
  //   bollkallar: ""         – lag som är bollkallar (A-lagsmatcher)
  //   trainingCancelled: true – visar "Träning inställd" (A-lagsmatcher)
  //   domare: "Namn Namnsson" – domaren på hemmamatcher i serien

  events: [
    // ── April ──────────────────────────────────────────────────────────
    { date: "2026-04-01", type: "training", time: "17:30-18:45", title: "Träning gympasalen" },
    { date: "2026-04-02", type: "training", time: "17:30-18:45" },
    { date: "2026-04-03", type: "holiday",  title: "Långfredagen" },
    { date: "2026-04-05", type: "holiday",  title: "Påskdagen" },
    { date: "2026-04-06", type: "cup",      title: "Nickes cup", subtitle: "P15-16", holiday: true },
    { date: "2026-04-07", type: "training", time: "17:30-18:45" },
    { date: "2026-04-09", type: "training", time: "17:30-18:45" },
    { date: "2026-04-14", type: "training", time: "17:30-18:45" },
    { date: "2026-04-15", type: "training", time: "17:30-18:45", title: "Träning gympasalen" },
    { date: "2026-04-16", type: "training", time: "17:30-18:45" },
    { date: "2026-04-19", type: "cup",      title: "Tråddragarcupen", subtitle: "P14" },
    { date: "2026-04-21", type: "match-a",  opponent: "Konga SK",          time: "18:45", bollkallar: null },
    { date: "2026-04-23", type: "training", time: "17:30-18:45" },
    { date: "2026-04-25", type: "series",   team: 1, home: false, opponent: "Östers IF 2",       time: "10:00", location: "Sportfältet Teleborg 1, Växjö" },
    { date: "2026-04-26", type: "series",   team: 2, home: true,  opponent: "Hovshaga AIF 8",    time: "10:00", location: "Furuvallen, Furuby", domare: null },
    { date: "2026-04-27", type: "training", time: "17:30-18:45" },
    { date: "2026-04-28", type: "match-a",  opponent: "Vissefjärda GIF",   time: "19:00", bollkallar: null },
    { date: "2026-04-29", type: "training", time: "17:30-18:45", title: "Träning gympasalen" },
    { date: "2026-04-30", type: "training", time: "17:30-18:45" },

    // ── Maj ────────────────────────────────────────────────────────────
    { date: "2026-05-01", type: "holiday",  title: "Första maj" },
    { date: "2026-05-02", type: "series",   team: 2, home: false, opponent: "Växjö BK 7",        time: "10:00", location: "Sportfältet Teleborg 22, Växjö" },
    { date: "2026-05-03", type: "series",   team: 1, home: true,  opponent: "Alvesta GOIF 1",    time: "10:00", location: "Furuvallen, Furuby", domare: null },
    { date: "2026-05-04", type: "training", time: "17:30-18:45" },
    { date: "2026-05-05", type: "training", time: "17:30-18:45" },
    { date: "2026-05-07", type: "match-a",  opponent: "Emmaboda IS",       time: "19:00", bollkallar: null },
    { date: "2026-05-09", type: "series",   team: 1, home: false, opponent: "Växjö Norra IF 2",  time: "10:00", location: "Åbo Idrottsplats 22, Växjö" },
    { date: "2026-05-10", type: "series",   team: 2, home: true,  opponent: "Älmhults IF 4",     time: "10:00", location: "Furuvallen, Furuby", domare: null },
    { date: "2026-05-11", type: "training", time: "17:30-18:45" },
    { date: "2026-05-12", type: "training", time: "17:30-18:45" },
    { date: "2026-05-14", type: "training", time: "17:30-18:45" },
    { date: "2026-05-16", type: "series",   team: 1, home: true,  opponent: "Lessebo GOIF 1", time: "10:00", location: "Furuvallen, Furuby", domare: null },
    { date: "2026-05-17", type: "series",   team: 2, home: false, opponent: "Hovmantorp GoIF 2", time: "17:30", location: "Hovmantorps IP 2, Hovmantorp" },
    { date: "2026-05-18", type: "training", time: "17:30-18:45" },
    { date: "2026-05-19", type: "match-a",  opponent: "Nöbbele BK",        time: "19:00", bollkallar: null, trainingCancelled: true },
    { date: "2026-05-21", type: "training", time: "17:30-18:45" },
    { date: "2026-05-22", type: "series",   team: 1, home: false, opponent: "Hovshaga AIF 3",    time: "19:00" },
    { date: "2026-05-23", type: "series",   team: 2, home: true,  opponent: "Gransholms IF 1",   time: "14:00", location: "Furuvallen, Furuby", domare: null },
    { date: "2026-05-25", type: "training", time: "17:30-18:45" },
    { date: "2026-05-26", type: "training", time: "17:30-18:45" },
    { date: "2026-05-28", type: "training", time: "17:30-18:45" },
    { date: "2026-05-31", type: "series",   team: 1, home: true,  opponent: "Värnamo Södra FF 2",  location: "Furuvallen, Furuby", domare: null },
    { date: "2026-05-31", type: "series",   team: 2, home: false, opponent: "Moheda IF 1" },

    // ── Juni ───────────────────────────────────────────────────────────
    { date: "2026-06-01", type: "training", time: "17:30-18:45" },
    { date: "2026-06-02", type: "match-a",  opponent: "Flerohopps GoIF",   time: "19:00", bollkallar: null },
    { date: "2026-06-04", type: "training", time: "17:30-18:45" },
    { date: "2026-06-06", type: "series",   team: 2, home: true,  opponent: "Ingelstads IK 3",   time: "14:00", location: "Furuvallen, Furuby", domare: null, holiday: true },
    { date: "2026-06-07", type: "series",   team: 1, home: false, opponent: "Hovshaga AIF 5",    time: "12:00", location: "Hagavallen 1, Växjö" },
    { date: "2026-06-08", type: "training", time: "17:30-18:45" },
    { date: "2026-06-09", type: "training", time: "17:30-18:45" },
    { date: "2026-06-11", type: "training", time: "17:30-18:45" },
    { date: "2026-06-14", type: "series",   team: 1, home: true,  opponent: "IFK Grimslöv 1",      location: "Furuvallen, Furuby", domare: null },
    { date: "2026-06-14", type: "series",   team: 2, home: false, opponent: "Lenhovda IF 2" },
    { date: "2026-06-15", type: "training", time: "17:30-18:45" },
    { date: "2026-06-16", type: "training", time: "17:30-18:45" },
    { date: "2026-06-18", type: "training", time: "17:30-18:45" },
    { date: "2026-06-19", type: "holiday",  title: "Midsommarafton" },
    { date: "2026-06-20", type: "holiday",  title: "Midsommardagen" },
    { date: "2026-06-22", type: "training", time: "17:30-18:45" },
    { date: "2026-06-23", type: "training", time: "17:30-18:45" },
    { date: "2026-06-24", type: "match-a",  opponent: "Johansfors IF",     time: "19:00", bollkallar: null },
    { date: "2026-06-25", type: "training", time: "17:30-18:45" },
    { date: "2026-06-27", type: "cup",      title: "Norra-cupen" },
    { date: "2026-06-29", type: "training", time: "17:30-18:45" },
    { date: "2026-06-30", type: "training", time: "17:30-18:45" },
  ]
};
