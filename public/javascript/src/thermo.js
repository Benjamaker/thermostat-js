function Thermostat() {
  this.temperature = 20
  this.minimumTemp = 10
  this.maximumTemp = 25
  this.powerSaving = true
};

Thermostat.prototype.getCurrentTemp = function(callback) {
  $.get('/temperature', function(res) {
    var data = JSON.parse(res)
    callback(data);
  })  
};

Thermostat.prototype.getPowerSaving = function(callback) {
  $.get('/power-save-status', function(res) {
    var data = JSON.parse(res)
    callback(data);
  })
}

Thermostat.prototype.turnUp = function(temperature, callback) {
  if (temperature === this.maximumTemp) {
    throw new Error(`Maximum temperature is ${this.maximumTemp}!`);
    } 
    let value = temperature += 1;
    this.updateTemperature(value, callback) 
};

Thermostat.prototype.turnDown = function(temperature, callback) {
  if (temperature === this.minimumTemp) {
    throw new Error(`Minimum temperature is ${this.minimumTemp}!`);
    } 
    let value = temperature -= 1;
    this.updateTemperature(value, callback) 
};

Thermostat.prototype.powerSavingOff = function(callback) {
  this.maximumTemp = 32
  this.updatePSM(false, callback)
};

Thermostat.prototype.powerSavingOn = function(temperature, callback) {
  this.maximumTemp = 25
  this.updatePSM(true, callback)
  console.log(temperature)
  if (temperature > 25) {
    temperature = this.maximumTemp
  } 
  console.log(temperature)
  this.updateTemperature(temperature)
};

Thermostat.prototype.reset = function(temperature) {
  temperature = 20
  this.powerSaving = true
  this.updateTemperature(temperature)
};

Thermostat.prototype.energyUsage = function(temperature) {
  if (temperature < 18) {
    return "low-usage"
  } else if (temperature > 25) {
    return "high-usage"
  } else {
    return "medium-usage"
  }
};

Thermostat.prototype.updateTemperature = function(value, callback) {
  $.post('/temperature', { temperature: value }, callback)
}

Thermostat.prototype.updatePSM = function(value, callback) {
  $.post('/power-save-status', { psm: value }, callback)
}
