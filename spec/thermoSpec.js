'use strict';

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat;  
})

describe("temperature", function() {
  it("starts at 20 degrees by default", function() {
    expect(thermostat.temperature).toEqual(20);
  })  

  it("can be turned up", function() {
    thermostat.turnUp()
    expect(thermostat.temperature).toEqual(21);
  })

  it("can be turned down", function() {
    thermostat.turnDown()
    expect(thermostat.temperature).toEqual(19)
  })

  it("has a default min temp of 10", function() {
    expect(thermostat.minimumTemp).toEqual(10)  
  })

  it("raises an error if minimum temperature is reached", function() { 
    thermostat.temperature = 10
    expect(function() { thermostat.turnDown() }).toThrowError("Minimum temperature is 10!")
  })

  it("has a default maximum temperature of 32", function() {
    expect(thermostat.maximumTemp).toEqual(32) 
  })

  it("raises an error if maximum temperature is exceeded", function() {
    thermostat.temperature = 32
    expect(function() { thermostat.turnUp() }).toThrowError("Maximum temperature is 32!")
  })

});