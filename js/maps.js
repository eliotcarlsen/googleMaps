function Maps(){
}
Maps.prototype.getLocationByZip = function(zip, displayZip){
  $.get('http://maps.googleapis.com/maps/api/geocode/json?address='+zip).then(function(response){
    console.log();
    displayZip(zip, response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
  }).fail(function(error){
    $('#output').text(error.reponseJSON.message);
  });
};

Maps.prototype.getLocation = function(lati, long){
  // var pos;

  // if (navigator.geolocation) {
  // navigator.geolocation.getCurrentPosition(function(position) {
  //     pos = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   };

    var map = new google.maps.Map(document.getElementById('output'), {
            center: {lat: lati, lng: long},
            zoom: 8
          });

    var marker = new google.maps.Marker({
      position: {lat: lati, lng: long},
      map: map
    });
  // });
  // } else {
  //   // Browser doesn't support Geolocation
  //   handleLocationError(false, infoWindow, map.getCenter());
  // }
};
exports.mapsModule = Maps;
