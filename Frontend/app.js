 const map = L.map('map').setView([-33.9249, 18.4241], 11); // Cape Town

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = {
  "Cape Town Central": [-33.925, 18.424],
  "Khayelitsha": [-34.04, 18.68],
  "Mitchells Plain": [-34.04, 18.62],
};

function getColor(crimes) {
  if (crimes > 1000) return "red";
  if (crimes > 500) return "orange";
  return "green";
}
