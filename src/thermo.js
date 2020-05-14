function Thermostat() {
  this.temperature = 20
  this.minimumTemp = 10
}

Thermostat.prototype.turnUp = function() {
  this.temperature += 1
  return this.temperature  
}

Thermostat.prototype.turnDown = function() {
  if (this.temperature === this.minimumTemp) {
    console.log(`Minimum temperature is ${this.minimumTemp}!`)
    throw new Error(`Minimum temperature is ${this.minimumTemp}!`);
    } 
  this.temperature -= 1
  return this.temperature
};