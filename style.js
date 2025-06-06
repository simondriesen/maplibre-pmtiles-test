export default {
  "id": "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
  "name": "hex-it",
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
      {
        id: 'hex-fill',
        type: 'fill',
        type: 'fill-extrusion',
        source: 'protomaps',
        paint: {
          'fill-extrusion-color': [
            'case',
            ['==', ['get', 'walkable'], false], '#000000',
            [
              'match',
              ['get', 'landcover'],
              1, '#004d00',   // Tree cover (darker green)
              2, '#339900',   // Shrubland (medium green)
              3, '#66cc33',   // Grassland (lighter green)
              4, '#99cc66',   // Cropland (light green)
              5, '#66ff33',   // Built-up (bright green)
              6, '#b3d9b3',   // Bare (pale green)
              7, '#e6f7e6',   // Snow/Ice (very light green)
              8, '#33cc33',   // Water (bright green)
              9, '#66b266',   // Wetlands (grayish green)
              10, '#99ff66',  // Moss (light moss green)
              '#66cc99'        // Default (soft green)
            ]
          ],
          'fill-extrusion-height': ['*', ['get', 'elevation'], 20],
          'fill-extrusion-opacity': 1
        },
      }
  ],
  "bearing": 0,
  "sources": {
    "maplibre": {
    "url": "https://demotiles.maplibre.org/tiles/tiles.json",
    "type": "vector"
    },
    "protomaps": {
    "url": "pmtiles://https://storage.googleapis.com/hex-tiles/output.pmtiles",
    "type": "vector",
    },
  },
  "version": 8,
  "metadata": {
    "maptiler:copyright": "This style was generated on MapTiler Cloud. Usage is governed by the license terms in https://github.com/maplibre/demotiles/blob/gh-pages/LICENSE",
    "openmaptiles:version": "3.x"
  }
}