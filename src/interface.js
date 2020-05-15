window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
  }

  $('#temp-up').click(function() {
    thermostat.turnUp();
    updateTemp();
  })

  $('#temp-down').click(function() {
    thermostat.turnDown();
    updateTemp();
  })
});