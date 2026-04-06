const calendarData = {
  team: "Furuby IF",
  season: "2026",
  part: 2,
  months: ["2026-07", "2026-08", "2026-09"],

  // Event types: training, holiday, series, match-a, cup
  // Optional: time, holiday (bool), bollkallar, note

  events: [
    // ── Juli ───────────────────────────────────────────────────────────
    // Inga seriematcher för ungdomslagen ännu (läggs till när schema finns)
    { date: "2026-07-30", type: "cup", title: "Bullerby cup", subtitle: "P14, dag 1" },
    { date: "2026-07-31", type: "cup", title: "Bullerby cup", subtitle: "P14, dag 2" },

    // ── Augusti ────────────────────────────────────────────────────────
    { date: "2026-08-01", type: "cup",     title: "Bullerby cup", subtitle: "P14, dag 3" },
    { date: "2026-08-15", type: "match-a", opponent: "Flygsfors-Gadd. IF", time: "12:00", bollkallar: null },
    { date: "2026-08-24", type: "match-a", opponent: "Skruvs IF",          time: "18:15", bollkallar: null },

    // ── September ──────────────────────────────────────────────────────
    { date: "2026-09-05", type: "match-a", opponent: "Tingsryd United FC", time: "12:00", bollkallar: null },
    { date: "2026-09-20", type: "match-a", opponent: "Orrefors IF",        time: "12:00", bollkallar: null },
  ]
};
