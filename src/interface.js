window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();
  updateTemp();

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
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

  $('#psm-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-save-status').text("on");
    updateTemp();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-save-status').text("off");
    updateTemp();
  })
});