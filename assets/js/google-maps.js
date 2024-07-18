function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 8.476188987857459, lng: 124.61290436811645};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Cagayan De oro City' // Title Location
    });
}