var map;
var markers = [];
var placeMarkers=[];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:29.761042, lng:-95.362068},
		zoom: 16,
		mapTypeControl: false
	});

	var largeInfoWindow = new google.maps.InfoWindow();

	// Create locations which will be shown to the user... a way to just use
	// the ko.observableArry?

	var defaultIcon = makeMarkerIcon('0091ff');
	// Create a "highlighted location" marker color for when the user
	// mouses over the marker.
	var highlightedIcon = makeMarkerIcon('FFFF24');
	// The following group uses the location array to create an array of markers on initialize.

	model.results.forEach(function(result, index){

		var marker = new google.maps.Marker({
			position: result.geometry.location,
			title: result.name,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			id: index
		});
		markers.push(marker);

		marker.addListener('click', function(){
			populateInfoWindow(this, largeInfoWindow);
		});
		marker.addListener('mouseover', function() {
			this.setIcon(highlightedIcon);
		});
		marker.addListener('mouseout', function() {
			this.setIcon(defaultIcon);
		});
	});
	
	showMarkers();
}

function makeMarkerIcon(markerColor,icon) {
  var markerImage = new google.maps.MarkerImage(
	 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
	 '|40|_|%E2%80%A2',
	 new google.maps.Size(21, 34),
	 new google.maps.Point(0, 0),
	 new google.maps.Point(10, 34),
	 new google.maps.Size(21,34));
  return markerImage;
}

function showMarkers(){
	var bounds = new google.maps.LatLngBounds();

	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}
