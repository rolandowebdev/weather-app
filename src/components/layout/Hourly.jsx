import HourlyStatus from '../hourlyStatus/HourlyStatus';
import rain from '../../assets/icons/rain.svg';

export default function Hourly({ weather }) {
  return (
    <section className='mt-20'>
      <h2 className='text-3xl font-semibold'>Hourly forecast</h2>
      <span className='my-3 divider'></span>
      <div className='flex justify-around rounded-md bg-white/5'>
        {weather.hourly.map((hour, index) => (
          <HourlyStatus
            key={index}
            hour={hour.title}
            icon={rain}
            wind={`${hour.wind_speed}km/h`}
          />
        ))}
      </div>
    </section>
  );
}
