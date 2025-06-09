export default {
  "id": "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
  "name": "hex-it",
  "glyphs": "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#d9dfff"
      },
      "filter": [
          "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "maxzoom": 24
    },
    {
      "id": "hex-fill",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "input",
      "paint": {
        "fill-color": [
          "match",
          ["get", "worldcover"],
          "10", "#228B22",
          "20", "#f3722c",
          "30", "#f9c74f",
          "40", "#90be6d",
          "50", "#43aa8b",
          "60", "#f4e3b1",
          "70", "#ffffff",
          "100", "#9c89b8",
          "110", "transparent",
          "transparent"
        ],
      },
      "maxzoom": 24,
    }
  ],
  "bearing": 0,
  "sources": {
    "maplibre": {
      "url": "https://demotiles.maplibre.org/tiles/tiles.json",
      "type": "vector"
    },
    "protomaps": {
      "url": "pmtiles://https://storage.googleapis.com/hex-tiles/pmtiles/output_2-6.pmtiles",
      "type": "vector",
    },
  },
  "version": 8,
  "metadata": {
    "maptiler:copyright": "This style was generated on MapTiler Cloud. Usage is governed by the license terms in https://github.com/maplibre/demotiles/blob/gh-pages/LICENSE",
    "openmaptiles:version": "3.x"
  }
}