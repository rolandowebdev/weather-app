import { iconUrl } from '../../service/weather';
import HourlyStatus from '../hourlyStatus/HourlyStatus';

export default function Hourly({ weather }) {
  return (
    <section className='mt-8 rounded-md bg-black/75 backdrop-blur-sm'>
      <div className='flex justify-around'>
        {weather.hourly.map((hour, index) => (
          <HourlyStatus
            key={index}
            hour={hour.title}
            temp={`${hour.temp.toFixed()}°`}
            icon={iconUrl(hour.icon)}
            wind={`${hour.wind_speed}km/h`}
          />
        ))}
      </div>
    </section>
  );
}
