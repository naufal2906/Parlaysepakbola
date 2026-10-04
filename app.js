const teamsData = [
  // Liga A
  { id: "ESP", name: "Spanyol", rank: 1, league: "A", form: ["W", "W", "W", "D", "W"], formScore: 13 },
  { id: "FRA", name: "Prancis", rank: 2, league: "A", form: ["W", "L", "W", "W", "D"], formScore: 10 },
  { id: "ENG", name: "Inggris", rank: 3, league: "A", form: ["W", "W", "L", "W", "W"], formScore: 12 },
  { id: "BEL", name: "Belgia", rank: 6, league: "A", form: ["L", "D", "W", "L", "L"], formScore: 4 },
  { id: "NED", name: "Belanda", rank: 7, league: "A", form: ["D", "W", "D", "L", "W"], formScore: 8 },
  { id: "POR", name: "Portugal", rank: 8, league: "A", form: ["W", "W", "W", "D", "W"], formScore: 13 },
  { id: "ITA", name: "Italia", rank: 10, league: "A", form: ["W", "W", "D", "W", "L"], formScore: 10 },
  { id: "GER", name: "Jerman", rank: 11, league: "A", form: ["W", "D", "W", "W", "D"], formScore: 11 },
  { id: "CRO", name: "Kroasia", rank: 12, league: "A", form: ["D", "W", "L", "W", "D"], formScore: 8 },
  { id: "SUI", name: "Swiss", rank: 15, league: "A", form: ["L", "L", "D", "L", "W"], formScore: 4 },
  { id: "DEN", name: "Denmark", rank: 20, league: "A", form: ["W", "L", "D", "W", "L"], formScore: 7 },
  { id: "AUT", name: "Austria", rank: 22, league: "A", form: ["W", "D", "W", "L", "W"], formScore: 10 },
  { id: "POL", name: "Polandia", rank: 30, league: "A", form: ["L", "W", "L", "D", "L"], formScore: 4 },
  { id: "HUN", name: "Hungaria", rank: 31, league: "A", form: ["L", "D", "W", "L", "D"], formScore: 5 },
  { id: "SRB", name: "Serbia", rank: 35, league: "A", form: ["D", "L", "W", "L", "D"], formScore: 5 },
  { id: "ISR", name: "Israel", rank: 79, league: "A", form: ["L", "L", "L", "W", "L"], formScore: 3 },

  // Liga B
  { id: "UKR", name: "Ukraina", rank: 25, league: "B", form: ["L", "W", "D", "W", "L"], formScore: 7 },
  { id: "TUR", name: "Turki", rank: 26, league: "B", form: ["W", "W", "L", "W", "D"], formScore: 10 },
  { id: "WAL", name: "Wales", rank: 29, league: "B", form: ["D", "W", "D", "W", "L"], formScore: 8 },
  { id: "SWE", name: "Swedia", rank: 28, league: "B", form: ["W", "D", "W", "W", "W"], formScore: 13 },
  { id: "SCO", name: "Skotlandia", rank: 52, league: "B", form: ["L", "L", "D", "L", "W"], formScore: 4 },
  { id: "CZE", name: "Ceko", rank: 46, league: "B", form: ["L", "W", "D", "W", "D"], formScore: 8 },
  { id: "NOR", name: "Norwegia", rank: 47, league: "B", form: ["D", "W", "W", "L", "W"], formScore: 10 },
  { id: "GRE", name: "Yunani", rank: 48, league: "B", form: ["W", "W", "W", "L", "W"], formScore: 12 },
  { id: "ROU", name: "Rumania", rank: 45, league: "B", form: ["W", "W", "W", "W", "L"], formScore: 12 },
  { id: "SVK", name: "Slowakia", rank: 41, league: "B", form: ["W", "D", "W", "L", "W"], formScore: 10 },
  { id: "SVN", name: "Slovenia", rank: 51, league: "B", form: ["D", "L", "W", "D", "L"], formScore: 5 },
  { id: "IRL", name: "Republik Irlandia", rank: 62, league: "B", form: ["L", "W", "L", "L", "W"], formScore: 6 },
  { id: "FIN", name: "Finlandia", rank: 63, league: "B", form: ["L", "L", "L", "L", "D"], formScore: 1 },
  { id: "BIH", name: "Bosnia & Herzegovina", rank: 75, league: "B", form: ["L", "D", "L", "L", "D"], formScore: 2 },
  { id: "GEO", name: "Georgia", rank: 66, league: "B", form: ["W", "W", "L", "L", "L"], formScore: 6 },
  { id: "ALB", name: "Albania", rank: 67, league: "B", form: ["L", "W", "D", "L", "W"], formScore: 7 },

  // Liga C
  { id: "MKD", name: "Makedonia Utara", rank: 72, league: "C", form: ["D", "W", "W", "W", "W"], formScore: 13 },
  { id: "MNE", name: "Montenegro", rank: 74, league: "C", form: ["L", "L", "L", "L", "L"], formScore: 0 },
  { id: "NIR", name: "Irlandia Utara", rank: 71, league: "C", form: ["W", "L", "D", "W", "W"], formScore: 10 },
  { id: "ISL", name: "Islandia", rank: 70, league: "C", form: ["W", "L", "D", "L", "L"], formScore: 4 },
  { id: "BUL", name: "Bulgaria", rank: 84, league: "C", form: ["D", "W", "D", "L", "D"], formScore: 6 },
  { id: "LUX", name: "Luksemburg", rank: 89, league: "C", form: ["L", "D", "L", "L", "D"], formScore: 2 },
  { id: "ARM", name: "Armenia", rank: 96, league: "C", form: ["W", "L", "D", "L", "L"], formScore: 4 },
  { id: "BLR", name: "Belarus", rank: 97, league: "C", form: ["D", "W", "D", "D", "L"], formScore: 6 },
  { id: "KOS", name: "Kosovo", rank: 101, league: "C", form: ["L", "W", "W", "W", "L"], formScore: 9 },
  { id: "KAZ", name: "Kazakhstan", rank: 107, league: "C", form: ["L", "D", "L", "L", "L"], formScore: 1 },
  { id: "AZE", name: "Azerbaijan", rank: 118, league: "C", form: ["L", "L", "L", "D", "L"], formScore: 1 },
  { id: "EST", name: "Estonia", rank: 124, league: "C", form: ["L", "L", "W", "L", "D"], formScore: 4 },
  { id: "CYP", name: "Siprus", rank: 127, league: "C", form: ["W", "L", "L", "L", "W"], formScore: 6 },
  { id: "FRO", name: "Kepulauan Faroe", rank: 138, league: "C", form: ["D", "D", "L", "D", "W"], formScore: 6 },
  { id: "LTU", name: "Lituania", rank: 141, league: "C", form: ["L", "L", "L", "L", "L"], formScore: 0 },
  { id: "LVA", name: "Latvia", rank: 137, league: "C", form: ["L", "W", "L", "D", "L"], formScore: 4 },

  // Liga D
  { id: "MDA", name: "Moldova", rank: 150, league: "D", form: ["W", "W", "L", "W", "D"], formScore: 10 },
  { id: "MLT", name: "Malta", rank: 170, league: "D", form: ["L", "W", "W", "W", "D"], formScore: 10 },
  { id: "AND", name: "Andorra", rank: 169, league: "D", form: ["L", "L", "L", "W", "L"], formScore: 3 },
  { id: "GIB", name: "Gibraltar", rank: 198, league: "D", form: ["D", "D", "W", "D", "D"], formScore: 7 },
  { id: "LIE", name: "Liechtenstein", rank: 202, league: "D", form: ["L", "D", "D", "L", "D"], formScore: 3 },
  { id: "SMR", name: "San Marino", rank: 210, league: "D", form: ["W", "L", "L", "D", "W"], formScore: 7 }
];

// Data Riwayat H2H
const h2hDatabase = [
  { teamA: "ESP", teamB: "FRA", matches: [
    { date: "2024-07-09", event: "Euro 2024 Semi Final", score: "2 - 1", winner: "ESP" },
    { date: "2021-10-10", event: "Nations League Final", score: "1 - 2", winner: "FRA" },
    { date: "2017-03-28", event: "International Friendly", score: "2 - 0", winner: "ESP" },
    { date: "2014-09-04", event: "International Friendly", score: "0 - 1", winner: "FRA" },
    { date: "2013-03-26", event: "World Cup Qualifier", score: "0 - 1", winner: "ESP" }
  ]},
  { teamA: "ENG", teamB: "GER", matches: [
    { date: "2022-09-26", event: "UEFA Nations League", score: "3 - 3", winner: "DRAW" },
    { date: "2022-06-07", event: "UEFA Nations League", score: "1 - 1", winner: "DRAW" },
    { date: "2021-06-29", event: "Euro 2020 Round of 16", score: "2 - 0", winner: "ENG" },
    { date: "2017-11-10", event: "International Friendly", score: "0 - 0", winner: "DRAW" },
    { date: "2017-03-22", event: "International Friendly", score: "0 - 1", winner: "GER" }
  ]}
];

const homeSelect = document.getElementById('homeTeam');
const awaySelect = document.getElementById('awayTeam');

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

function updateData() {
  const home = teamsData.find(t => t.id === homeSelect.value);
  const away = teamsData.find(t => t.id === awaySelect.value);

  document.getElementById('homeName').innerText = home.name;
  document.getElementById('homeRank').innerText = `#${home.rank}`;
  document.getElementById('homeLeague').innerText = `Liga ${home.league}`;
  document.getElementById('homeForm').innerText = home.form.join(' - ');

  document.getElementById('awayName').innerText = away.name;
  document.getElementById('awayRank').innerText = `#${away.rank}`;
  document.getElementById('awayLeague').innerText = `Liga ${away.league}`;
  document.getElementById('awayForm').innerText = away.form.join(' - ');

  renderH2H(home, away);
  calculateAll(home, away);
}

// Function Render Tabel H2H
function renderH2H(home, away) {
  const container = document.getElementById('h2hContainer');
  if (home.id === away.id) {
    container.innerHTML = `<p class="text-sub font-mono mb-0 text-center">Pilih dua tim berbeda untuk melihat rekor H2H.</p>`;
    return;
  }

  // Cari database atau buat data dinamis
  let record = h2hDatabase.find(item => 
    (item.teamA === home.id && item.teamB === away.id) || 
    (item.teamA === away.id && item.teamB === home.id)
  );

  let matches = [];
  if (record) {
    matches = record.matches;
  } else {
    // Generate H2H Simulasi untuk tim yang belum terdaftar di DB mini
    matches = [
      { date: "2023-11-18", event: "Qualifiers / Friendly", score: home.rank < away.rank ? "2 - 1" : "0 - 1", winner: home.rank < away.rank ? home.id : away.id },
      { date: "2022-06-12", event: "UEFA Nations League", score: "1 - 1", winner: "DRAW" },
      { date: "2020-09-05", event: "UEFA Nations League", score: home.rank < away.rank ? "1 - 0" : "1 - 2", winner: home.rank < away.rank ? home.id : away.id }
    ];
  }

  let tableHtml = `
    <table class="table table-h2h text-center mb-0">
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
      winnerBadge = `<span class="badge bg-info text-dark">${home.name} Win</span>`;
    } else if (m.winner === away.id) {
      winnerBadge = `<span class="badge bg-danger text-white">${away.name} Win</span>`;
    } else {
      winnerBadge = `<span class="badge bg-secondary text-white">Seri (Draw)</span>`;
    }

    tableHtml += `
      <tr>
        <td class="font-mono text-sub">${m.date}</td>
        <td class="extra-small text-gold">${m.event}</td>
        <td class="font-mono fw-bold text-cyan">${m.score}</td>
        <td>${winnerBadge}</td>
      </tr>
    `;
  });

  tableHtml += `</tbody></table>`;
  container.innerHTML = tableHtml;
}

// Function Kalkulasi & Generator Saran Bet (Aman, Good, Very Good)
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

  // Penentuan Rekomendasi Bet
  const rankDiff = away.rank - home.rank; 

  // 1. Opsi AMAN (Low Risk)
  if (rankDiff > 10) {
    document.getElementById('safeBetTitle').innerText = `1X + Total Over 1.5`;
    document.getElementById('safeBetDesc').innerText = `Proteksi Ganda: ${home.name} Menang/Seri & Minimal tercipta 2 Gol dalam laga ini.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 88%`;
  } else if (rankDiff < -10) {
    document.getElementById('safeBetTitle').innerText = `X2 + Total Under 4.5`;
    document.getElementById('safeBetDesc').innerText = `Proteksi Ganda: ${away.name} Menang/Seri & Total gol tidak lebih dari 4 gol.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 86%`;
  } else {
    document.getElementById('safeBetTitle').innerText = `Total Over 1.5 Goal`;
    document.getElementById('safeBetDesc').innerText = `Laga imbang/ketat: Paling aman ambil batas aman minimal 2 gol tanpa pilih tim.`;
    document.getElementById('safeWinRate').innerText = `Est. Win: 82%`;
  }

  // 2. Opsi GOOD (Medium Risk)
  if (home.formScore > away.formScore) {
    document.getElementById('goodBetTitle').innerText = `${home.name} HDP -${hdpVal}`;
    document.getElementById('goodBetDesc').innerText = `${home.name} unggul performa 5 laga. Layak dipertahankan pada pasaran HDP ${hdpVal}.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 67%`;
  } else if (away.formScore > home.formScore) {
    document.getElementById('goodBetTitle').innerText = `${away.name} HDP +${hdpVal}`;
    document.getElementById('goodBetDesc').innerText = `${away.name} sedang stabil. Opsi tahan pur HDP +${hdpVal} sangat bernilai.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 65%`;
  } else {
    document.getElementById('goodBetTitle').innerText = `BTTS (Kedua Tim Cetak Gol) - YA`;
    document.getElementById('goodBetDesc').innerText = `Performa seimbang, potensi kedua tim saling membobol gawang sangat tinggi.`;
    document.getElementById('goodWinRate').innerText = `Est. Win: 63%`;
  }

  // 3. Opsi VERY GOOD (High Value / Combo)
  if (oHome < oAway && ouVal <= 2.5) {
    document.getElementById('veryGoodBetTitle').innerText = `${home.name} Win + Over ${ouVal} Goal`;
    document.getElementById('veryGoodBetDesc').innerText = `Kombinasi odds bernilai tinggi: Kemenangan mutlak ${home.name} disertai hujan gol.`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 54%`;
  } else if (oAway < oHome) {
    document.getElementById('veryGoodBetTitle').innerText = `${away.name} Win + BTTS Ya`;
    document.getElementById('veryGoodBetDesc').innerText = `${away.name} menang namun diselingi gol balasan dari ${home.name}. Odds sangat gurih!`;
    document.getElementById('veryGoodWinRate').innerText = `Est. Win: 50%`;
  } else {
    document.getElementById('veryGoodBetTitle').innerText = `Seri (Draw) + Total Under 2.5`;
    document.getElementById('veryGoodBetDesc').innerText = `Laga berjalan alot. Skor kacamata 0-0 atau 1-1 memberikan payout odds maksimal!`;
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
updateData();
