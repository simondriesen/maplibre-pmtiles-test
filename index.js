import style from './style.js';

const { Protocol } = pmtiles;

let protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
  container: 'map',
  style,
  minZoom: 2.5,
});

map.on('style.load', () => {
  map.setProjection({ type: 'globe' });
});