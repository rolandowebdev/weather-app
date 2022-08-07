import { useEffect, useState } from 'react';

// components
import Search from './components/search/Search';
import Location from './components/location/Location';
import Daily from './components/layout/Daily';
import Hourly from './components/layout/Hourly';
import Details from './components/layout/Details';
import Celcius from './components/units/Celcius';
import Fahrenheit from './components/units/Fahrenheit';

// api
import getFormattedWeatherData from './service/weather';

function App() {
  const [query, setQuery] = useState({ q: 'jakarta' });
  const [units, setUnits] = useState('metric');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  // TODO: Fetch weather data api
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
      console.log(data);
      setLoading(false);
    };

    fetchWeather();
  }, [query, units]);

  /**
   * TODO: Function change background images based on weather temp
   */
  const backgroundForecast = () => {
    if (!weather) return "bg-[url('../assets/images/cloudy.jpg')]";
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) {
      return "bg-[url('../assets/images/rain.jpg')]";
    }
    return "bg-[url('../assets/images/cloudy.jpg')]";
  };

  // TODO: Loading condition
  if (loading) {
    return (
      <div
        className={`text-center min-h-screen ${backgroundForecast()} bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center text-3xl font-bold`}>
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`px-4 ${backgroundForecast()} py-8 bg-cover bg-no-repeat bg-center bg-fixed`}>
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='z-10 max-w-xl mx-auto'>
        <div className='flex items-center w-full gap-3 '>
          <Search setQuery={setQuery} />
          <Celcius units={units} setUnits={setUnits} />
          <Fahrenheit units={units} setUnits={setUnits} />
          <Location setQuery={setQuery} />
        </div>
        <main className='mt-8'>
          {weather ? (
            <>
              <Daily weather={weather} />
              <Details weather={weather} />
              <Hourly weather={weather} />
            </>
          ) : (
            <div className='text-center min-h-screen flex justify-center items-center text-3xl font-bold'>
              City is not defined!
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
