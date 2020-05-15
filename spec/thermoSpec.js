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

  it("has a default maximum temperature of 25", function() {
    expect(thermostat.maximumTemp).toEqual(25) 
  })

  it("raises an error if maximum temperature is exceeded", function() {
    thermostat.temperature = 25
    expect(function() { thermostat.turnUp() }).toThrowError("Maximum temperature is 25!")
  })
});

describe("power saving mode", function() {
  it("has power save mode on by default", function() {
    expect(thermostat.powerSaving).toBeTruthy();
  })

  it("can be turned off", function() {
    thermostat.powerSavingOff()
    expect(thermostat.powerSaving).toBeFalsy();
  })

  it("can be turned on", function() {
    thermostat.powerSavingOff()
    thermostat.powerSavingOn()
    expect(thermostat.powerSaving).toBeTruthy();
  })

  it("sets maximum temperature to 32 when power save turned off", function() {
    thermostat.powerSavingOff()
    expect(thermostat.maximumTemp).toEqual(32)
  })

  it("sets minimum temperature to 25 when power save turned on", function() {
    thermostat.powerSavingOff()
    thermostat.powerSavingOn()
    expect(thermostat.maximumTemp).toEqual(25)
  })
});

describe("reset", function() { 
  it("resets temperature to default", function() {
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })
});

describe("energy usage", function() {
  it("has medium usage by default", function() {
    expect(thermostat.energyUsage()).toEqual("medium-usage")
  })

  it("has low usage when < 18 degrees", function() {
    for (var i = 0; i < 4; i++) {
      thermostat.turnDown()
    } 
    expect(thermostat.energyUsage()).toEqual("low-usage")
  })

  it("has high usage when > 25 degrees", function() {
    thermostat.powerSavingOff()
    for (var i = 0; i < 7; i++) {
      thermostat.turnUp()
    }
    expect(thermostat.energyUsage()).toEqual("high-usage")
  })
});