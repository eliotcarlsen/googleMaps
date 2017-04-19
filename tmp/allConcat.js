var Maps = require('./../js/maps.js').mapsModule;

$(document).ready(function(){
  $('button#map').click(function(event){
    event.preventDefault();
    var newMap = new Maps();
    $('#output').append(newMap.getLocation());
  });
});
