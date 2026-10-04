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

  const h2hText = home.rank < away.rank 
    ? `${home.name} secara statistik unggul atas ${away.name} (Berdasarkan Peringkat FIFA & Performa).`
    : `${away.name} secara statistik unggul atas ${home.name} (Berdasarkan Peringkat FIFA & Performa).`;
  document.getElementById('h2hText').innerText = homeSelect.value === awaySelect.value ? "Pilih 2 tim berbeda." : h2hText;

  calculateAll(home, away);
}

function calculateAll(home, away) {
  const oHome = parseFloat(document.getElementById('homeOdds').value) || 1;
  const oDraw = parseFloat(document.getElementById('drawOdds').value) || 1;
  const oAway = parseFloat(document.getElementById('awayOdds').value) || 1;

  const impH = (1 / oHome) * 100;
  const impD = (1 / oDraw) * 100;
  const impA = (1 / oAway) * 100;
  const totalMargin = impH + impD + impA;

  document.getElementById('marginVal').innerText = `${(totalMargin - 100).toFixed(2)}%`;
  document.getElementById('impHome').innerText = `${impH.toFixed(1)}%`;
  document.getElementById('impDraw').innerText = `${impD.toFixed(1)}%`;
  document.getElementById('impAway').innerText = `${impA.toFixed(1)}%`;

  const rankDiff = away.rank - home.rank; 
  let algoHome = 40 + (rankDiff * 0.4) + (home.formScore * 1.2);
  let algoAway = 40 - (rankDiff * 0.4) + (away.formScore * 1.2);
  let algoDraw = 20;

  const totalAlgo = algoHome + algoAway + algoDraw;
  const probH = Math.min(Math.max((algoHome / totalAlgo) * 100, 5), 85);
  const probA = Math.min(Math.max((algoAway / totalAlgo) * 100, 5), 85);
  const probD = 100 - (probH + probA);

  document.getElementById('probHome').innerText = `${probH.toFixed(1)}%`;
  document.getElementById('probDraw').innerText = `${probD.toFixed(1)}%`;
  document.getElementById('probAway').innerText = `${probA.toFixed(1)}%`;

  const recBadge = document.getElementById('valueRecommendation');
  if (probH > impH + 5) {
    recBadge.innerText = `💡 Value Pick Detected: Home (${home.name}) Odds Terlalu Tinggi!`;
  } else if (probA > impA + 5) {
    recBadge.innerText = `💡 Value Pick Detected: Away (${away.name}) Odds Terlalu Tinggi!`;
  } else {
    recBadge.innerText = "⚖️ Market Odds Pas / Sesuai dengan Algoritma";
  }
}

// Event Listeners
homeSelect.addEventListener('change', updateData);
awaySelect.addEventListener('change', updateData);
document.getElementById('homeOdds').addEventListener('input', updateData);
document.getElementById('drawOdds').addEventListener('input', updateData);
document.getElementById('awayOdds').addEventListener('input', updateData);

document.getElementById('hdpHomeOdds').addEventListener('input', updateData);
document.getElementById('hdpValue').addEventListener('change', updateData);
document.getElementById('hdpAwayOdds').addEventListener('input', updateData);

document.getElementById('ouOverOdds').addEventListener('input', updateData);
document.getElementById('ouValue').addEventListener('change', updateData);
document.getElementById('ouUnderOdds').addEventListener('input', updateData);

populateTeams();
updateData();
