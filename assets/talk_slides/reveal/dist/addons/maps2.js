// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "translateY",
    projection: am5map.geoMercator(),
  })
);

// var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
// zoomControl.homeButton.set("visible", false);


// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  })
);

polygonSeries.mapPolygons.template.setAll({
  fill:am5.color(0xdadada)
});


// Create point series for markers
// https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
// var pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {}));


// Create regular bullets
pointSeries.bullets.push(function(root,series,dataItem) {
  //console.log(dataItem.dataContext.color)
  var circle = am5.Circle.new(root, {
    radius: 3,
    tooltipY: 0,
    fill: am5.color(dataItem.dataContext.color) || am5.color(0xff8c00),
    tooltipText: "{title}"
  });
  return am5.Bullet.new(root, {
    sprite: circle
  });
});


// Set data
var cities = [
  { title: "New York City", latitude: 40.7128, longitude: -74.0060,color: am5.color(0xe76f51)}, 
  { title: "Los Angeles", latitude: 34.0522, longitude: -118.2437}, 
  { title: "Chicago", latitude: 41.8781, longitude: -87.6298 }, 
  { title: "Houston", latitude: 29.7604, longitude: -95.3698 }, 
  { title: "Phoenix", latitude: 33.4484, longitude: -112.0740 }, 
  { title: "Philadelphia", latitude: 39.9526, longitude: -75.1652 }, 
  { title: "San Antonio", latitude: 29.4241, longitude: -98.4936 }, 
  { title: "San Diego", latitude: 32.7157, longitude: -117.1611 }, 
  { title: "Dallas", latitude: 32.7767, longitude: -96.7970 }, 
  { title: "San Jose", latitude: 37.3382, longitude: -121.8863 }, 
  { title: "Sydney", latitude: -33.8688, longitude: 151.2093 }, 
  { title: "Melbourne", latitude: -37.8136, longitude: 144.9631 }, 
  { title: "Brisbane", latitude: -27.4698, longitude: 153.0251 }, 
  { title: "Perth", latitude: -31.9505, longitude: 115.8605 }, 
  { title: "Adelaide", latitude: -34.9285, longitude: 138.6007 },
  { title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
  { title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
  { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
  { title: "Sarajevo", latitude: 43.8608, longitude: 18.4214 },
  { title: "Sofia", latitude: 42.7105, longitude: 23.3238 },
  { title: "Chennai", latitude: 13.0827, longitude: 80.2707 },
{ title: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
{ title: "Bangalore", latitude: 12.9716, longitude: 77.5946 },
{ title: "Hyderabad", latitude: 17.3850, longitude: 78.4867 },
{ title: "Shanghai", latitude: 31.2304, longitude: 121.4737 },
{ title: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
{ title: "Delhi", latitude: 28.6139, longitude: 77.2090 },
  { title: "Zagreb", latitude: 45.815, longitude: 15.9785 },
  { title: "Pristina", latitude: 42.666667, longitude: 21.166667 },
  { title: "Prague", latitude: 50.0878, longitude: 14.4205 },
  { title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
  { title: "Tallinn", latitude: 59.4389, longitude: 24.7545 },
  { title: "Helsinki", latitude: 60.1699, longitude: 24.9384 },
  { title: "Paris", latitude: 48.8567, longitude: 2.351 },
  { title: "Berlin", latitude: 52.5235, longitude: 13.4115 },
  { title: "Athens", latitude: 37.9792, longitude: 23.7166 },
  { title: "Budapest", latitude: 47.4984, longitude: 19.0408 },
  { title: "Dublin", latitude: 53.3441, longitude: -6.2675 },
  { title: "Rome", latitude: 41.8955, longitude: 12.4823 },
  { title: "Riga", latitude: 56.9465, longitude: 24.1049 },
  { title: "Vaduz", latitude: 47.1411, longitude: 9.5215 },
  { title: "Vilnius", latitude: 54.6896, longitude: 25.2799 },
  { title: "Luxembourg", latitude: 49.61, longitude: 6.1296 },
  { title: "Skopje", latitude: 42.0024, longitude: 21.4361 },
  { title: "Valletta", latitude: 35.9042, longitude: 14.5189 },
  { title: "Chisinau", latitude: 47.0167, longitude: 28.8497 },
  { title: "Monaco", latitude: 43.7325, longitude: 7.4189 },
  { title: "Podgorica", latitude: 42.4602, longitude: 19.2595 },
  { title: "Amsterdam", latitude: 52.3738, longitude: 4.891 },
  { title: "Oslo", latitude: 59.9138, longitude: 10.7387 },
  { title: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
  { title: "Lisbon", latitude: 38.7072, longitude: -9.1355 },
  { title: "Bucharest", latitude: 44.4479, longitude: 26.0979 },
  { title: "Moscow", latitude: 55.7558, longitude: 37.6176 },
  { title: "San Marino", latitude: 43.9424, longitude: 12.4578 },
  { title: "Belgrade", latitude: 44.8048, longitude: 20.4781 },
  { title: "Bratislava", latitude: 48.2116, longitude: 17.1547 },
  { title: "Ljubljana", latitude: 46.0514, longitude: 14.506 },
  { title: "Madrid", latitude: 40.4167, longitude: -3.7033 },
  { title: "Stockholm", latitude: 59.3328, longitude: 18.0645 },
  { title: "Bern", latitude: 46.948, longitude: 7.4481 },
  { title: "Kiev", latitude: 50.4422, longitude: 30.5367 },
  { title: "London", latitude: 51.5002, longitude: -0.1262 },
  { title: "Gibraltar", latitude: 36.1377, longitude: -5.3453 },
  { title: "Saint Peter Port", latitude: 49.466, longitude: -2.5522 },
  { title: "Douglas", latitude: 54.167, longitude: -4.4821 },
  { title: "Saint Helier", latitude: 49.1919, longitude: -2.1071 },
  { title: "Kabul", latitude: 34.5155, longitude: 69.1952 },
  { title: "Yerevan", latitude: 40.1596, longitude: 44.509 },
  { title: "Baku", latitude: 40.3834, longitude: 49.8932 },
  { title: "Manama", latitude: 26.1921, longitude: 50.5354 },
  { title: "Dhaka", latitude: 23.7106, longitude: 90.3978 },
  { title: "Thimphu", latitude: 27.4405, longitude: 89.673 },
  { title: "Bandar Seri Begawan", latitude: 4.9431, longitude: 114.9425 },
  { title: "Phnom Penh", latitude: 11.5434, longitude: 104.8984 },
  { title: "Peking", latitude: 39.9056, longitude: 116.3958 },
  { title: "Nicosia", latitude: 35.1676, longitude: 33.3736 },
  { title: "T'bilisi", latitude: 41.701, longitude: 44.793 },
  { title: "New Delhi", latitude: 28.6353, longitude: 77.225 },
  { title: "Jakarta", latitude: -6.1862, longitude: 106.8063 },
  { title: "Teheran", latitude: 35.7061, longitude: 51.4358 },
  { title: "Baghdad", latitude: 33.3157, longitude: 44.3922 },
  { title: "Jerusalem", latitude: 31.76, longitude: 35.17 },
  { title: "Tokyo", latitude: 35.6785, longitude: 139.6823 },
  { title: "Amman", latitude: 31.9394, longitude: 35.9349 },
  { title: "Astana", latitude: 51.1796, longitude: 71.4475 },
  { title: "Kuwait", latitude: 29.3721, longitude: 47.9824 },
  { title: "Bishkek", latitude: 42.8679, longitude: 74.5984 },
  { title: "Vientiane", latitude: 17.9689, longitude: 102.6137 },
  { title: "Beyrouth / Beirut", latitude: 33.8872, longitude: 35.5134 },
  { title: "Kuala Lumpur", latitude: 3.1502, longitude: 101.7077 },
  { title: "Ulan Bator", latitude: 47.9138, longitude: 106.922 },
  { title: "Pyinmana", latitude: 19.7378, longitude: 96.2083 },
  { title: "Kathmandu", latitude: 27.7058, longitude: 85.3157 },
  { title: "Muscat", latitude: 23.6086, longitude: 58.5922 },
  { title: "Islamabad", latitude: 33.6751, longitude: 73.0946 },
  { title: "Manila", latitude: 14.579, longitude: 120.9726 },
  { title: "Doha", latitude: 25.2948, longitude: 51.5082 },
  { title: "Riyadh", latitude: 24.6748, longitude: 46.6977 },
  { title: "Singapore", latitude: 1.2894, longitude: 103.85 },
  { title: "Seoul", latitude: 37.5139, longitude: 126.9828 },
  { title: "Colombo", latitude: 6.9155, longitude: 79.8572 },
  { title: "Damascus", latitude: 33.5158, longitude: 36.2939 },
  { title: "Taipei", latitude: 25.0338, longitude: 121.5645 },
  { title: "Dushanbe", latitude: 38.5737, longitude: 68.7738 },
  { title: "Bangkok", latitude: 13.7573, longitude: 100.502 },
  { title: "Dili", latitude: -8.5662, longitude: 125.588 },
  { title: "Ankara", latitude: 39.9439, longitude: 32.856 },
  { title: "Ashgabat", latitude: 37.9509, longitude: 58.3794 },
  { title: "Abu Dhabi", latitude: 24.4764, longitude: 54.3705 },
  { title: "Tashkent", latitude: 41.3193, longitude: 69.2481 },
  { title: "Hanoi", latitude: 21.0341, longitude: 105.8372 },
  { title: "Sanaa", latitude: 15.3556, longitude: 44.2081 },
  { title: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
  { title: "Bridgetown", latitude: 13.0935, longitude: -59.6105 },
  { title: "Belmopan", latitude: 17.2534, longitude: -88.7713 },
  { title: "San Jose", latitude: 37.3382, longitude: -121.8863 },
{ title: "Sydney", latitude: -33.8688, longitude: 151.2093 },
{ title: "Melbourne", latitude: -37.8136, longitude: 144.9631 },
{ title: "Brisbane", latitude: -27.4698, longitude: 153.0251 },
{ title: "Perth", latitude: -31.9505, longitude: 115.8605 },
{ title: "Adelaide", latitude: -34.9285, longitude: 138.6007 },
{ title: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
{ title: "Seattle", latitude: 47.6062, longitude: -122.3321 },
{ title: "Boston", latitude: 42.3601, longitude: -71.0589 },
{ title: "Miami", latitude: 25.7617, longitude: -80.1918 },
{ title: "Atlanta", latitude: 33.7490, longitude: -84.3880 },
{ title: "Toronto", latitude: 43.651070, longitude: -79.347015 },
{ title: "Vancouver", latitude: 49.282729, longitude: -123.120738 },
{ title: "Montreal", latitude: 45.501689, longitude: -73.567256 },
{ title: "Calgary", latitude: 51.044733, longitude: -114.071883 },
{ title: "Ottawa", latitude: 45.421530, longitude: -75.697193 },
{ title: "Edmonton", latitude: 53.546125, longitude: -113.493823 },
{ title: "Quebec City", latitude: 46.813878, longitude: -71.207981 },
{ title: "Winnipeg", latitude: 49.895136, longitude: -97.138374 },
  { title: "Sucre", latitude: -19.0421, longitude: -65.2559 },
  { title: "Brasilia", latitude: -15.7801, longitude: -47.9292 },
  { title: "Quito", latitude: -0.2295, longitude: -78.5243 },
  { title: "San Salvador", latitude: 13.7034, longitude: -89.2073 },
  { title: "Guatemala", latitude: 14.6248, longitude: -90.5328 },
  { title: "Ciudad de Mexico", latitude: 19.4271, longitude: -99.1276 },
  { title: "Managua", latitude: 12.1475, longitude: -86.2734 },
  { title: "Panama", latitude: 8.9943, longitude: -79.5188 },
  { title: "Asuncion", latitude: -25.3005, longitude: -57.6362 },
  { title: "Lima", latitude: -12.0931, longitude: -77.0465 },
  { title: "Castries", latitude: 13.9972, longitude: -60.0018 },
  { title: "Paramaribo", latitude: 5.8232, longitude: -55.1679 },
  { title: "Washington D.C.", latitude: 38.8921, longitude: -77.0241 },
  { title: "Montevideo", latitude: -34.8941, longitude: -56.0675 },
  
  { title: "Algiers", latitude: 36.7755, longitude: 3.0597 },
  { title: "Luanda", latitude: -8.8159, longitude: 13.2306 },
  { title: "Porto-Novo", latitude: 6.4779, longitude: 2.6323 },
  { title: "Gaborone", latitude: -24.657, longitude: 25.9089 },
  { title: "Ouagadougou", latitude: 12.3569, longitude: -1.5352 },
  { title: "Bujumbura", latitude: -3.3818, longitude: 29.3622 },
  { title: "Yaounde", latitude: 3.8612, longitude: 11.5217 },
  { title: "Bangui", latitude: 4.3621, longitude: 18.5873 },
  { title: "Brazzaville", latitude: -4.2767, longitude: 15.2662 },
  { title: "Kinshasa", latitude: -4.3369, longitude: 15.3271 },
  { title: "Yamoussoukro", latitude: 6.8067, longitude: -5.2728 },
  { title: "Djibouti", latitude: 11.5806, longitude: 43.1425 },
  { title: "Cairo", latitude: 30.0571, longitude: 31.2272 },
  { title: "Asmara", latitude: 15.3315, longitude: 38.9183 },
  { title: "Addis Abeba", latitude: 9.0084, longitude: 38.7575 },
  { title: "Libreville", latitude: 0.3858, longitude: 9.4496 },
  { title: "Tunis", latitude: 36.8117, longitude: 10.1761 }
];

function addCities(){
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  city.color = (Math.random()>0.5)?0xff0000: 0xe1ad01;
  //console.log(city)
  addCity(city.longitude, city.latitude, city.title, city.color);
}
function addCity(longitude, latitude, title, color) {
  pointSeries.data.push({
    geometry: { type: "Point", coordinates: [longitude, latitude] },
    title: title,
    color: color
    //properties: {"marker-color": am5.color(city_color)}
  });
}}
// Make stuff animate on load
chart.appear(1000, 100);
//chart.svgContainer.autoResize = false;


function part2(cities,chart){
  console.log(cities.length)
// Create line series
var lineSeries = chart.series.push(
  am5map.MapLineSeries.new(root, {})
);
var lineSeries2 = chart.series.push(
  am5map.MapLineSeries.new(root, {})
);

var intra=-1;
for (var i = 0; i < cities.length; i++) {
  for (var j = 0; j < i; j++) {
    //console.log(cities[i].color)
    city1 = cities[i]
    city2 = cities[j]
    l1_long = city1.longitude
    l1_lat = city1.latitude
    l2_long = city2.longitude
    l2_lat = city2.latitude
    dist = (l1_lat-l2_lat)*(l1_lat-l2_lat)+(l1_long-l2_long)*(l1_long-l2_long)
    //console.log(dist)
    if (cities[i].color === cities[j].color && dist < 5000 && Math.random()<0.05)
      {
        
      addEdge(cities[i],cities[j],intra);
      intra= 1;
      }
    else if (cities[i].color === cities[j].color && dist > 5000 && dist<10000 &&Math.random()<0.008)
      {
        
      addEdge(cities[i],cities[j],intra);
      intra= 1;
      }
    else if (cities[i].color != cities[j].color && Math.random()<0.005 && dist < 5000){
        addEdge(cities[i],cities[j],intra);
        intra = 0;
        }
        else if (cities[i].color != cities[j].color && Math.random()<0.001 && dist > 5000 && dist<10000){
          addEdge(cities[i],cities[j],intra);
          intra = 0;
          }
  }
}


function addEdge(city1,city2,intra){
  if (intra ==1){
  lineSeries.pushDataItem({"geometry": {
        "type": "LineString",
        "coordinates": [
          [ city1.longitude, city1.latitude ],
          [ city2.longitude, city2.latitude ],
        ]},
        "stroke": am5.color(city1.color)
      })
      //Object.keys(lineSeries)[Object.keys(lineSeries).length-1].template.stroke = am5.color(city1.color)
      
      //console.log(Object.keys(lineSeries)[Object.keys(lineSeries).length-1])
  //console.log(lineSeries[Object.keys(lineSeries)[Object.keys(lineSeries).length-1]])
    }
    else if (intra ==0){
      lineSeries2.pushDataItem({"geometry": {
        "type": "LineString",
        "coordinates": [
          [ city1.longitude, city1.latitude ],
          [ city2.longitude, city2.latitude ],
        ]},
        "stroke": am5.color(city1.color)
      })
    }
}

lineSeries.mapLines.template.setAll({
  stroke: am5.color(0x77ff00),
  strokeWidth: 2,
  strokeOpacity: 0.5
});
lineSeries2.mapLines.template.setAll({
  stroke: am5.color(0x0000ff),
  strokeWidth: 2,
  strokeOpacity: 0.5
});

document.removeEventListener('keydown', handleKeyPress);
}
// Make stuff animate on load
//chart.appear(1000, 100);
//chart2 = chart

//chart2.appear(1000, 100);
function handleKeyPress(event) {
  if (event.shiftKey) {
    part2(cities,chart);
  }
  if (event.ctrlKey) {
    location.reload();
  }
}

// Initial setup: Run part1 on load
document.addEventListener('DOMContentLoaded', (event) => {
  addCities();

  // Set up event listeners for mouse click and right arrow key press
  //document.addEventListener('click', part2(cities,chart));
  document.addEventListener('keydown', handleKeyPress);
  //document.addEventListener('keydown', (event) => {if (event.key === 'ArrowLeft') {
  //  location.reload();
  //}});
});