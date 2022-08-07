import { DateTime } from 'luxon';

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(process.env.REACT_APP_BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({
        ...searchParams,
        appid: process.env.REACT_APP_API_KEY,
    });

    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
            pressure,
            grnd_level,
        },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
        pressure,
        grnd_level,
    };
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    daily = daily.slice(1, 4).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
            weather: d.weather[0].main,
        };
    });

    hourly = hourly.slice(1, 5).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon,
            wind_speed: d.wind_speed,
        };
    });

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async(searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'current,minutely,alerts',
        units: searchParams.units,
    }).then(formatForecastWeather);

    return {...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (secs, zone, format = 'cccc') =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrl };