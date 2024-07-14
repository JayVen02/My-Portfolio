function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 8.476032675076144, lng: 124.61277146288053};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Cagayan De oro City, Philippines'
    });
}