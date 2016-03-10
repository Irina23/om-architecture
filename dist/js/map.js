/*map*/

$(window).on('load', function() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat:55.795724, lng: 37.8037909},
        scrollwheel: false,
        zoom: 16
    });
    var image = 'img/icons/point_map.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 55.795724, lng: 37.8037909},
        map: map,
        icon: image
    });
});