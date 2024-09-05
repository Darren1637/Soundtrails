var map = L.map('map').setView([54.325541733763515, -5.7182889832314325], 100);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([54.325541733763515, -5.7182889832314325]).addTo(map)
    .bindPopup('This site was made<br>in this classroom :D')
    .openPopup();

    L.marker([54.32582875328702, -5.719314989022636]).addTo(map)
    .bindPopup('This is the local bus depot')
    .openPopup();
    
    L.marker([54.325036883844284, -5.71909536748454]).addTo(map)
    .bindPopup('Topaz Filling Station')
    .openPopup();

    L.marker([54.32472437065648, -5.7193537333490925]).addTo(map)
    .bindPopup('Apache Pizza')
    .openPopup();

    L.marker([54.32587024074349, -5.718010868793115]).addTo(map)
    .bindPopup('Lidl (grocery shop)')
    .openPopup();

    L.marker([54.32522848302366, -5.718208630319069]).addTo(map)
    .bindPopup('Serc Downpatrick Campus')
    .openPopup();

    L.marker([54.32626985458656, -5.718912657672032]).addTo(map)
    .bindPopup('Downpatrick Library')
    .openPopup();
 
 
if ('geolocation' in navigator) {
    console.log('Geolocation is Available');
  } else {
    console.log('Geolocation is NOT Available');
  }
  function success(position) {
    console.log(position);
  }
  
  navigator.geolocation.getCurrentPosition(success);

 
  
  
  
    