
import React from 'react';
import WeatherForecast from '@/components/tools/WeatherForecast';

const WeatherForecastPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get real-time weather data and 5-day forecast for any city worldwide. 
          The interface adapts to current weather conditions for an immersive experience.
        </p>
      </div>
      <WeatherForecast />
    </div>
  );
};

export default WeatherForecastPage;
