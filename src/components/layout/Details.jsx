import sunset from '../../assets/icons/sunset.svg';
import sunrise from '../../assets/icons/sunrise.svg';

import { formatTime } from '../../service/weather';

export default function Details({ weather }) {
  return (
    <section className='px-3 py-4 mt-10 rounded-md bg-black/75 backdrop-blur-sm'>
      <div className='flex items-center justify-between px-4 mb-9'>
        <div className='flex flex-col items-center gap-1'>
          <img className='w-6 h-6' src={sunrise} alt='sunrise' />
          <p className='mt-1 text-xs'>Sunrise {formatTime(weather.sunrise)}</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img className='w-6 h-6' src={sunset} alt='sunset' />
          <p className='mt-1 text-xs'>Sunset {formatTime(weather.sunset)}</p>
        </div>
      </div>
      <ul className='flex flex-col flex-wrap items-center justify-between gap-4 px-3 sm:gap-0 sm:flex-row'>
        <li className='text-center'>
          <p className='text-xs text-slate-400'>Real feel</p>
          <p className='mt-1'>{weather.temp.toFixed()}°</p>
        </li>
        <li className='text-center'>
          <p className='text-xs text-slate-400'>Humidity</p>
          <p className='mt-1'>{weather.humidity}%</p>
        </li>
        <li className='text-center'>
          <p className='text-xs text-slate-400'>Temp max</p>
          <p className='mt-1'>{weather.temp_max.toFixed()}°</p>
        </li>
        <li className='text-center'>
          <p className='text-xs text-slate-400'>Pressure</p>
          <p className='mt-1'>{weather.pressure}mbar</p>
        </li>
        <li className='text-center'>
          <p className='text-xs text-slate-400'>Wind speed</p>
          <p className='mt-1'>{weather.speed}km/h</p>
        </li>
      </ul>
    </section>
  );
}
