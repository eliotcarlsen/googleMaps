var Maps = require('./../js/maps.js').mapsModule;

var displayZip = function(zip, latData, lngData) {
  $('#output').text("the lat is " + latData + ". The longitude is " + lngData + " of zip.");
  var newMap = new Maps();
  $('#output').append(newMap.getLocation(latData, lngData));
};

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var newMap = new Maps();
    var zip = $('#zip').val();
    $('#output').append(newMap.getLocationByZip(zip, displayZip));

  });
});
