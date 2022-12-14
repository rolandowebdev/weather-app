import WeatherStatus from '../weatherStatus/WeatherStatus';
import { formatToLocalTime, iconUrl } from '../../service/weather';

import location from '../../assets/icons/location.svg';

export default function Daily({ weather }) {
  return (
    <section className='flex flex-col justify-between mx-auto text-center sm:items-end sm:flex-row'>
      <div className='z-10'>
        <h1 className='font-semibold text-[164px] leading-none'>
          {`${weather.temp.toFixed()}`}°
        </h1>
        <div className='flex flex-col items-start mb-4 sm:mb-0'>
          <div className='flex items-center justify-center gap-1'>
            <img
              className='w-8 h-8 p-1 stroke-2'
              src={location}
              alt='location'
            />
            <p className='text-md'>
              {weather.name}, {weather.country}
            </p>
          </div>
          <WeatherStatus
            icon={iconUrl(weather.icon)}
            day={formatToLocalTime(weather.dt)}
            status={weather.details}
          />
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 px-4 pt-2 pb-4 rounded-md bg-black/75 backdrop-blur-sm'>
        <h2 className='text-2xl font-bold'>3 day forecast</h2>
        {weather.daily.map((day, index) => (
          <WeatherStatus
            key={index}
            icon={iconUrl(day.icon)}
            day={day.title}
            status={day.weather}
          />
        ))}
      </div>
    </section>
  );
}
