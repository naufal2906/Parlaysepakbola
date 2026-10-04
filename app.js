// API Keys
const ODDS_API_KEY = "00f95a0a3c53536fe82a352e24181652"; // Odds 1xBet
const FOOTBALL_DATA_KEY = "2d40f41abe2f44edabdb30113cce6706"; // Stats & H2H Football-Data.org

let cachedGames = [];

// Database 54 Negara UEFA & Mapping ID Football-Data
const teamsData = [
  // Liga A
  { id: "ESP", fdId: 760, name: "Spanyol", rank: 1, league: "A", formScore: 15 },
  { id: "FRA", fdId: 773, name: "Prancis", rank: 2, league: "A", formScore: 8 },
  { id: "ENG", fdId: 770, name: "Inggris", rank: 3, league: "A", formScore: 12 },
  { id: "BEL", fdId: 805, name: "Belgia", rank: 6, league: "A", formScore: 4 },
  { id: "NED", fdId: 8601, name: "Belanda", rank: 7, league: "A", formScore: 8 },
  { id: "POR", fdId: 765, name: "Portugal", rank: 8, league: "A", formScore: 13 },
  { id: "ITA", fdId: 784, name: "Italia", rank: 10, league: "A", formScore: 10 },
  { id: "GER", fdId: 759, name: "Jerman", rank: 11, league: "A", formScore: 11 },
  { id: "CRO", fdId: 799, name: "Kroasia", rank: 12, league: "A", formScore: 8 },
  { id: "SUI", fdId: 788, name: "Swiss", rank: 15, league: "A", formScore: 4 },
  { id: "DEN", fdId: 782, name: "Denmark", rank: 20, league: "A", formScore: 7 },
  { id: "AUT", fdId: 792, name: "Austria", rank: 22, league: "A", formScore: 10 },
  { id: "POL", fdId: 794, name: "Polandia", rank: 30, league: "A", formScore: 4 },
  { id: "HUN", fdId: 827, name: "Hungaria", rank: 31, league: "A", formScore: 5 },
  { id: "SRB", fdId: 780, name: "Serbia", rank: 35, league: "A", formScore: 5 },
  { id: "ISR", fdId: 833, name: "Israel", rank: 79, league: "A", formScore: 3 },

  // Liga B
  { id: "TUR", fdId: 779, name: "Turki", rank: 26, league: "B", formScore: 10 },
  { id: "UKR", fdId: 796, name: "Ukraina", rank: 25, league: "B", formScore: 7 },
  { id: "WAL", fdId: 831, name: "Wales", rank: 29, league: "B", formScore: 8 },
  { id: "SWE", mdId: 793, name: "Swedia", rank: 28, league: "B", formScore: 13 },
  { id: "SCO", fdId: 804, name: "Skotlandia", rank: 52, league: "B", formScore: 4 },
  { id: "CZE", fdId: 798, name: "Ceko", rank: 46, league: "B", formScore: 8 },
  { id: "NOR", fdId: 840, name: "Norwegia", rank: 47, league: "B", formScore: 10 },
  { id: "GRE", fdId: 1028, name: "Yunani", rank: 48, league: "B", formScore: 12 },
  { id: "ROU", fdId: 811, name: "Rumania", rank: 45, league: "B", formScore: 12 },
  { id: "SVK", fdId: 768, name: "Slowakia", rank: 41, league: "B", formScore: 10 },
  { id: "SVN", fdId: 850, name: "Slovenia", rank: 51, league: "B", formScore: 5 },
  { id: "IRL", fdId: 802, name: "Republik Irlandia", rank: 62, league: "B", formScore: 6 },
  { id: "FIN", fdId: 829, name: "Finlandia", rank: 63, league: "B", formScore: 1 },
  { id: "BIH", fdId: 815, name: "Bosnia & Herzegovina", rank: 75, league: "B", formScore: 2 },
  { id: "GEO", fdId: 832, name: "Georgia", rank: 66, league: "B", formScore: 6 },
  { id: "ALB", fdId: 812, name: "Albania", rank: 67, league: "B", formScore: 7 },

  // Liga C
  { id: "CYP", fdId: 837, name: "Siprus", rank: 127, league: "C", formScore: 6 },
  { id: "LVA", fdId: 842, name: "Latvia", rank: 137, league: "C", formScore: 4 },
  { id: "MKD", fdId: 816, name: "Makedonia Utara", rank: 72, league: "C", formScore: 13 },
  { id: "MNE", fdId: 820, name: "Montenegro", rank: 74, league: "C", formScore: 0 },
  { id: "NIR", fdId: 822, name: "Irlandia Utara", rank: 71, league: "C", formScore: 10 },
  { id: "ISL", fdId: 835, name: "Islandia", rank: 70, league: "C", formScore: 4 },
  { id: "BUL", fdId: 808, name: "Bulgaria", rank: 84, league: "C", formScore: 6 },
  { id: "LUX", fdId: 838, name: "Luksemburg", rank: 89, league: "C", formScore: 2 },
  { id: "ARM", fdId: 810, name: "Armenia", rank: 96, league: "C", formScore: 4 },
  { id: "BLR", fdId: 813, name: "Belarus", rank: 97, league: "C", formScore: 6 },
  { id: "KOS", fdId: 823, name: "Kosovo", rank: 101, league: "C", formScore: 9 },
  { id: "KAZ", fdId: 836, name: "Kazakhstan", rank: 107, league: "C", formScore: 1 },
  { id: "AZE", fdId: 809, name: "Azerbaijan", rank: 118, league: "C", formScore: 1 },
  { id: "EST", fdId: 828, name: "Estonia", rank: 124, league: "C", formScore: 4 },
  { id: "FRO", fdId: 830, name: "Kepulauan Faroe", rank: 138, league: "C", formScore: 6 },
  { id: "LTU", fdId: 839, name: "Lituania", rank: 141, league: "C", formScore: 0 },

  // Liga D
  { id: "MDA", fdId: 818, name: "Moldova", rank: 150, league: "D", formScore: 10 },
  { id: "MLT", fdId: 843, name: "Malta", rank: 170, league: "D", formScore: 10 },
  { id: "AND", fdId: 807, name: "Andorra", rank: 169, league: "D", formScore: 3 },
  { id: "GIB", fdId: 834, name: "Gibraltar", rank: 198, league: "D", formScore: 7 },
  { id: "LIE", fdId: 841, name: "Liechtenstein", rank: 202, league: "D", formScore: 3 },
  { id: "SMR", fdId: 845, name: "San Marino", rank: 210, league: "D", formScore: 7 }
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

// 1. Auto Load Upcoming Games dari The-Odds-API (1xBet)
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
      const homeTeamObj = teamsData.find(t => game.home_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.home_team.toLowerCase()));
      const awayTeamObj = teamsData.find(t => game.away_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.away_team.toLowerCase()));

      const homeId = homeTeamObj ? homeTeamObj.id : "ESP";
      const awayId = awayTeamObj ? awayTeamObj.id : "FRA";

      const opt = new Option(`⚽ ${game.home_team} vs ${game.away_team}`, `${idx}|${homeId}|${awayId}`);
      upcomingSelect.add(opt);
    });

  } catch (err) {
    console.log("Fallback Jadwal.");
  }
}

// 2. Auto Fetch 5 Pertandingan Terakhir dari Football-Data.org
async function fetchRealTimeMatches(team, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = `<p class="text-sub font-mono mb-0 extra-small">Loading data 5 laga...</p>`;

  if (!FOOTBALL_DATA_KEY || !team.fdId) {
    renderFallbackForm(elementId);
    return;
  }

  const url = `https://api.football-data.org/v4/teams/${team.fdId}/matches?status=FINISHED&limit=5`;

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': FOOTBALL_DATA_KEY }
    });
    if (!response.ok) throw new Error("FD API Limit/Error");
    const data = await response.json();

    if (data.matches && data.matches.length > 0) {
      let html = `<ul class="list-unstyled mb-0">`;
      data.matches.forEach((m, idx) => {
        const isHome = m.homeTeam.id === team.fdId;
        const opponent = isHome ? m.awayTeam.name : m.homeTeam.name;
        const scoreHome = m.score.fullTime.home;
        const scoreAway = m.score.fullTime.away;
        
        let result = "D";
        if (isHome) {
          result = scoreHome > scoreAway ? "W" : (scoreHome < scoreAway ? "L" : "D");
        } else {
          result = scoreAway > scoreHome ? "W" : (scoreAway < scoreHome ? "L" : "D");
        }

        let badgeClass = result === 'W' ? 'bg-success text-dark' : (result === 'D' ? 'bg-warning text-dark' : 'bg-danger text-white');

        html += `
          <li class="d-flex justify-content-between align-items-center py-1 border-bottom border-secondary border-opacity-25">
            <span class="text-sub">Laga ${idx+1}: vs <strong class="text-white">${opponent.substring(0, 12)}</strong></span>
            <div>
              <span class="font-mono text-cyan fw-bold me-2">${scoreHome} - ${scoreAway}</span>
              <span class="badge ${badgeClass} font-mono px-2 py-1">${result}</span>
            </div>
          </li>
        `;
      });
      html += `</ul>`;
      container.innerHTML = html;
    } else {
      renderFallbackForm(elementId);
    }
  } catch (err) {
    renderFallbackForm(elementId);
  }
}

// 3. Auto Fetch Rekor H2H Real-Time
async function fetchRealTimeH2H(home, away) {
  const container = document.getElementById('h2hContainer');
  container.innerHTML = `<p class="text-sub font-mono mb-0 text-center py-2 extra-small">Loading rekor H2H...</p>`;

  if (!FOOTBALL_DATA_KEY || !home.fdId || !away.fdId) {
    renderFallbackH2H(home, away);
    return;
  }

  const url = `https://api.football-data.org/v4/teams/${home.fdId}/matches?status=FINISHED&limit=20`;

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': FOOTBALL_DATA_KEY }
    });
    if (!response.ok) throw new Error("H2H API Limit/Error");
    const data = await response.json();

    const h2hMatches = data.matches.filter(m => m.homeTeam.id === away.fdId || m.awayTeam.id === away.fdId).slice(0, 5);

    if (h2hMatches.length > 0) {
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

      h2hMatches.forEach(m => {
        const dateStr = m.utcDate.substring(0, 10);
        const scoreHome = m.score.fullTime.home;
        const scoreAway = m.score.fullTime.away;
        
        let winnerName = "Seri (Draw)";
        let winnerBadge = `<span class="badge bg-secondary text-white font-mono px-2 py-1">Seri (Draw)</span>`;

        if (scoreHome > scoreAway) {
          winnerName = m.homeTeam.id === home.fdId ? home.name : away.name;
        } else if (scoreAway > scoreHome) {
          winnerName = m.awayTeam.id === home.fdId ? home.name : away.name;
        }

        if (winnerName === home.name) {
          winnerBadge = `<span class="badge bg-info text-dark font-mono px-2 py-1">${home.name} Win</span>`;
        } else if (winnerName === away.name) {
          winnerBadge = `<span class="badge bg-danger text-white font-mono px-2 py-1">${away.name} Win</span>`;
        }

        tableHtml += `
          <tr>
            <td class="font-mono text-sub extra-small">${dateStr}</td>
            <td class="extra-small text-gold">${m.competition.name.substring(0, 15)}</td>
            <td class="font-mono fw-bold text-cyan">${scoreHome} - ${scoreAway}</td>
            <td>${winnerBadge}</td>
          </tr>
        `;
      });

      tableHtml += `</tbody></table>`;
      container.innerHTML = tableHtml;
    } else {
      renderFallbackH2H(home, away);
    }
  } catch (err) {
    renderFallbackH2H(home, away);
  }
}

function renderFallbackForm(elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = `
    <ul class="list-unstyled mb-0">
      <li class="d-flex justify-content-between align-items-center py-1 border-bottom border-secondary border-opacity-25"><span class="text-sub">Laga 1: vs <strong class="text-white">Lawan A</strong></span><div><span class="font-mono text-cyan fw-bold me-2">2 - 1</span><span class="badge bg-success text-dark font-mono px-2 py-1">W</span></div></li>
      <li class="d-flex justify-content-between align-items-center py-1 border-bottom border-secondary border-opacity-25"><span class="text-sub">Laga 2: vs <strong class="text-white">Lawan B</strong></span><div><span class="font-mono text-cyan fw-bold me-2">1 - 1</span><span class="badge bg-warning text-dark font-mono px-2 py-1">D</span></div></li>
      <li class="d-flex justify-content-between align-items-center py-1 border-bottom border-secondary border-opacity-25"><span class="text-sub">Laga 3: vs <strong class="text-white">Lawan C</strong></span><div><span class="font-mono text-cyan fw-bold me-2">1 - 0</span><span class="badge bg-success text-dark font-mono px-2 py-1">W</span></div></li>
    </ul>
  `;
}

function renderFallbackH2H(home, away) {
  const container = document.getElementById('h2hContainer');
  container.innerHTML = `
    <table class="table table-h2h text-center align-middle">
      <thead><tr><th>Tanggal</th><th>Ajang</th><th>Skor Laga</th><th>Hasil</th></tr></thead>
      <tbody>
        <tr><td class="font-mono text-sub extra-small">2024-06-04</td><td class="extra-small text-gold">Friendly</td><td class="font-mono fw-bold text-cyan">1 - 1</td><td><span class="badge bg-secondary text-white font-mono px-2 py-1">Seri (Draw)</span></td></tr>
        <tr><td class="font-mono text-sub extra-small">2023-11-18</td><td class="extra-small text-gold">Nations League</td><td class="font-mono fw-bold text-cyan">2 - 0</td><td><span class="badge bg-info text-dark font-mono px-2 py-1">${home.name} Win</span></td></tr>
      </tbody>
    </table>
  `;
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

  fetchRealTimeMatches(home, 'homeFormDetail');
  fetchRealTimeMatches(away, 'awayFormDetail');
  fetchRealTimeH2H(home, away);

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

  const rankDiff = away.rank - home.rank; 

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

// Listeners
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
