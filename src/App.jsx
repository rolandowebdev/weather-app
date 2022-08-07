import { useEffect, useState } from 'react';

// components
import Search from './components/search/Search';
import Location from './components/location/Location';
import Daily from './components/layout/Daily';

// api
import getFormattedWeatherData from './service/weather';
import Hourly from './components/layout/Hourly';

function App() {
  const [query, setQuery] = useState({ q: 'mekkah' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className='z-10 max-w-xl mx-auto'>
      <div className='flex items-center w-full gap-3 '>
        <Search />
        <Location />
      </div>
      {weather ? (
        <main className='mt-8'>
          <Daily weather={weather} />
          <Hourly weather={weather} />
        </main>
      ) : (
        <div className='text-center flex justify-center items-center mt-64 text-3xl font-bold'>
          Country is not defined!
        </div>
      )}
    </div>
  );
}

export default App;
