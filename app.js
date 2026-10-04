const teamsData = [
  { id: "ESP", name: "Spanyol", rank: 3, league: "A", form: ["W", "W", "D", "W", "W"], formScore: 13 },
  { id: "FRA", name: "Prancis", rank: 2, league: "A", form: ["W", "L", "W", "W", "D"], formScore: 10 },
  { id: "ENG", name: "Inggris", rank: 4, league: "B", form: ["W", "W", "L", "W", "W"], formScore: 12 },
  { id: "GER", name: "Jerman", rank: 11, league: "A", form: ["W", "D", "W", "W", "D"], formScore: 11 },
  { id: "POR", name: "Portugal", rank: 8, league: "A", form: ["W", "W", "W", "D", "W"], formScore: 13 },
  { id: "NED", name: "Belanda", rank: 7, league: "A", form: ["D", "W", "D", "L", "W"], formScore: 8 },
  { id: "ITA", name: "Italia", rank: 10, league: "A", form: ["W", "W", "D", "W", "L"], formScore: 10 },
  { id: "BEL", name: "Belgia", rank: 6, league: "A", form: ["L", "D", "W", "L", "L"], formScore: 4 },
  { id: "CRO", name: "Kroasia", rank: 12, league: "A", form: ["D", "W", "L", "W", "D"], formScore: 8 },
  { id: "DEN", name: "Denmark", rank: 20, league: "A", form: ["W", "L", "D", "W", "L"], formScore: 7 }
];

const homeSelect = document.getElementById('homeTeam');
const awaySelect = document.getElementById('awayTeam');

function populateTeams() {
  teamsData.forEach(t => {
    const optHome = new Option(t.name, t.id);
    const optAway = new Option(t.name, t.id);
    homeSelect.add(optHome);
    awaySelect.add(optAway);
  });
  awaySelect.selectedIndex = 1;
}

function updateData() {
  const home = teamsData.find(t => t.id === homeSelect.value);
  const away = teamsData.find(t => t.id === awaySelect.value);

  // Update Stats UI
  document.getElementById('homeName').innerText = home.name;
  document.getElementById('homeRank').innerText = `#${home.rank}`;
  document.getElementById('homeLeague').innerText = `Liga ${home.league}`;
  document.getElementById('homeForm').innerText = home.form.join(' - ');

  document.getElementById('awayName').innerText = away.name;
  document.getElementById('awayRank').innerText = `#${away.rank}`;
  document.getElementById('awayLeague').innerText = `Liga ${away.league}`;
  document.getElementById('awayForm').innerText = away.form.join(' - ');

  // Dummy H2H Logic based on rank
  const h2hText = home.rank < away.rank 
    ? `${home.name} unggul dalam 5 pertemuan terakhir (3 Menang, 1 Seri, 1 Kalah).`
    : `${away.name} unggul dalam 5 pertemuan terakhir (2 Menang, 2 Seri, 1 Kalah).`;
  document.getElementById('h2hText').innerText = homeSelect.value === awaySelect.value ? "Pilih 2 tim berbeda." : h2hText;

  calculateAll(home, away);
}

function calculateAll(home, away) {
  const oHome = parseFloat(document.getElementById('homeOdds').value) || 1;
  const oDraw = parseFloat(document.getElementById('drawOdds').value) || 1;
  const oAway = parseFloat(document.getElementById('awayOdds').value) || 1;

  // Implied Probability from Odds
  const impH = (1 / oHome) * 100;
  const impD = (1 / oDraw) * 100;
  const impA = (1 / oAway) * 100;
  const totalMargin = impH + impD + impA;

  document.getElementById('marginVal').innerText = `${(totalMargin - 100).toFixed(2)}%`;
  document.getElementById('impHome').innerText = `${impH.toFixed(1)}%`;
  document.getElementById('impDraw').innerText = `${impD.toFixed(1)}%`;
  document.getElementById('impAway').innerText = `${impA.toFixed(1)}%`;

  // Algorithmic Calculation
  // 1. FIFA Score (lower rank is better)
  const rankDiff = away.rank - home.rank; 
  let algoHome = 40 + (rankDiff * 1.5) + (home.formScore * 1.5);
  let algoAway = 40 - (rankDiff * 1.5) + (away.formScore * 1.5);
  let algoDraw = 20;

  // Normalize
  const totalAlgo = algoHome + algoAway + algoDraw;
  const probH = Math.min(Math.max((algoHome / totalAlgo) * 100, 10), 80);
  const probA = Math.min(Math.max((algoAway / totalAlgo) * 100, 10), 80);
  const probD = 100 - (probH + probA);

  document.getElementById('probHome').innerText = `${probH.toFixed(1)}%`;
  document.getElementById('probDraw').innerText = `${probD.toFixed(1)}%`;
  document.getElementById('probAway').innerText = `${probA.toFixed(1)}%`;

  // Value Detection
  const recBadge = document.getElementById('valueRecommendation');
  if (probH > impH + 5) {
    recBadge.innerText = `💡 Value Pick Detected: Home (${home.name}) Odds Terlalu Tinggi!`;
    recBadge.className = "badge bg-success text-white p-2 fs-6";
  } else if (probA > impA + 5) {
    recBadge.innerText = `💡 Value Pick Detected: Away (${away.name}) Odds Terlalu Tinggi!`;
    recBadge.className = "badge bg-success text-white p-2 fs-6";
  } else {
    recBadge.innerText = "⚖️ Market Odds Pas / Sesuai dengan Algoritma";
    recBadge.className = "badge bg-secondary text-white p-2 fs-6";
  }
}

// Event Listeners
homeSelect.addEventListener('change', updateData);
awaySelect.addEventListener('change', updateData);
document.getElementById('homeOdds').addEventListener('input', updateData);
document.getElementById('drawOdds').addEventListener('input', updateData);
document.getElementById('awayOdds').addEventListener('input', updateData);

// Init
populateTeams();
updateData();

