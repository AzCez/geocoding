import "bootstrap";


import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9iZWV0cmF2ZWwiLCJhIjoiY2syM2FkamVrMGw2YTNsbXpuY3NwdTVxciJ9.tvaavgmzqsqDjAblGVJ9Kw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});
