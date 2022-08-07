import { useEffect, useState } from 'react';

// components
import Search from './components/search/Search';
import Location from './components/location/Location';
import Daily from './components/layout/Daily';

// api
import getFormattedWeatherData from './service/weather';
import Hourly from './components/layout/Hourly';
import Details from './components/layout/Details';

function App() {
  const [query, setQuery] = useState({ q: 'jakarta' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
      console.log(data);
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className='z-10 max-w-xl mx-auto'>
      <div className='flex items-center w-full gap-3 '>
        <Search setQuery={setQuery} />

        <Location setQuery={setQuery} />
      </div>
      <main className='mt-8'>
        {weather ? (
          <>
            <Daily weather={weather} />
            <Hourly weather={weather} />
            <Details weather={weather} />
          </>
        ) : (
          <div className='text-center flex justify-center items-center text-3xl font-bold'>
            City is not defined!
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
