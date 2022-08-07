import sunset from '../../assets/icons/sunset.svg';
import clear from '../../assets/icons/clear.svg';

export default function Details({ weather }) {
  return (
    <section className='mt-8 bg-white/5 px-3 py-4 rounded-md'>
      <div className='flex justify-between items-center px-4 mb-9'>
        <div className='flex flex-col items-center gap-1'>
          <img className='w-6 h-6' src={clear} alt='sunrise' />
          <p className='text-xs'>Sunrise 06.17</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img className='w-6 h-6' src={sunset} alt='sunset' />
          <p className='text-xs'>Sunset 18.16</p>
        </div>
      </div>
      <ul className='flex justify-between items-center flex-wrap px-3'>
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
