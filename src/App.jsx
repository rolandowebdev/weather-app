import Search from './components/search/Search';
import Location from './components/location/Location';
import WeatherStatus from './components/weatherStatus/WeatherStatus';

import clear from './assets/icons/clear.svg';
import rain from './assets/icons/rain.svg';
import thunderstorm from './assets/icons/thunderstorm.svg';
import location from './assets/icons/location.svg';

function App() {
  return (
    <div className='z-10 max-w-xl mx-auto'>
      <div className='flex items-center w-full gap-3 '>
        <Search />
        <Location />
      </div>
      <main className='mt-16'>
        <section className='flex items-end justify-between mx-auto mb-24 text-center'>
          <div>
            <h1 className='font-semibold text-[164px] leading-none'>27°</h1>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center justify-center gap-2'>
                <img
                  className='w-6 h-6 stroke-2'
                  src={location}
                  alt='location'
                />
                <p className='text-lg'>Bengkulu</p>
              </div>
              <WeatherStatus icon={clear} day='Today' status='Clear' />
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 px-4 pt-1 pb-4 rounded-md bg-white/5'>
            <h2 className='text-2xl font-bold divider'>3 day forecast</h2>
            <WeatherStatus
              icon={thunderstorm}
              day='Tuesday'
              status='Thunderstorm'
            />
            <WeatherStatus icon={rain} day='Wednesday' status='Rain' />
            <WeatherStatus icon={clear} day='Thursday' status='Clear' />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
