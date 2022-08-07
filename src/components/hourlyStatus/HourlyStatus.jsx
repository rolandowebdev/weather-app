export default function HourlyStatus({ icon, hour, wind }) {
  return (
    <div className='p-3 text-center'>
      <p className='text-sm font-light text-slate-400'>{hour}</p>
      <p className='mb-2 font-semibold'>30°</p>
      <img className='w-6 h-6 mx-auto' src={icon} alt='rain' />
      <p className='mt-3 text-xs font-light text-slate-400'>{wind}</p>
    </div>
  );
}
