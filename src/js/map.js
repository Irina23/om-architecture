/*map*/
$(window).on('load', function() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:50.461539, lng: 30.5073035},
        scrollwheel: false,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: {lat:50.461539, lng: 30.5073035},
        map: map
        //title: 'Hello World!'
    });
});