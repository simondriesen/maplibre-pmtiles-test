export default {
  "id": "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
  "name": "MapLibre",
  "zoom": 0.8619833357855968,
  "pitch": 0,
  "center": [
      17.65431710431244,
      32.954120326746775
  ],
  "glyphs": "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  "layers": [
      {
          "id": "background",
          "type": "background",
          "paint": {
              "background-color": "#04996A"
          },
          "filter": [
              "all"
          ],
          "layout": {
              "visibility": "visible"
          },
          "maxzoom": 24
      },
  ],
  "bearing": 0,
  "sources": {
      "maplibre": {
          "url": "https://demotiles.maplibre.org/tiles/tiles.json",
          "type": "vector"
      },
      "protomaps": {
          "type": "raster",
          "url": "pmtiles://https://storage.cloud.google.com/hex-tiles/output.pmtiles",
      },
  },
  "version": 8,
  "metadata": {
      "maptiler:copyright": "This style was generated on MapTiler Cloud. Usage is governed by the license terms in https://github.com/maplibre/demotiles/blob/gh-pages/LICENSE",
      "openmaptiles:version": "3.x"
  }
}