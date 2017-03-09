var map;
var markers = [];
var placeMarkers=[];
var defaultIcon;
var highlightedIcon;


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:29.761042, lng:-95.362068},
		zoom: 16,
		mapTypeControl: false
	});

	var largeInfoWindow = new google.maps.InfoWindow();

	// Create locations which will be shown to the user... a way to just use
	// the ko.observableArry?

	defaultIcon = makeMarkerIcon('0091ff');
	// Create a "highlighted location" marker color for when the user
	// mouses over the marker.
	highlightedIcon = makeMarkerIcon('FFFF24');
	// The following group uses the location array to create an array of markers on initialize.

	model.results.forEach(function(result, index){
		var marker = new google.maps.Marker({
			position: result.geometry.location,
			title: result.name,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			id: index,
			test: result.geometry.location
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

function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
	if (infowindow.marker != marker) {
		// Clear the infowindow content to give the streetview time to load.
		infowindow.setContent('');
		infowindow.marker = marker;
		// Make sure the marker property is cleared if the infowindow is closed.
		infowindow.addListener('closeclick', function() {
			infowindow.marker = null;
	});
	// Open the infowindow on the correct marker.
	// okay lets go ahead and figure out this yelp API and populate this infoWindow.
	var ll = marker.test.lat+','+marker.test.lng;

	yelpData(marker.title,ll,function(yelp){

		if(yelp){
			infowindow.setContent(
				'<div style="text-align: center;"><h5>'+ marker.title + '</h5><img src=' + yelp.businesses[0].image_url + '>' + '</div>'
			);
		} else {
			infowindow.setContent(
				'<div style="text-align: center;"><h5>'+ marker.title + '</h5><p>error fetching yelp picture</p>' + '</div>'
			);
		}
		//ViewModel.clicked(ViewModel.recommendList()[marker.id]);
		infowindow.open(map, marker);
	});
	}
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
