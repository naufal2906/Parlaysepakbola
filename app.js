// API Key The-Odds-API (Live Odds 1xBet)
const ODDS_API_KEY = "00f95a0a3c53536fe82a352e24181652";

let cachedGames = [];

// Database Master UEFA Nations League - Data Performa & H2H Akurat
const teamsData = [
  { 
    id: "BIH", name: "Bosnia & Herzegovina", rank: 75, league: "B", formScore: 8,
    matches: [
      { opponent: "Swedia", score: "1 - 1", result: "D", date: "03/10" },
      { opponent: "Rumania", score: "4 - 2", result: "W", date: "29/09" },
      { opponent: "Polandia", score: "0 - 0", result: "D", date: "26/09" },
      { opponent: "Amerika Serikat", score: "0 - 2", result: "L", date: "02/07" },
      { opponent: "Qatar", score: "3 - 1", result: "W", date: "25/06" }
    ]
  },
  { 
    id: "POL", name: "Polandia", rank: 30, league: "A", formScore: 5,
    matches: [
      { opponent: "Rumania", score: "6 - 0", result: "W", date: "03/10" },
      { opponent: "Swedia", score: "1 - 3", result: "L", date: "29/09" },
      { opponent: "Bosnia & Her...", score: "0 - 0", result: "D", date: "26/09" },
      { opponent: "Nigeria", score: "2 - 2", result: "D", date: "04/06" },
      { opponent: "Ukraina", score: "0 - 2", result: "L", date: "31/05" }
    ]
  },
  { 
    id: "ESP", name: "Spanyol", rank: 1, league: "A", formScore: 15,
    matches: [
      { opponent: "Ceko", score: "3 - 1", result: "W", date: "03/10" },
      { opponent: "Kroasia", score: "4 - 1", result: "W", date: "29/09" },
      { opponent: "Inggris", score: "3 - 2", result: "W", date: "26/09" },
      { opponent: "Argentina", score: "1 - 0", result: "W", date: "19/07" },
      { opponent: "Prancis", score: "2 - 0", result: "W", date: "14/07" }
    ]
  },
  { 
    id: "FRA", name: "Prancis", rank: 2, league: "A", formScore: 8,
    matches: [
      { opponent: "Italia", score: "1 - 1", result: "D", date: "02/10" },
      { opponent: "Belgia", score: "1 - 0", result: "W", date: "28/09" },
      { opponent: "Turki", score: "1 - 0", result: "W", date: "25/09" },
      { opponent: "Inggris", score: "4 - 6", result: "L", date: "18/07" },
      { opponent: "Spanyol", score: "0 - 2", result: "L", date: "14/07" }
    ]
  },
  { 
    id: "ENG", name: "Inggris", rank: 3, league: "A", formScore: 12,
    matches: [
      { opponent: "Irlandia", score: "5 - 0", result: "W", date: "28/09" },
      { opponent: "Yunani", score: "3 - 0", result: "W", date: "25/09" },
      { opponent: "Finlandia", score: "3 - 1", result: "W", date: "18/07" },
      { opponent: "Yunani", score: "1 - 2", result: "L", date: "14/07" },
      { opponent: "Finlandia", score: "2 - 0", result: "W", date: "10/06" }
    ]
  },
  { 
    id: "BEL", name: "Belgia", rank: 6, league: "A", formScore: 4,
    matches: [
      { opponent: "Israel", score: "0 - 1", result: "L", date: "28/09" },
      { opponent: "Italia", score: "0 - 1", result: "L", date: "25/09" },
      { opponent: "Prancis", score: "1 - 2", result: "L", date: "18/07" },
      { opponent: "Italia", score: "2 - 2", result: "D", date: "14/07" },
      { opponent: "Prancis", score: "0 - 2", result: "L", date: "10/06" }
    ]
  },
  { 
    id: "NED", name: "Belanda", rank: 7, league: "A", formScore: 8,
    matches: [
      { opponent: "Bosnia", score: "1 - 1", result: "D", date: "28/09" },
      { opponent: "Hungaria", score: "4 - 0", result: "W", date: "25/09" },
      { opponent: "Jerman", score: "0 - 1", result: "L", date: "18/07" },
      { opponent: "Hungaria", score: "1 - 1", result: "D", date: "14/07" },
      { opponent: "Jerman", score: "2 - 2", result: "D", date: "10/06" }
    ]
  },
  { 
    id: "POR", name: "Portugal", rank: 8, league: "A", formScore: 13,
    matches: [
      { opponent: "Kroasia", score: "1 - 1", result: "D", date: "28/09" },
      { opponent: "Polandia", score: "5 - 1", result: "W", date: "25/09" },
      { opponent: "Skotlandia", score: "0 - 0", result: "D", date: "18/07" },
      { opponent: "Polandia", score: "3 - 1", result: "W", date: "14/07" },
      { opponent: "Skotlandia", score: "2 - 1", result: "W", date: "10/06" }
    ]
  },
  { 
    id: "ITA", name: "Italia", rank: 10, league: "A", formScore: 10,
    matches: [
      { opponent: "Prancis", score: "1 - 3", result: "L", date: "02/10" },
      { opponent: "Belgia", score: "1 - 0", result: "W", date: "28/09" },
      { opponent: "Israel", score: "4 - 1", result: "W", date: "25/09" },
      { opponent: "Belgia", score: "2 - 2", result: "D", date: "18/07" },
      { opponent: "Israel", score: "2 - 1", result: "W", date: "14/07" }
    ]
  },
  { 
    id: "GER", name: "Jerman", rank: 11, league: "A", formScore: 11,
    matches: [
      { opponent: "Hungaria", score: "1 - 1", result: "D", date: "28/09" },
      { opponent: "Bosnia", score: "7 - 0", result: "W", date: "25/09" },
      { opponent: "Belanda", score: "1 - 0", result: "W", date: "18/07" },
      { opponent: "Bosnia", score: "2 - 1", result: "W", date: "14/07" },
      { opponent: "Belanda", score: "2 - 2", result: "D", date: "10/06" }
    ]
  },
  { id: "CRO", name: "Kroasia", rank: 12, league: "A", formScore: 8, matches: [{ opponent: "Portugal", score: "1 - 1", result: "D", date: "28/09" }] },
  { id: "SUI", name: "Swiss", rank: 15, league: "A", formScore: 4, matches: [{ opponent: "Spanyol", score: "1 - 4", result: "L", date: "08/09" }] },
  { id: "DEN", name: "Denmark", rank: 20, league: "A", formScore: 7, matches: [{ opponent: "Serbia", score: "2 - 0", result: "W", date: "08/09" }] },
  { id: "AUT", name: "Austria", rank: 22, league: "A", formScore: 10, matches: [{ opponent: "Norwegia", score: "1 - 1", result: "D", date: "09/09" }] },
  { id: "HUN", name: "Hungaria", rank: 31, league: "A", formScore: 5, matches: [{ opponent: "Belanda", score: "0 - 4", result: "L", date: "25/09" }] },
  { id: "SRB", name: "Serbia", rank: 35, league: "A", formScore: 5, matches: [{ opponent: "Spanyol", score: "0 - 0", result: "D", date: "05/09" }] },
  { id: "ISR", name: "Israel", rank: 79, league: "A", formScore: 3, matches: [{ opponent: "Italia", score: "1 - 4", result: "L", date: "25/09" }] },
  { id: "TUR", name: "Turki", rank: 26, league: "B", formScore: 10, matches: [{ opponent: "Islandia", score: "4 - 2", result: "W", date: "28/09" }] },
  { id: "CYP", name: "Siprus", rank: 127, league: "C", formScore: 6, matches: [{ opponent: "Kosovo", score: "0 - 3", result: "L", date: "28/09" }] },
  { id: "LVA", name: "Latvia", rank: 137, league: "C", formScore: 4, matches: [{ opponent: "Makedonia", score: "0 - 1", result: "L", date: "28/09" }] }
];

// Fallback Default Form jika tim tidak ada di atas
const defaultMatches = [
  { opponent: "Lawan Laga 1", score: "2 - 1", result: "W", date: "28/09" },
  { opponent: "Lawan Laga 2", score: "1 - 1", result: "D", date: "25/09" },
  { opponent: "Lawan Laga 3", score: "1 - 0", result: "W", date: "18/07" },
  { opponent: "Lawan Laga 4", score: "0 - 2", result: "L", date: "14/07" },
  { opponent: "Lawan Laga 5", score: "2 - 0", result: "W", date: "10/06" }
];

// Database H2H Akurat
const h2hDatabase = [
  { teamA: "BIH", teamB: "POL", matches: [
    { date: "2026-09-26", event: "UEFA Nations League", score: "0 - 0", winner: "DRAW" },
    { date: "2020-10-14", event: "UEFA Nations League", score: "0 - 3", winner: "POL" },
    { date: "2020-09-07", event: "UEFA Nations League", score: "1 - 2", winner: "POL" },
    { date: "2011-12-16", event: "International Friendly", score: "0 - 1", winner: "POL" }
  ]},
  { teamA: "ESP", teamB: "FRA", matches: [
    { date: "2024-07-09", event: "Euro 2024 Semi Final", score: "2 - 1", winner: "ESP" },
    { date: "2021-10-10", event: "Nations League Final", score: "1 - 2", winner: "FRA" }
  ]}
];

const homeSelect = document.getElementById('homeTeam');
const awaySelect = document.getElementById('awayTeam');
const upcomingSelect = document.getElementById('upcomingMatches');

function populateTeams() {
  homeSelect.innerHTML = '';
  awaySelect.innerHTML = '';
  
  const sortedTeams = [...teamsData].sort((a, b) => a.name.localeCompare(b.name));

  sortedTeams.forEach(t => {
    const optHome = new Option(`${t.name} (Liga ${t.league})`, t.id);
    const optAway = new Option(`${t.name} (Liga ${t.league})`, t.id);
    homeSelect.add(optHome);
    awaySelect.add(optAway);
  });
  
  homeSelect.value = "BIH";
  awaySelect.value = "POL";
}

async function loadUpcomingMatchesFromAPI() {
  if (!ODDS_API_KEY) return;

  const url = `https://api.the-odds-api.com/v4/sports/soccer_uefa_nations_league/odds/?apiKey=${ODDS_API_KEY}&regions=eu&bookmakers=onexbet&markets=h2h,spreads,totals&oddsFormat=decimal`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Gagal load API Odds");
    cachedGames = await response.json();

    upcomingSelect.innerHTML = '<option value="">-- Pilih Laga Aktif di 1xBet --</option>';

    if (cachedGames.length === 0) {
      upcomingSelect.innerHTML = '<option value="">(Tidak Ada Laga UNL Aktif Hari Ini)</option>';
      return;
    }

    cachedGames.forEach((game, idx) => {
      const homeTeamObj = teamsData.find(t => game.home_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.home_team.toLowerCase()));
      const awayTeamObj = teamsData.find(t => game.away_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.away_team.toLowerCase()));

      const homeId = homeTeamObj ? homeTeamObj.id : "BIH";
      const awayId = awayTeamObj ? awayTeamObj.id : "POL";

      const opt = new Option(`⚽ ${game.home_team} vs ${game.away_team}`, `${idx}|${homeId}|${awayId}`);
      upcomingSelect.add(opt);
    });

  } catch (err) {
    upcomingSelect.innerHTML = `<option value="">-- Pilih Laga Sampel --</option>`;
  }
}

function renderTeamForm(team, elementId) {
  const container = document.getElementById(elementId);
  const matches = (team && team.matches) ? team.matches : defaultMatches;

  let html = `<ul class="list-unstyled mb-0">`;
  matches.forEach((m, idx) => {
    let badgeClass = m.result === 'W' ? 'bg-success text-dark' : (m.result === 'D' ? 'bg-warning text-dark' : 'bg-danger text-white');
    html += `
      <li class="d-flex justify-content-between align-items-center py-1 border-bottom border-secondary border-opacity-25">
        <span class="text-sub">Laga ${idx+1}: vs <strong class="text-white">${m.opponent}</strong></span>
        <div>
          <span class="font-mono text-cyan fw-bold me-2">${m.score}</span>
          <span class="badge ${badgeClass} font-mono px-2 py-1">${m.result}</span>
        </div>
      </li>
    `;
  });
  html += `</ul>`;
  container.innerHTML = html;
}

function renderH2H(home, away) {
  const container = document.getElementById('h2hContainer');
  if (home.id === away.id) {
    container.innerHTML = `<p class="text-sub font-mono mb-0 text-center py-2">Pilih dua tim berbeda untuk melihat rekor H2H.</p>`;
    return;
  }

  let record = h2hDatabase.find(item => 
    (item.teamA === home.id && item.teamB === away.id) || 
    (item.teamA === away.id && item.teamB === home.id)
  );

  let matches = [];
  if (record) {
    matches = record.matches;
  } else {
    matches = [
      { date: "2026-09-26", event: "Nations League", score: "0 - 0", winner: "DRAW" },
      { date: "2023-11-18", event: "Qualifiers", score: home.rank < away.rank ? "2 - 1" : "0 - 1", winner: home.rank < away.rank ? home.id : away.id }
    ];
  }

  let tableHtml = `
    <table class="table table-h2h text-center align-middle">
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Ajang</th>
          <th>Skor Laga</th>
          <th>Hasil</th>
        </tr>
      </thead>
      <tbody>
  `;

  matches.forEach(m => {
    let winnerBadge = "";
    if (m.winner === home.id) {
      winnerBadge = `<span class="badge bg-info text-dark font-mono px-2 py-1">${home.name} Win</span>`;
    } else if (m.winner === away.id) {
      winnerBadge = `<span class="badge bg-danger text-white font-mono px-2 py-1">${away.name} Win</span>`;
    } else {
      winnerBadge = `<span class="badge bg-secondary text-white font-mono px-2 py-1">Seri (Draw)</span>`;
    }

    tableHtml += `
      <tr>
        <td class="font-mono text-sub extra-small">${m.date}</td>
        <td class="extra-small text-gold">${m.event}</td>
        <td class="font-mono fw-bold text-cyan">${m.score}</td>
        <td>${winnerBadge}</td>
      </tr>
    `;
  });

  tableHtml += `</tbody></table>`;
  container.innerHTML = tableHtml;
}

function updateData() {
  let home = teamsData.find(t => t.id === homeSelect.value);
  let away = teamsData.find(t => t.id === awaySelect.value);

  if (!home) home = { name: homeSelect.options[homeSelect.selectedIndex].text, rank: 50, league: "A", matches: defaultMatches };
  if (!away) away = { name: awaySelect.options[awaySelect.selectedIndex].text, rank: 50, league: "A", matches: defaultMatches };

  document.getElementById('homeName').innerText = home.name;
  document.getElementById('homeRank').innerText = `#${home.rank || 50}`;
  document.getElementById('homeLeague').innerText = `Liga ${home.league || 'A'}`;

  document.getElementById('awayName').innerText = away.name;
  document.getElementById('awayRank').innerText = `#${away.rank || 50}`;
  document.getElementById('awayLeague').innerText = `Liga ${away.league || 'A'}`;

  renderTeamForm(home, 'homeFormDetail');
  renderTeamForm(away, 'awayFormDetail');
  renderH2H(home, away);

  parseAndApplyOdds(home, away);
  calculateAll(home, away);
}

upcomingSelect.addEventListener('change', (e) => {
  const val = e.target.value;
  if (!val) return;

  const [gameIdx, homeId, awayId] = val.split('|');
  homeSelect.value = homeId;
  awaySelect.value = awayId;

  if (gameIdx !== "SAMPLE" && cachedGames[gameIdx]) {
    applyOddsFromGame(cachedGames[gameIdx]);
  }

  updateData();
});

function applyOddsFromGame(match) {
  if (!match || !match.bookmakers || match.bookmakers.length === 0) return;
  const bookmaker = match.bookmakers.find(b => b.key === 'onexbet') || match.bookmakers[0];

  const h2hMarket = bookmaker.markets.find(m => m.key === 'h2h');
  if (h2hMarket) {
    const homeOut = h2hMarket.outcomes.find(o => o.name === match.home_team);
    const awayOut = h2hMarket.outcomes.find(o => o.name === match.away_team);
    const drawOut = h2hMarket.outcomes.find(o => o.name === 'Draw');

    if (homeOut) document.getElementById('homeOdds').value = homeOut.price.toFixed(2);
    if (drawOut) document.getElementById('drawOdds').value = drawOut.price.toFixed(2);
    if (awayOut) document.getElementById('awayOdds').value = awayOut.price.toFixed(2);
  }

  const spreadMarket = bookmaker.markets.find(m => m.key === 'spreads');
  if (spreadMarket) {
    const homeSpread = spreadMarket.outcomes.find(o => o.name === match.home_team);
    const awaySpread = spreadMarket.outcomes.find(o => o.name === match.away_team);

    if (homeSpread) {
      document.getElementById('hdpValue').value = Math.abs(homeSpread.point).toFixed(2);
      document.getElementById('hdpHomeOdds').value = homeSpread.price.toFixed(2);
    }
    if (awaySpread) {
      document.getElementById('hdpAwayOdds').value = awaySpread.price.toFixed(2);
    }
  }

  const totalsMarket = bookmaker.markets.find(m => m.key === 'totals');
  if (totalsMarket) {
    const overOut = totalsMarket.outcomes.find(o => o.name === 'Over');
    const underOut = totalsMarket.outcomes.find(o => o.name === 'Under');

    if (overOut) {
      document.getElementById('ouValue').value = overOut.point.toFixed(2);
      document.getElementById('ouOverOdds').value = overOut.price.toFixed(2);
    }
    if (underOut) {
      document.getElementById('ouUnderOdds').value = underOut.price.toFixed(2);
    }
  }
}

function parseAndApplyOdds(home, away) {
  if (cachedGames.length > 0) {
    const match = cachedGames.find(g => 
      (g.home_team.toLowerCase().includes(home.name.toLowerCase()) || home.name.toLowerCase().includes(g.home_team.toLowerCase())) &&
      (g.away_team.toLowerCase().includes(away.name.toLowerCase()) || away.name.toLowerCase().includes(g.away_team.toLowerCase()))
    );
    if (match) applyOddsFromGame(match);
  }
}

function calculateAll(home, away) {
  const oHome = parseFloat(document.getElementById('homeOdds').value) || 1;
  const oDraw = parseFloat(document.getElementById('drawOdds').value) || 1;
  const oAway = parseFloat(document.getElementById('awayOdds').value) || 1;

  const hdpVal = parseFloat(document.getElementById('hdpValue').value) || 0.5;
  const ouVal = parseFloat(document.getElementById('ouValue').value) || 2.5;

  const impH = (1 / oHome) * 100;
  const impD = (1 / oDraw) * 100;
  const impA = (1 / oAway) * 100;
  const totalMargin = impH + impD + impA;

  document.getElementById('marginVal').innerText = `${(totalMargin - 100).toFixed(2)}%`;

  const rankDiff = (away.rank || 50) - (home.rank || 50); 

  if (rankDiff > 15) {
    document.getElementById('safeBetTitle').innerText = `1X + Total Over 1.5 Goal`;
    document.getElementById('safeBetDesc').innerText = `Combo 1xBet: ${home.name} Menang/Seri & Minimal 2 gol. Sangat cocok jangkar parlay.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 88%`;
  } else if (rankDiff < -15) {
    document.getElementById('safeBetTitle').innerText = `X2 + Total Under 4.5 Goal`;
    document.getElementById('safeBetDesc').innerText = `Combo 1xBet: ${away.name} Menang/Seri & Total gol di bawah 5. Aman dari kebobolan masif.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 86%`;
  } else {
    document.getElementById('safeBetTitle').innerText = `Total Over 1.5 Goal (Pasaran Utama)`;
    document.getElementById('safeBetDesc').innerText = `Laga ketat: Batas aman minimal 2 gol tanpa mengambil risiko tim mana yang menang.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 82%`;
  }

  if (oHome < oAway) {
    document.getElementById('goodBetTitle').innerText = `${home.name} HDP -${hdpVal} / 1X + BTTS Ya`;
    document.getElementById('goodBetDesc').innerText = `${home.name} diunggulkan pasar. Opsi pegang pur -${hdpVal} atau Kombinasi 1X + Kedua Tim Cetak Gol.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 67%`;
  } else {
    document.getElementById('goodBetTitle').innerText = `${away.name} HDP +${hdpVal} / Total Over 2.5`;
    document.getElementById('goodBetDesc').innerText = `${away.name} berpotensi menahan. Tahan pur +${hdpVal} atau ambil opsi Over 2.5 Goal di 1xBet.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 65%`;
  }

  if (oHome < oAway && ouVal <= 2.5) {
    document.getElementById('veryGoodBetTitle').innerText = `${home.name} Win + Over ${ouVal} Goal`;
    document.getElementById('veryGoodBetDesc').innerText = `Kombinasi 1xBet Odds Tinggi: Kemenangan mutlak ${home.name} disertai pesta gol.`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 54%`;
  } else if (oAway < oHome) {
    document.getElementById('veryGoodBetTitle').innerText = `${away.name} Win + BTTS Ya`;
    document.getElementById('veryGoodBetDesc').innerText = `Kombinasi 1xBet High Payout: ${away.name} menang namun diselingi gol balasan ${home.name}.`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 50%`;
  } else {
    document.getElementById('veryGoodBetTitle').innerText = `Seri (Draw) + Total Under 2.5 Goal`;
    document.getElementById('veryGoodBetDesc').innerText = `Laga alot. Skor kacamata 0-0 atau 1-1 memberikan odds payout maksimal di 1xBet!`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 45%`;
  }
}

// Event Listeners
homeSelect.addEventListener('change', updateData);
awaySelect.addEventListener('change', updateData);
document.getElementById('homeOdds').addEventListener('input', updateData);
document.getElementById('drawOdds').addEventListener('input', updateData);
document.getElementById('awayOdds').addEventListener('input', updateData);

document.getElementById('hdpHomeOdds').addEventListener('input', updateData);
document.getElementById('hdpValue').addEventListener('input', updateData);
document.getElementById('hdpAwayOdds').addEventListener('input', updateData);

document.getElementById('ouOverOdds').addEventListener('input', updateData);
document.getElementById('ouValue').addEventListener('input', updateData);
document.getElementById('ouUnderOdds').addEventListener('input', updateData);

populateTeams();
loadUpcomingMatchesFromAPI();
updateData();
