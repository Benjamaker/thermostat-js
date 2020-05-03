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
});