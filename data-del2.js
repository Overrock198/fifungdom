const calendarData = {
  team: "Furuby IF",
  season: "2026",
  part: 2,
  months: ["2026-07", "2026-08", "2026-09", "2026-10"],

  // Lagdefinitioner – namn och serienivå visas i matchrubriken
  teams: {
    1: { name: "Furuby 1", level: "nivå 4" },   // P14,     Södra Höst (4, pojk)
    2: { name: "Furuby 2", level: "nivå 2" },   // PF15-16, Södra Höst (2, pojk)
  },

  // Event types: training, holiday, series, match-a, cup, notice
  // Optional: time, location, holiday (bool), bollkallar, domare, note

  events: [
    // ── Juli ───────────────────────────────────────────────────────────
    { date: "2026-07-30", type: "cup", title: "Bullerby cup", subtitle: "P14, dag 1" },
    { date: "2026-07-31", type: "cup", title: "Bullerby cup", subtitle: "P14, dag 2" },

    // ── Augusti ────────────────────────────────────────────────────────
    { date: "2026-08-01", type: "cup",     title: "Bullerby cup", subtitle: "P14, dag 3" },
    { date: "2026-08-15", type: "cup",     title: "Per-Åke Tersmark Cup", subtitle: "Dag 1" },
    { date: "2026-08-16", type: "cup",     title: "Per-Åke Tersmark Cup", subtitle: "Dag 2" },
    { date: "2026-08-16", type: "series",  team: 2, home: false, opponent: "Växjö BK 8",     time: "10:00", location: "Sportfältet Teleborg 22, Växjö" },
    { date: "2026-08-16", type: "match-a", opponent: "Flygsfors-Gadd. IF", time: "16:00", bollkallar: null },
    { date: "2026-08-18", type: "series",  team: 1, home: true,  opponent: "Östers IF 5",    time: "18:30", location: "Furuvallen, Furuby" },
    { date: "2026-08-22", type: "series",  team: 1, home: false, opponent: "Alvesta GOIF 1", time: "11:00", location: "Virdavallen 22, Alvesta" },
    { date: "2026-08-22", type: "series",  team: 2, home: true,  opponent: "IFK Lammhult 2", time: "14:00", location: "Furuvallen, Furuby" },
    { date: "2026-08-24", type: "match-a", opponent: "Skruvs IF",          time: "18:15", bollkallar: null },
    { date: "2026-08-29", type: "series",  team: 2, home: false, opponent: "Hovshaga AIF 8", time: "14:00", location: "Hagavallen 1, Midingsbråte" },
    { date: "2026-08-30", type: "series",  team: 1, home: true,  opponent: "Älmhults IF 3",  time: "10:00", location: "Furuvallen, Furuby" },

    // ── September ──────────────────────────────────────────────────────
    { date: "2026-09-05", type: "series",  team: 1, home: false, opponent: "Värnamo Södra FF 1", time: "13:00", location: "Gröndal Arena 11, Värnamo" },
    { date: "2026-09-05", type: "match-a", opponent: "Tingsryd United FC", time: "12:00", bollkallar: null },
    { date: "2026-09-06", type: "series",  team: 2, home: true,  opponent: "Älmhults IF 4",     time: "10:00", location: "Furuvallen, Furuby" },
    { date: "2026-09-13", type: "series",  team: 1, home: true,  opponent: "Braås GOIF 1",      time: "10:00", location: "Furuvallen, Furuby" },
    { date: "2026-09-13", type: "series",  team: 2, home: false, opponent: "Braås GOIF 3",      time: "10:00", location: "Nya Ulvaskogsvallen 3, Braås" },
    { date: "2026-09-20", type: "series",  team: 2, home: true,  opponent: "Växjö Norra IF 7",  time: "10:00", location: "Furuvallen, Furuby" },
    { date: "2026-09-20", type: "series",  team: 1, home: false, opponent: "Växjö Norra IF 1",  time: "13:00", location: "Åbo Idrottsplats 21, Växjö" },
    { date: "2026-09-20", type: "match-a", opponent: "Orrefors IF",        time: "12:00", bollkallar: null },
    { date: "2026-09-27", type: "series",  team: 1, home: true,  opponent: "Hovshaga AIF 5",    time: "10:00", location: "Furuvallen, Furuby" },
    { date: "2026-09-27", type: "series",  team: 2, home: false, opponent: "Åseda IF 2",        time: "14:30", location: "Profilgruppen Park konstgräs 22, Åseda" },

    // ── Oktober ────────────────────────────────────────────────────────
    { date: "2026-10-03", type: "series",  team: 1, home: false, opponent: "Växjö Norra IF 2",  time: "10:00", location: "Fagrabäck IP 12, Växjö" },
    { date: "2026-10-04", type: "series",  team: 2, home: true,  opponent: "Hovmantorp GoIF 2", time: "10:00", location: "Furuvallen, Furuby" },
  ]
};
