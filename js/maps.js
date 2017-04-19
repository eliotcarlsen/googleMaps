function Maps(){
}

Maps.prototype.getLocation = function(){
  var pos;

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var map = new google.maps.Map(document.getElementById('output'), {
            center: pos,
            zoom: 4
          });

    var marker = new google.maps.Marker({
      position: pos,
      map: map
    });
    var marker = new google.maps.Marker({
      position: {lat: -34.397, lng: 150.644},
      map: map
    });
  });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }



};

exports.mapsModule = Maps;
