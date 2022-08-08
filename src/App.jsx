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
  const [weather, setWeather] = useState(null);

  // TODO: Fetch weather data api
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
      console.log(data);
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="px-4 bg-[url('../assets/images/weather.jpg')] py-8 bg-cover bg-no-repeat bg-center bg-fixed min-h-screen">
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='z-10 max-w-xl mx-auto'>
        <div className='flex items-center w-full gap-3 '>
          <Search setQuery={setQuery} />
          <Celcius units={units} setUnits={setUnits} />
          <Fahrenheit units={units} setUnits={setUnits} />
          <Location setQuery={setQuery} />
        </div>
        {weather && (
          <main className='mt-8'>
            <Daily weather={weather} />
            <Details weather={weather} />
            <Hourly weather={weather} />
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
