 const map = L.map('map').setView([-33.9249, 18.4241], 12); // Cape Town

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const reportsWithCoords = [
  {type: "Theft", locations: "Main Street", coords: [ -33.92, 18.42]},
  {type: "Assault", locations: "Central Park", time: 26, coords: [ -33.93, 18.45]},
  {type: "Burglary", locations: "Sunset Avenue", time: 26, coords: [ -33.91, 18.40]}
];

// ADD MARKERS TO MAP
reportsWithCoords.forEach(report => {
  L.marker(report.coords).addTo(map)
    .bindPopup(`<b>${report.type}</b><br>${report.locations}<br>${report.time} hours ago`);
});

// DSIPLAY FUNCTION
function displayReports(filteredReports) {
  const container = document.getElementById("reportsContainer");
  container.innerHTML = "";
  filteredReports.forEach(report => {
    container.innerHTML += `
      <div class="report-card">
        <h3>${report.type}</h3>
        <p>Location: ${report.locations}</p>
        <span>${report.time} hours ago</span>
      </div>
    `;
  });
}

// FILTER FUNCTION
document.getElementById('applyFilters').addEventListener('click', () => {
  const crimeType = document.getElementById("crimeType").value;
  const timeFilter = document.getElementById("timeFilter").value;

  let filtered = reports;

  if (type !== "all") {
    filtered = filtered.filter(r => r.type === type);
  }

  if (time !== "all") {
    const hours = parseInt(timeFilter);
    filtered = filtered.filter(r => r.time <= parseInt(time));
  }

  displayReports(filtered);
});



// INITIAL DISPLAY
displayReports("reports");


