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
});