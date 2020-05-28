window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();
  updateTemp();
  getWeather();

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function getWeather() {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${SECURE_KEY}`, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
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