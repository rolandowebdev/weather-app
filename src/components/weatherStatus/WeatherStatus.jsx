export default function WeatherStatus({ status, day, icon }) {
  return (
    <div className='flex items-center gap-1'>
      <img className='w-8 h-8' src={icon} alt={status} />
      <p className='text-md'>
        {day} - {status}
      </p>
    </div>
  );
}
