class CitiesController < ApplicationController
  require 'open_weather'
  # protect_from_forgery with: :null_session
  # respond_to :json
   def index
        # very simple code to grab all posts so they can be
        # displayed in the Index view (index.html.erb)
      end

      def show
        # very simple code to grab the proper Post so it can be
        # displayed in the Show view (show.html.erb)
      end

      def create
        # code to create a new post based on the parameters that
        # were submitted with the form (and are now available in the
        # params hash)
        render :nothing => true
        options = { units: "metric", APPID: 'f333c36f17612d7b693745b00991425a' }
        response = OpenWeather::Forecast.city(params['_json'], options)
        city = response['city']
        list = response['list']
        puts list[0]['weather'][0]['description']
        newCity = City.new(
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
          :desc5 => list[4]['weather'][0]['description'],
          )
        newCity.save
      end

      private
      def city_params
        params.require(:city).permit(:city)
      end

end
