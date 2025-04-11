var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "theme": "blue",
  "projection": "eckert3",
  "dataProvider": {
    "map": "worldLow",
    "areas": [{
      "id": "US",
      "description": "United States is now selected.</br></br>Close this description box to unselect the area.",
      "images": [{
        "latitude": 40.712784,
        "longitude": -74.005941,
        "type": "circle",
        "label": "New York"
      }]
    }]
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "listeners": [{
    "event": "descriptionClosed",
    "method": function(ev) {
      ev.chart.selectObject();
    }
  }]
});