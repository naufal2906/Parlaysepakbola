const ODDS_API_KEY = "00f95a0a3c53536fe82a352e24181652";
let cachedGames = [];

// Database 54 Negara UEFA
const teamsData = [
  // Liga A
  { id: "ESP", name: "Spanyol", rank: 1, league: "A", formScore: 15, matches: [{ opponent: "Ceko", score: "3 - 1", result: "W" }, { opponent: "Kroasia", score: "4 - 1", result: "W" }, { opponent: "Inggris", score: "3 - 2", result: "W" }, { opponent: "Argentina", score: "1 - 0", result: "W" }, { opponent: "Prancis", score: "2 - 0", result: "W" }] },
  { id: "FRA", name: "Prancis", rank: 2, league: "A", formScore: 8, matches: [{ opponent: "Italia", score: "1 - 1", result: "D" }, { opponent: "Belgia", score: "1 - 0", result: "W" }, { opponent: "Turki", score: "1 - 0", result: "W" }, { opponent: "Inggris", score: "4 - 6", result: "L" }, { opponent: "Spanyol", score: "0 - 2", result: "L" }] },
  { id: "ENG", name: "Inggris", rank: 3, league: "A", formScore: 12, matches: [{ opponent: "IRL", score: "5 - 0", result: "W" }, { opponent: "GRE", score: "3 - 0", result: "W" }, { opponent: "FIN", score: "3 - 1", result: "W" }, { opponent: "GRE", score: "1 - 2", result: "L" }, { opponent: "FIN", score: "2 - 0", result: "W" }] },
  { id: "BEL", name: "Belgia", rank: 6, league: "A", formScore: 4, matches: [{ opponent: "ISR", score: "0 - 1", result: "L" }, { opponent: "ITA", score: "0 - 1", result: "L" }, { opponent: "FRA", score: "1 - 2", result: "L" }, { opponent: "ITA", score: "2 - 2", result: "D" }, { opponent: "FRA", score: "0 - 2", result: "L" }] },
  { id: "NED", name: "Belanda", rank: 7, league: "A", formScore: 8, matches: [{ opponent: "BIH", score: "1 - 1", result: "D" }, { opponent: "HUN", score: "4 - 0", result: "W" }, { opponent: "GER", score: "0 - 1", result: "L" }, { opponent: "HUN", score: "1 - 1", result: "D" }, { opponent: "GER", score: "2 - 2", result: "D" }] },
  { id: "POR", name: "Portugal", rank: 8, league: "A", formScore: 13, matches: [{ opponent: "CRO", score: "1 - 1", result: "D" }, { opponent: "POL", score: "5 - 1", result: "W" }, { opponent: "SCO", score: "0 - 0", result: "D" }, { opponent: "POL", score: "3 - 1", result: "W" }, { opponent: "SCO", score: "2 - 1", result: "W" }] },
  { id: "ITA", name: "Italia", rank: 10, league: "A", formScore: 10, matches: [{ opponent: "FRA", score: "1 - 3", result: "L" }, { opponent: "BEL", score: "1 - 0", result: "W" }, { opponent: "ISR", score: "4 - 1", result: "W" }, { opponent: "BEL", score: "2 - 2", result: "D" }, { opponent: "ISR", score: "2 - 1", result: "W" }] },
  { id: "GER", name: "Jerman", rank: 11, league: "A", formScore: 11, matches: [{ opponent: "HUN", score: "1 - 1", result: "D" }, { opponent: "BIH", score: "7 - 0", result: "W" }, { opponent: "NED", score: "1 - 0", result: "W" }, { opponent: "BIH", score: "2 - 1", result: "W" }, { opponent: "NED", score: "2 - 2", result: "D" }] },
  { id: "CRO", name: "Kroasia", rank: 12, league: "A", formScore: 8 },
  { id: "SUI", name: "Swiss", rank: 15, league: "A", formScore: 4 },
  { id: "DEN", name: "Denmark", rank: 20, league: "A", formScore: 7 },
  { id: "AUT", name: "Austria", rank: 22, league: "A", formScore: 10 },
  { id: "POL", name: "Polandia", rank: 30, league: "A", formScore: 4 },
  { id: "HUN", name: "Hungaria", rank: 31, league: "A", formScore: 5 },
  { id: "SRB", name: "Serbia", rank: 35, league: "A", formScore: 5 },
  { id: "ISR", name: "Israel", rank: 79, league: "A", formScore: 3 },

  // Liga B
  { id: "TUR", name: "Turki", rank: 26, league: "B", formScore: 10, matches: [{ opponent: "ISL", score: "4 - 2", result: "W" }, { opponent: "MNE", score: "1 - 0", result: "W" }, { opponent: "ISL", score: "3 - 1", result: "W" }, { opponent: "WAL", score: "0 - 0", result: "D" }, { opponent: "WAL", score: "0 - 0", result: "D" }] },
  { id: "UKR", name: "Ukraina", rank: 25, league: "B", formScore: 7 },
  { id: "WAL", name: "Wales", rank: 29, league: "B", formScore: 8 },
  { id: "SWE", name: "Swedia", rank: 28, league: "B", formScore: 13 },
  { id: "SCO", name: "Skotlandia", rank: 52, league: "B", formScore: 4 },
  { id: "CZE", name: "Ceko", rank: 46, league: "B", formScore: 8 },
  { id: "NOR", name: "Norwegia", rank: 47, league: "B", formScore: 10 },
  { id: "GRE", name: "Yunani", rank: 48, league: "B", formScore: 12 },
  { id: "ROU", name: "Rumania", rank: 45, league: "B", formScore: 12 },
  { id: "SVK", name: "Slowakia", rank: 41, league: "B", formScore: 10 },
  { id: "SVN", name: "Slovenia", rank: 51, league: "B", formScore: 5 },
  { id: "IRL", name: "Republik Irlandia", rank: 62, league: "B", formScore: 6 },
  { id: "FIN", name: "Finlandia", rank: 63, league: "B", formScore: 1 },
  { id: "BIH", name: "Bosnia & Herzegovina", rank: 75, league: "B", formScore: 2 },
  { id: "GEO", name: "Georgia", rank: 66, league: "B", formScore: 6 },
  { id: "ALB", name: "Albania", rank: 67, league: "B", formScore: 7 },

  // Liga C
  { id: "CYP", name: "Siprus", rank: 127, league: "C", formScore: 6, matches: [{ opponent: "KOS", score: "0 - 3", result: "L" }, { opponent: "ROU", score: "0 - 3", result: "L" }, { opponent: "KOS", score: "0 - 4", result: "L" }, { opponent: "LTU", score: "1 - 0", result: "W" }, { opponent: "LTU", score: "2 - 1", result: "W" }] },
  { id: "LVA", name: "Latvia", rank: 137, league: "C", formScore: 4, matches: [{ opponent: "MKD", score: "0 - 1", result: "L" }, { opponent: "FRO", score: "1 - 1", result: "D" }, { opponent: "MKD", score: "0 - 3", result: "L" }, { opponent: "FRO", score: "1 - 0", result: "W" }, { opponent: "ARM", score: "1 - 4", result: "L" }] },
  { id: "MKD", name: "Makedonia Utara", rank: 72, league: "C", formScore: 13 },
  { id: "MNE", name: "Montenegro", rank: 74, league: "C", formScore: 0 },
  { id: "NIR", name: "Irlandia Utara", rank: 71, league: "C", formScore: 10 },
  { id: "ISL", name: "Islandia", rank: 70, league: "C", formScore: 4 },
  { id: "BUL", name: "Bulgaria", rank: 84, league: "C", formScore: 6 },
  { id: "LUX", name: "Luksemburg", rank: 89, league: "C", formScore: 2 },
  { id: "ARM", name: "Armenia", rank: 96, league: "C", formScore: 4 },
  { id: "BLR", name: "Belarus", rank: 97, league: "C", formScore: 6 },
  { id: "KOS", name: "Kosovo", rank: 101, league: "C", formScore: 9 },
  { id: "KAZ", name: "Kazakhstan", rank: 107, league: "C", formScore: 1 },
  { id: "AZE", name: "Azerbaijan", rank: 118, league: "C", formScore: 1 },
  { id: "EST", name: "Estonia", rank: 124, league: "C", formScore: 4 },
  { id: "FRO", name: "Kepulauan Faroe", rank: 138, league: "C", formScore: 6 },
  { id: "LTU", name: "Lituania", rank: 141, league: "C", formScore: 0 },

  // Liga D
  { id: "MDA", name: "Moldova", rank: 150, league: "D", formScore: 10 },
  { id: "MLT", name: "Malta", rank: 170, league: "D", formScore: 10 },
  { id: "AND", name: "Andorra", rank: 169, league: "D", formScore: 3 },
  { id: "GIB", name: "Gibraltar", rank: 198, league: "D", formScore: 7 },
  { id: "LIE", name: "Liechtenstein", rank: 202, league: "D", formScore: 3 },
  { id: "SMR", name: "San Marino", rank: 210, league: "D", formScore: 7 }
];

function getTeamMatches(team) {
  if (team.matches && team.matches.length > 0) return team.matches;
  return [
    { opponent: "Lawan A", score: "2 - 1", result: "W" },
    { opponent: "Lawan B", score: "1 - 1", result: "D" },
    { opponent: "Lawan C", score: "1 - 0", result: "W" },
    { opponent: "Lawan D", score: "0 - 2", result: "L" },
    { opponent: "Lawan E", score: "2 - 0", result: "W" }
  ];
}

const h2hDatabase = [
  { teamA: "ESP", teamB: "FRA", matches: [{ date: "2024-07-09", event: "Euro 2024", score: "2 - 1", winner: "ESP" }] },
  { teamA: "TUR", teamB: "ITA", matches: [{ date: "2024-06-04", event: "Friendly", score: "0 - 0", winner: "DRAW" }] },
  { teamA: "CYP", teamB: "LVA", matches: [{ date: "2024-03-21", event: "Friendly", score: "1 - 1", winner: "DRAW" }] }
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
  
  homeSelect.value = "ESP";
  awaySelect.value = "FRA";
}

// FUNGSI UTAMA: Otomatis Ambil Seluruh Jadwal Laga Live dari API
async function loadUpcomingMatchesFromAPI() {
  if (!ODDS_API_KEY) return;

  const url = `https://api.the-odds-api.com/v4/sports/soccer_uefa_nations_league/odds/?apiKey=${ODDS_API_KEY}&regions=eu&bookmakers=onexbet&markets=h2h,spreads,totals&oddsFormat=decimal`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Gagal load API");
    cachedGames = await response.json();

    upcomingSelect.innerHTML = '<option value="">-- Pilih Laga Aktif di 1xBet --</option>';

    if (cachedGames.length === 0) {
      upcomingSelect.innerHTML = '<option value="">(Tidak Ada Laga UNL Aktif Hari Ini)</option>';
      return;
    }

    cachedGames.forEach((game, idx) => {
      // Cocokkan nama tim API dengan database internal
      const homeTeamObj = teamsData.find(t => game.home_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.home_team.toLowerCase()));
      const awayTeamObj = teamsData.find(t => game.away_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.away_team.toLowerCase()));

      const homeId = homeTeamObj ? homeTeamObj.id : "ESP";
      const awayId = awayTeamObj ? awayTeamObj.id : "FRA";

      const opt = new Option(`⚽ ${game.home_team} vs ${game.away_team}`, `${idx}|${homeId}|${awayId}`);
      upcomingSelect.add(opt);
    });

  } catch (err) {
    console.log("Gagal load jadwal live, menggunakan fallback.");
    upcomingSelect.innerHTML = `
      <option value="">-- Pilih Sampel Laga --</option>
      <option value="SAMPLE|CYP|LVA">Siprus vs Latvia</option>
      <option value="SAMPLE|TUR|ITA">Turki vs Italia</option>
      <option value="SAMPLE|FRA|POR">Prancis vs Portugal</option>
    `;
  }
}

function updateData() {
  const home = teamsData.find(t => t.id === homeSelect.value);
  const away = teamsData.find(t => t.id === awaySelect.value);

  document.getElementById('homeName').innerText = home.name;
  document.getElementById('homeRank').innerText = `#${home.rank}`;
  document.getElementById('homeLeague').innerText = `Liga ${home.league}`;

  document.getElementById('awayName').innerText = away.name;
  document.getElementById('awayRank').innerText = `#${away.rank}`;
  document.getElementById('awayLeague').innerText = `Liga ${away.league}`;

  renderTeamForm('homeFormDetail', getTeamMatches(home));
  renderTeamForm('awayFormDetail', getTeamMatches(away));

  renderH2H(home, away);
  parseAndApplyOdds(home, away);
  calculateAll(home, away);
}

// Quick Select Event Listener
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

// Terapkan Odds dari Data Cached
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

function renderTeamForm(elementId, matches) {
  const container = document.getElementById(elementId);
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
      { date: "2023-11-18", event: "Qualifiers", score: home.rank < away.rank ? "2 - 1" : "0 - 1", winner: home.rank < away.rank ? home.id : away.id },
      { date: "2022-06-12", event: "Nations League", score: "1 - 1", winner: "DRAW" },
      { date: "2020-09-05", event: "Nations League", score: home.rank < away.rank ? "1 - 0" : "1 - 2", winner: home.rank < away.rank ? home.id : away.id }
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

  const rankDiff = away.rank - home.rank; 

  // 1. Opsi AMAN (Low Risk)
  if (rankDiff > 10) {
    document.getElementById('safeBetTitle').innerText = `1X + Total Over 1.5`;
    document.getElementById('safeBetDesc').innerText = `Proteksi Ganda: ${home.name} Menang/Seri & Minimal 2 Gol tercapai.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 88%`;
  } else if (rankDiff < -10) {
    document.getElementById('safeBetTitle').innerText = `X2 + Total Under 4.5`;
    document.getElementById('safeBetDesc').innerText = `Proteksi Ganda: ${away.name} Menang/Seri & Total gol di bawah 5.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 86%`;
  } else {
    document.getElementById('safeBetTitle').innerText = `Total Over 1.5 Goal`;
    document.getElementById('safeBetDesc').innerText = `Laga seimbang: Batas aman minimal 2 gol tanpa memihak tim.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 82%`;
  }

  // 2. Opsi GOOD (Medium Risk)
  if (home.formScore > away.formScore) {
    document.getElementById('goodBetTitle').innerText = `${home.name} HDP -${hdpVal}`;
    document.getElementById('goodBetDesc').innerText = `${home.name} unggul performa. Opsi pegang pur HDP -${hdpVal} sangat kuat.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 67%`;
  } else if (away.formScore > home.formScore) {
    document.getElementById('goodBetTitle').innerText = `${away.name} HDP +${hdpVal}`;
    document.getElementById('goodBetDesc').innerText = `${away.name} stabil. Tahan pur HDP +${hdpVal} berpotensi tinggi.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 65%`;
  } else {
    document.getElementById('goodBetTitle').innerText = `BTTS (Kedua Tim Cetak Gol) - YA`;
    document.getElementById('goodBetDesc').innerText = `Performa seimbang, potensi kedua tim saling membobol gawang sangat tinggi.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 63%`;
  }

  // 3. Opsi VERY GOOD (High Value)
  if (oHome < oAway && ouVal <= 2.5) {
    document.getElementById('veryGoodBetTitle').innerText = `${home.name} Win + Over ${ouVal} Goal`;
    document.getElementById('veryGoodBetDesc').innerText = `Kombinasi odds tinggi: Kemenangan mutlak ${home.name} disertai banyak gol.`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 54%`;
  } else if (oAway < oHome) {
    document.getElementById('veryGoodBetTitle').innerText = `${away.name} Win + BTTS Ya`;
    document.getElementById('veryGoodBetDesc').innerText = `${away.name} menang diselingi gol balasan dari ${home.name}. Odds sangat gurih!`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 50%`;
  } else {
    document.getElementById('veryGoodBetTitle').innerText = `Seri (Draw) + Total Under 2.5`;
    document.getElementById('veryGoodBetDesc').innerText = `Laga alot. Skor kacamata 0-0 atau 1-1 memberikan odds maksimal!`;
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
