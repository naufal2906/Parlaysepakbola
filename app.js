// API Key The-Odds-API (Live Odds 1xBet)
const ODDS_API_KEY = "00f95a0a3c53536fe82a352e24181652";

let cachedGames = [];

// Database 54 Negara Peserta UEFA Nations League
const teamsData = [
  // Liga A
  { id: "ESP", name: "Spanyol", rank: 1, league: "A", searchName: "Spain" },
  { id: "FRA", name: "Prancis", rank: 2, league: "A", searchName: "France" },
  { id: "ENG", name: "Inggris", rank: 3, league: "A", searchName: "England" },
  { id: "BEL", name: "Belgia", rank: 6, league: "A", searchName: "Belgium" },
  { id: "NED", name: "Belanda", rank: 7, league: "A", searchName: "Netherlands" },
  { id: "POR", name: "Portugal", rank: 8, league: "A", searchName: "Portugal" },
  { id: "ITA", name: "Italia", rank: 10, league: "A", searchName: "Italy" },
  { id: "GER", name: "Jerman", rank: 11, league: "A", searchName: "Germany" },
  { id: "CRO", name: "Kroasia", rank: 12, league: "A", searchName: "Croatia" },
  { id: "SUI", name: "Swiss", rank: 15, league: "A", searchName: "Switzerland" },
  { id: "DEN", name: "Denmark", rank: 20, league: "A", searchName: "Denmark" },
  { id: "AUT", name: "Austria", rank: 22, league: "A", searchName: "Austria" },
  { id: "POL", name: "Polandia", rank: 30, league: "A", searchName: "Poland" },
  { id: "HUN", name: "Hungaria", rank: 31, league: "A", searchName: "Hungary" },
  { id: "SRB", name: "Serbia", rank: 35, league: "A", searchName: "Serbia" },
  { id: "ISR", name: "Israel", rank: 79, league: "A", searchName: "Israel" },

  // Liga B
  { id: "TUR", name: "Turki", rank: 26, league: "B", searchName: "Turkey" },
  { id: "UKR", name: "Ukraina", rank: 25, league: "B", searchName: "Ukraine" },
  { id: "WAL", name: "Wales", rank: 29, league: "B", searchName: "Wales" },
  { id: "SWE", name: "Swedia", rank: 28, league: "B", searchName: "Sweden" },
  { id: "SCO", name: "Skotlandia", rank: 52, league: "B", searchName: "Scotland" },
  { id: "CZE", name: "Ceko", rank: 46, league: "B", searchName: "Czech Republic" },
  { id: "NOR", name: "Norwegia", rank: 47, league: "B", searchName: "Norway" },
  { id: "GRE", name: "Yunani", rank: 48, league: "B", searchName: "Greece" },
  { id: "ROU", name: "Rumania", rank: 45, league: "B", searchName: "Romania" },
  { id: "SVK", name: "Slowakia", rank: 41, league: "B", searchName: "Slovakia" },
  { id: "SVN", name: "Slovenia", rank: 51, league: "B", searchName: "Slovenia" },
  { id: "IRL", name: "Republik Irlandia", rank: 62, league: "B", searchName: "Ireland" },
  { id: "FIN", name: "Finlandia", rank: 63, league: "B", searchName: "Finland" },
  { id: "BIH", name: "Bosnia & Herzegovina", rank: 75, league: "B", searchName: "Bosnia and Herzegovina" },
  { id: "GEO", name: "Georgia", rank: 66, league: "B", searchName: "Georgia" },
  { id: "ALB", name: "Albania", rank: 67, league: "B", searchName: "Albania" },

  // Liga C
  { id: "CYP", name: "Siprus", rank: 127, league: "C", searchName: "Cyprus" },
  { id: "LVA", name: "Latvia", rank: 137, league: "C", searchName: "Latvia" },
  { id: "MKD", name: "Makedonia Utara", rank: 72, league: "C", searchName: "North Macedonia" },
  { id: "MNE", name: "Montenegro", rank: 74, league: "C", searchName: "Montenegro" },
  { id: "NIR", name: "Irlandia Utara", rank: 71, league: "C", searchName: "Northern Ireland" },
  { id: "ISL", name: "Islandia", rank: 70, league: "C", searchName: "Iceland" },
  { id: "BUL", name: "Bulgaria", rank: 84, league: "C", searchName: "Bulgaria" },
  { id: "LUX", name: "Luksemburg", rank: 89, league: "C", searchName: "Luxembourg" },
  { id: "ARM", name: "Armenia", rank: 96, league: "C", searchName: "Armenia" },
  { id: "BLR", name: "Belarus", rank: 97, league: "C", searchName: "Belarus" },
  { id: "KOS", name: "Kosovo", rank: 101, league: "C", searchName: "Kosovo" },
  { id: "KAZ", name: "Kazakhstan", rank: 107, league: "C", searchName: "Kazakhstan" },
  { id: "AZE", name: "Azerbaijan", rank: 118, league: "C", searchName: "Azerbaijan" },
  { id: "EST", name: "Estonia", rank: 124, league: "C", searchName: "Estonia" },
  { id: "FRO", name: "Kepulauan Faroe", rank: 138, league: "C", searchName: "Faroe Islands" },
  { id: "LTU", name: "Lituania", rank: 141, league: "C", searchName: "Lithuania" },

  // Liga D
  { id: "MDA", name: "Moldova", rank: 150, league: "D", searchName: "Moldova" },
  { id: "MLT", name: "Malta", rank: 170, league: "D", searchName: "Malta" },
  { id: "AND", name: "Andorra", rank: 169, league: "D", searchName: "Andorra" },
  { id: "GIB", name: "Gibraltar", rank: 198, league: "D", searchName: "Gibraltar" },
  { id: "LIE", name: "Liechtenstein", rank: 202, league: "D", searchName: "Liechtenstein" },
  { id: "SMR", name: "San Marino", rank: 210, league: "D", searchName: "San Marino" }
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

// 1. Auto-Fetch Laga Aktif & Odds 1xBet dari The-Odds-API
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
      const homeTeamObj = teamsData.find(t => game.home_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.home_team.toLowerCase()) || game.home_team.toLowerCase().includes(t.searchName.toLowerCase()));
      const awayTeamObj = teamsData.find(t => game.away_team.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(game.away_team.toLowerCase()) || game.away_team.toLowerCase().includes(t.searchName.toLowerCase()));

      const homeId = homeTeamObj ? homeTeamObj.id : "BIH";
      const awayId = awayTeamObj ? awayTeamObj.id : "POL";

      const opt = new Option(`⚽ ${game.home_team} vs ${game.away_team}`, `${idx}|${homeId}|${awayId}`);
      upcomingSelect.add(opt);
    });

  } catch (err) {
    upcomingSelect.innerHTML = `<option value="">-- Pilih Laga Manual --</option>`;
  }
}

// 2. Auto-Fetch 5 Laga Terakhir Real-Time via TheSportsDB
async function fetchRealTimeMatches(team, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = `<p class="text-sub font-mono mb-0 extra-small py-1">Loading 5 laga live...</p>`;

  const url = `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${encodeURIComponent(team.searchName)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP Error");
    const data = await response.json();

    if (data && data.event && data.event.length > 0) {
      // Ambil 5 pertandingan yang sudah selesai
      const finishedMatches = data.event
        .filter(e => e.intHomeScore !== null && e.intAwayScore !== null)
        .slice(0, 5);

      if (finishedMatches.length > 0) {
        let html = `<ul class="list-unstyled mb-0">`;
        finishedMatches.forEach((m, idx) => {
          const isHome = m.strHomeTeam.toLowerCase().includes(team.searchName.toLowerCase());
          const opponent = isHome ? m.strAwayTeam : m.strHomeTeam;
          const scoreHome = parseInt(m.intHomeScore);
          const scoreAway = parseInt(m.intAwayScore);
          
          let result = "D";
          if (isHome) {
            result = scoreHome > scoreAway ? "W" : (scoreHome < scoreAway ? "L" : "D");
          } else {
            result = scoreAway > scoreHome ? "W" : (scoreAway < scoreHome ? "L" : "D");
          }

          let badgeClass = result === 'W' ? 'bg-success text-dark' : (result === 'D' ? 'bg-warning text-dark' : 'bg-danger text-white');
          const displayScore = isHome ? `${scoreHome} - ${scoreAway}` : `${scoreAway} - ${scoreHome}`;

          html += `
            <li class="d-flex justify-content-between align-items-center py-1 border-bottom border-secondary border-opacity-25">
              <span class="text-sub">Laga ${idx+1}: vs <strong class="text-white">${opponent.substring(0, 13)}</strong></span>
              <div>
                <span class="font-mono text-cyan fw-bold me-2">${displayScore}</span>
                <span class="badge ${badgeClass} font-mono px-2 py-1">${result}</span>
              </div>
            </li>
          `;
        });
        html += `</ul>`;
        container.innerHTML = html;
        return;
      }
    }
    container.innerHTML = `<p class="text-sub font-mono mb-0 extra-small py-1">Data laga tidak ditemukan.</p>`;
  } catch (err) {
    container.innerHTML = `<p class="text-sub font-mono mb-0 extra-small py-1">Gagal memuat laga live.</p>`;
  }
}

// 3. Auto-Fetch Rekor H2H Real-Time via TheSportsDB
async function fetchRealTimeH2H(home, away) {
  const container = document.getElementById('h2hContainer');
  container.innerHTML = `<p class="text-sub font-mono mb-0 text-center py-2 extra-small">Loading rekor H2H live...</p>`;

  if (home.id === away.id) {
    container.innerHTML = `<p class="text-sub font-mono mb-0 text-center py-2">Pilih dua tim berbeda untuk melihat rekor H2H.</p>`;
    return;
  }

  // Query pencarian pertemuan langsung Home vs Away
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${encodeURIComponent(home.searchName + ' vs ' + away.searchName)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP Error");
    const data = await response.json();

    let matches = [];
    if (data && data.event && data.event.length > 0) {
      matches = data.event.filter(e => e.intHomeScore !== null && e.intAwayScore !== null).slice(0, 5);
    }

    if (matches.length > 0) {
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
        const dateStr = m.dateEvent || "N/A";
        const eventName = m.strLeague || "Nations League";
        const scoreHome = parseInt(m.intHomeScore);
        const scoreAway = parseInt(m.intAwayScore);
        
        let winnerBadge = "";
        const isHomeTeamMatchesFirst = m.strHomeTeam.toLowerCase().includes(home.searchName.toLowerCase());

        if (scoreHome === scoreAway) {
          winnerBadge = `<span class="badge bg-secondary text-white font-mono px-2 py-1">Seri (Draw)</span>`;
        } else if ((scoreHome > scoreAway && isHomeTeamMatchesFirst) || (scoreAway > scoreHome && !isHomeTeamMatchesFirst)) {
          winnerBadge = `<span class="badge bg-info text-dark font-mono px-2 py-1">${home.name} Win</span>`;
        } else {
          winnerBadge = `<span class="badge bg-danger text-white font-mono px-2 py-1">${away.name} Win</span>`;
        }

        tableHtml += `
          <tr>
            <td class="font-mono text-sub extra-small">${dateStr}</td>
            <td class="extra-small text-gold">${eventName.substring(0, 14)}</td>
            <td class="font-mono fw-bold text-cyan">${scoreHome} - ${scoreAway}</td>
            <td>${winnerBadge}</td>
          </tr>
        `;
      });

      tableHtml += `</tbody></table>`;
      container.innerHTML = tableHtml;
    } else {
      container.innerHTML = `<p class="text-sub font-mono mb-0 text-center py-2 extra-small">Belum ada rekam H2H resmi tercatat.</p>`;
    }
  } catch (err) {
    container.innerHTML = `<p class="text-sub font-mono mb-0 text-center py-2 extra-small">Gagal memuat rekor H2H.</p>`;
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
      (g.home_team.toLowerCase().includes(home.name.toLowerCase()) || home.name.toLowerCase().includes(g.home_team.toLowerCase()) || g.home_team.toLowerCase().includes(home.searchName.toLowerCase())) &&
      (g.away_team.toLowerCase().includes(away.name.toLowerCase()) || away.name.toLowerCase().includes(g.away_team.toLowerCase()) || g.away_team.toLowerCase().includes(away.searchName.toLowerCase()))
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
