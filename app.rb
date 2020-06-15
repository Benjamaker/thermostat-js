require 'sinatra/base'
require 'json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

  get "/" do
    File.read('public/index.html')
  end

  get "/temperature" do
    thermostat = Thermostat.instance
    { temperature: thermostat.temperature }.to_json
  end
  
  post "/temperature" do
    p params
    thermostat = Thermostat.instance
    thermostat.update_temperature(params[:temperature].to_i)
    { status: 200 }.to_json
  end 
  
  get "/power-save-status" do
    thermostat = Thermostat.instance
    { psm: thermostat.psm }.to_json
  end

  post "/power-save-status" do
    p params
    thermostat = Thermostat.instance
    thermostat.update_psm(params[:psm] == 'true')
    { status: 200 }.to_json
  end

  run! if app_file == $0
end  
