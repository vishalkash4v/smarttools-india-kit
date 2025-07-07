
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import WeatherForecast from '@/components/tools/WeatherForecast';

const WeatherForecastPage = () => {
  return (
    <PageWrapper
      title="Weather Forecast - Live Weather Updates"
      description="Get accurate weather forecasts and current weather conditions for any city worldwide. Live weather updates with temperature, humidity, wind speed, and 5-day forecast."
      keywords="weather forecast, current weather, weather updates, temperature, humidity, wind speed, weather conditions, 5 day forecast, weather API, live weather"
      pageTitle="Weather Forecast"
      toolCategory="Weather Tool"
      canonicalUrl="https://fyntools.com//weather-forecast"
      heroImage="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=630&fit=crop"
    >
      <WeatherForecast />
    </PageWrapper>
  );
};

export default WeatherForecastPage;
