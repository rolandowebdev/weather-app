export default function WeatherStatus({ status, day, icon }) {
  return (
    <div className='flex items-center gap-2'>
      <img className='w-6 h-6' src={icon} alt={status} />
      <p className='text-lg'>
        {day} - {status}
      </p>
    </div>
  );
}
