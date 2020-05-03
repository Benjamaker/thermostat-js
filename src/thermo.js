function Thermostat() {
    this.temperature = 20
    this.minimumTemp = 10
}

Thermostat.prototype.turnUp = function() {
    this.temperature += 1
    return this.temperature
}

Thermostat.prototype.turnDown = function() {
    this.temperature -= 1
    return this.temperature
}
