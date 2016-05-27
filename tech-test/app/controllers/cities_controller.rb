class CitiesController < ApplicationController
  require 'open_weather'

  def index
    puts "inside index"
    City.find_each do |city|
      options = { units: "metric", APPID: 'f333c36f17612d7b693745b00991425a' }
      response = OpenWeather::Forecast.city(city.name, options)
      city = response['city']
      list = response['list']
      city.update(
        :name => city['name'], 
        :lat => city['coord']['lat'], 
        :long => city['coord']['lon'],
        :currTemp => list[0]['main']['temp'], 
        :currDay => list[0]['dt'], 
        :currDesc => list[0]['weather'][0]['description'],
        :day2 =>  list[1]['dt'],
        :temp2 => list[1]['main']['temp'], 
        :desc2 => list[1]['weather'][0]['description'],
        :day3 =>  list[2]['dt'],
        :temp3 => list[2]['main']['temp'], 
        :desc3 => list[2]['weather'][0]['description'],
        :day4 =>  list[3]['dt'],
        :temp4 => list[3]['main']['temp'], 
        :desc4 => list[3]['weather'][0]['description'],
        :day5 =>  list[4]['dt'],
        :temp5 => list[4]['main']['temp'], 
        :desc5 => list[4]['weather'][0]['description']
        )
    end
    @city = City.all
    render json: @city 
  end

  def create
    options = { units: "metric", APPID: 'f333c36f17612d7b693745b00991425a' }
    response = OpenWeather::Forecast.city(params['_json'], options)
    city = response['city']
    list = response['list']
    cityRecord = City.new(
      :name => city['name'], 
      :lat => city['coord']['lat'], 
      :long => city['coord']['lon'],
      :currTemp => list[0]['main']['temp'], 
      :currDay => list[0]['dt'], 
      :currDesc => list[0]['weather'][0]['description'],
      :day2 =>  list[1]['dt'],
      :temp2 => list[1]['main']['temp'], 
      :desc2 => list[1]['weather'][0]['description'],
      :day3 =>  list[2]['dt'],
      :temp3 => list[2]['main']['temp'], 
      :desc3 => list[2]['weather'][0]['description'],
      :day4 =>  list[3]['dt'],
      :temp4 => list[3]['main']['temp'], 
      :desc4 => list[3]['weather'][0]['description'],
      :day5 =>  list[4]['dt'],
      :temp5 => list[4]['main']['temp'], 
      :desc5 => list[4]['weather'][0]['description']
    )
    if City.where(:name => city['name']).blank?  
      cityRecord.save
    else
      puts "city has already been added" 
    end 
      @city = cityRecord
      render json: @city 
  end

  # private
  # def city_params
  #   params.require(:city).permit(:city)
  # end

end
