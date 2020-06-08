function Thermostat() {
  this.temperature = 20
  this.minimumTemp = 10
  this.maximumTemp = 25
  this.powerSaving = true
};

// Thermostat.prototype.getCurrentTemp = function(callback) {
//   $.get('/temperature', function(res) {
//     var data = JSON.parse(res)
//     callback(data);
//   })  
// };

Thermostat.prototype.turnUp = function() {
  if (this.temperature === this.maximumTemp) {
    throw new Error(`Maximum temperature is ${this.maximumTemp}!`);
    } 
  this.temperature += 1
  return this.temperature  
};

Thermostat.prototype.turnDown = function() {
  if (this.temperature === this.minimumTemp) {
    throw new Error(`Minimum temperature is ${this.minimumTemp}!`);
    } 
  this.temperature -= 1
  return this.temperature
};

Thermostat.prototype.powerSavingOff = function() {
  this.maximumTemp = 32
  this.powerSaving = false
};

Thermostat.prototype.powerSavingOn = function() {
  this.maximumTemp = 25
  this.powerSaving = true
  if (this.temperature > 25) {
    this.temperature = this.maximumTemp
  } 
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
  this.powerSaving = true
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  } else if (this.temperature > 25) {
    return "high-usage"
  } else {
    return "medium-usage"
  }
};
