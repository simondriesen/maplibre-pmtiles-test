import style from './style.js';

const { Protocol } = pmtiles;

let protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
  container: 'map',
  style,
});

map.on('style.load', () => {
  map.setProjection({ type: 'globe' });
});

map.on('load', async () => {
  // 
});