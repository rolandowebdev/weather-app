import WeatherStatus from '../weatherStatus/WeatherStatus';
import { formatToLocalTime } from '../../service/weather';

import clear from '../../assets/icons/clear.svg';
import thunderstorm from '../../assets/icons/thunderstorm.svg';
import location from '../../assets/icons/location.svg';

export default function Daily({ weather }) {
  return (
    <section className='flex items-end justify-between mx-auto text-center sm:flex-row'>
      <div>
        <h1 className='font-semibold text-[164px] leading-none'>
          {`${weather.temp.toFixed()}`}°
        </h1>
        <div className='flex flex-col items-start gap-3'>
          <div className='flex items-center justify-center gap-2'>
            <img className='w-6 h-6 stroke-2' src={location} alt='location' />
            <p className='text-lg'>{weather.name}</p>
          </div>
          <WeatherStatus
            icon={clear}
            day={formatToLocalTime(weather.dt)}
            status={weather.details}
          />
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 px-4 pt-2 pb-4 rounded-md bg-white/5'>
        <h2 className='text-2xl font-bold'>3 day forecast</h2>
        {weather.daily.map((day, index) => (
          <WeatherStatus
            key={index}
            icon={thunderstorm}
            day={day.title}
            status={day.weather}
          />
        ))}
      </div>
    </section>
  );
}
