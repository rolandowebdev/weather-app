import windFast from '../../assets/icons/wind-fast.svg';
import windSLow from '../../assets/icons/wind-slow.svg';

export default function HourlyStatus({ icon, hour, wind, temp }) {
  const windIcon = wind > '1.00km/h' ? windFast : windSLow;
  return (
    <div className='p-3 text-center'>
      <p className='text-sm font-light text-slate-400'>{hour}</p>
      <p className='mb-2 font-semibold'>{temp}</p>
      <img className='w-8 h-8 mx-auto' src={icon} alt='rain' />
      <div className='flex items-end'>
        <img className='w-5 h-5 mx-auto p-1' src={windIcon} alt='rain' />
        <p className='mt-3 text-xs font-light text-slate-400'>{wind}</p>
      </div>
    </div>
  );
}
