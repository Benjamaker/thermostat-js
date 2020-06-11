window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();
  updateTemp();
  updatePowerSaving();
  getWeather('London');

  function updateTemp() {
    thermostat.getCurrentTemp(function(data) {
      $('#temperature').text(data.temperature);
      $('#temperature').attr('class', thermostat.energyUsage(data.temperature));
      console.log(data)
    })
  }

  function updatePowerSaving() {
    thermostat.getPowerSaving(function(data) {
      let psmstatus = data.psm
      if (psmstatus === true) {
        console.log("hello")
        $('#power-save-status').text("on");
      } else {
        console.log("goodbye")
        $('#power-save-status').text("off");
      }  
      console.log(data)
    })
  }

  function getWeather(city) {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=";
    let units = "&units=metric"
    $.get(url + SECURE_KEY + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    getWeather(city);
  })

  $('#temp-up').click(function() {
    let currentTemp = parseInt($('#temperature').text())
    thermostat.turnUp(currentTemp, updateTemp);
  })

  $('#temp-down').click(function() {
    let currentTemp = parseInt($('#temperature').text())
    thermostat.turnDown(currentTemp, updateTemp);
  })

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemp();
  })

  $('#psm-on').click(function() {
    thermostat.powerSavingOn();
    updatePowerSaving();
    updateTemp();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingOff();
    updatePowerSaving();
    updateTemp();
  })
});