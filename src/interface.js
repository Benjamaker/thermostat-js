window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);



  $('#temp-up').click(function() {
    thermostat.turnUp();
    $('#temperature').text(thermostat.temperature);
  })
});