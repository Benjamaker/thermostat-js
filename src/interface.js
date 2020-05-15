window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();
  updateTemp();

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

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemp();
  })
});