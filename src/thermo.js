function Thermostat() {
  this.temperature = 20
  this.minimumTemp = 10
  this.maximumTemp = 25
  this.powerSaving = true
};

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
};
