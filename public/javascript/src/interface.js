window.onload = function() {
  alert("Welcome to thermostat!");
};

$(document).ready(function() {
  
  var thermostat = new Thermostat();
  updateTemp();
  getWeather('London');

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
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