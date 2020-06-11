class Thermostat
  attr_reader :temperature, :psm

  def initialize
    @temperature = 20
    @psm = true
  end
  
  def self.instance
    @thermostat ||= self.new
  end 
  
  def update_temperature(temperature)
    @temperature = temperature
  end

  def update_psm(psm)
    @psm = psm
  end

end    