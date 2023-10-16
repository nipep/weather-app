const key = `60c8ff7232914e60bb8104424230910`;
const form = document.querySelector("#formApp");
const input = document.querySelector("#inputApp");
const container = document.querySelector("#container");
let city;
let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let mounth = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
async function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&lang=ru`;
  const response = await fetch(url);
  data = await response.json();
  return data;
}
function HTMLCard({
  mainLogo,
  city,
  country,
  dayName,
  dateFull,
  time,
  temp,
  tempFeels,
  condition,
  sunset,
  sunrise,
  chanceFallout,
  windSpeed,
  humidity,
  uvIndex,
  pressure,
  visible,
  timeV1,
  timeV2,
  timeV3,
  timeV4,
  timeV5,
  timeV6,
  timeV7,
  timeV8,
  timeV9,
  timeV10,
  timeV11,
  timeV12,
  logoV1,
  logoV2,
  logoV3,
  logoV4,
  logoV5,
  logoV6,
  logoV7,
  logoV8,
  logoV9,
  logoV10,
  logoV11,
  logoV12,
  tempV1,
  tempV2,
  tempV3,
  tempV4,
  tempV5,
  tempV6,
  tempV7,
  tempV8,
  tempV9,
  tempV10,
  tempV11,
  tempV12,
}) {
  const HTML = `<div class="weather-wrapper" id="card">
    <div class="weather__info">
    <div class="weather__main block" id="weatherMain">
        <div class="img__value">
            <div class="img__top">
                <div class="img__top-left">
                    <div class="img__city">
                        <div class="city-value" id="cityValue">
                            ${city},&nbsp;
                        </div>
                        <div class="country-value" id="countryValue">
                            ${country}
                        </div>
                    </div>
                    <div class="img__date">
                        <div class="day-value" id="dayValue">
                            ${dayName},&nbsp;
                        </div>
                        <div class="date-value" id="dateValue">
                            ${dateFull}
                        </div>
                    </div>
                </div>
                <div class="time-value" id="timeValue">
                    ${time}
                </div>
            </div>  
            <div class="img__bottom">
                <div class="img__bottom-left">
                    <div class="temp__value">
                        ${temp}ºc
                    </div>
                    <div class="weather__temp">
                        <div class="fell__value">
                            ${tempFeels} ºc
                        </div>
                        <span></span>
                        <div class="cloud__value">
                            ${condition}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="weather__secondary block">
        <h2 class="title__weather">
            Информация о погоде сегодня
        </h2>
        <ul class="weather__list">
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/temp.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Ощущается как 
                    </h3>
                </div>
                <div class="weather__value">
                    ${tempFeels} ºc
                </div>
            </li>
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/cloud.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Вероятность осадков
                    </h3>
                </div>
                <div class="weather__value">
                    ${chanceFallout} %
                </div>
            </li>
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/wind.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Скорость ветра
                    </h3>
                </div>
                <div class="weather__value">
                    ${windSpeed} км/ч
                </div>
            </li>
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/drop.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Влажность воздуха
                    </h3>
                </div>
                <div class="weather__value">
                    ${humidity} %
                </div>
            </li>
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/sun.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Уф-индекс  
                    </h3>
                </div>
                <div class="weather__value">
                    ${uvIndex} 
                </div>
            </li>
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/3305016.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Давление воздуха 
                    </h3>
                </div>
                <div class="weather__value">
                    ${pressure} гПа
                </div>
            </li>
            <li class="weather__item">
                <div class="weather__left">
                    <img src="img/eye-3-svgrepo-com.svg" alt="" class="svg__weather">
                    <h3 class="weather__title">
                        Видимость
                    </h3>
                </div>
                <div class="weather__value">
                    ${visible} км
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="weather__days">
    <div class="weather__img">
        <img class="sun__solstice" src="img/sun.png" alt="" id="sunSolstice">
        <div class="weather__solstice">
            <div class="weather__sunrise">
                ${sunrise}
            </div>
            <div class="weather__sunset">
                ${sunset}
            </div>
        </div>
    </div>
    <div class="weather__3days">
        <h2 class="days__title">
            Прогноз на день
        </h2>
        <ul class="days__list">
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV1}
                </h3>
                <div class="days__logo">
                    <img src="./weather${logoV1}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV1}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV2}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV2}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV2}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV3}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV3}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV3}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV4}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV4}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV4}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV5}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV5}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV5}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV6}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV6}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV6}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV7}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV7}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV7}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV8}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV8}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV8}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV9}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV9}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV9}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV10}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV10}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV10}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV11}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV11}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV11}ºc
                    </div>
                </div>
            </li>
            <li class="days__item">
                <h3 class="days__item-title">
                    ${timeV12}
                </h3>
                <div class="days__logo">
                    <img src="./weather/${logoV12}" alt="">
                </div>
                <div class="days__down">
                    <div class="max__temp">
                        ${tempV12}ºc
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>   
</div>`;
  container.insertAdjacentHTML("beforeend", HTML);
  changeBackground();
}
function changeBackground() {
  const weatherBackground = document.querySelector("#weatherMain");
  const sunCondition = document.querySelector("#sunSolstice");
  if (data.current.is_day == 1) {
    weatherBackground.style.backgroundImage = "url(/img/day.jpg)";
    sunCondition.setAttribute("src", "img/sun.png");
  } else {
    weatherBackground.style.backgroundImage = "url(/img/night.png)";
    sunCondition.setAttribute("src", "img/moon.png");
  }
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const errorTitle = document.querySelector("#errorTitle");
  const cardHrml = document.querySelector("#card");
  if (errorTitle) errorTitle.remove();
  if (cardHrml) cardHrml.remove();

  city = input.value.trim();
  input.value = "";
  input.blur();
  if (city == "Первоуральск" || city == "первоуральск") {
    city = "Pervouralsk";
  }
  const data = await getWeather(city);

  if (data.error) {
    const HTML = `<h1 class="error__title" id="errorTitle">Упс! Такого города не найдено(</h1>`;
    container.insertAdjacentHTML("beforeend", HTML);
  } else {
    // Для первоуральска
    if (data.location.name == "Pervouralsk") {
      data.location.name = "Первоуральск";
      data.location.country = "Россия";
    }
    // день недели
    const day = new Date(data.location.localtime.split(" ")[0]);
    // дата
    const mounthValue = mounth[day.getMonth()];
    const numberDay = data.location.localtime.split(" ")[0].split("-")[1];
    const yearValue = data.location.localtime.split(" ")[0].split("-")[0];
    const fullDate = `${numberDay} ${mounthValue} ${yearValue}`;
    const chanceFalloutC = data.forecast.forecastday[1].day.daily_chance_of_rain >= data.forecast.forecastday[1].day.daily_chance_of_snow ? data.forecast.forecastday[1].day.daily_chance_of_rain
    : data.forecast.forecastday[1].day.daily_chance_of_snow;
    // час
    const timeDay = {
      time1: data.forecast.forecastday[0].hour[0].time.split(" ")[1],
      time2: data.forecast.forecastday[0].hour[1].time.split(" ")[1],
      time3: data.forecast.forecastday[0].hour[2].time.split(" ")[1],
      time4: data.forecast.forecastday[0].hour[3].time.split(" ")[1],
      time5: data.forecast.forecastday[0].hour[4].time.split(" ")[1],
      time6: data.forecast.forecastday[0].hour[5].time.split(" ")[1],
      time7: data.forecast.forecastday[0].hour[6].time.split(" ")[1],
      time8: data.forecast.forecastday[0].hour[7].time.split(" ")[1],
      time9: data.forecast.forecastday[0].hour[8].time.split(" ")[1],
      time10: data.forecast.forecastday[0].hour[9].time.split(" ")[1],
      time11: data.forecast.forecastday[0].hour[10].time.split(" ")[1],
      time12: data.forecast.forecastday[0].hour[11].time.split(" ")[1],
    };
    const timeNight = {
      time1: data.forecast.forecastday[0].hour[12].time.split(" ")[1],
      time2: data.forecast.forecastday[0].hour[13].time.split(" ")[1],
      time3: data.forecast.forecastday[0].hour[14].time.split(" ")[1],
      time4: data.forecast.forecastday[0].hour[15].time.split(" ")[1],
      time5: data.forecast.forecastday[0].hour[16].time.split(" ")[1],
      time6: data.forecast.forecastday[0].hour[17].time.split(" ")[1],
      time7: data.forecast.forecastday[0].hour[18].time.split(" ")[1],
      time8: data.forecast.forecastday[0].hour[19].time.split(" ")[1],
      time9: data.forecast.forecastday[0].hour[20].time.split(" ")[1],
      time10: data.forecast.forecastday[0].hour[21].time.split(" ")[1],
      time11: data.forecast.forecastday[0].hour[22].time.split(" ")[1],
      time12: data.forecast.forecastday[0].hour[23].time.split(" ")[1],
    };
    const tempDay = {
      temp1: Math.floor(data.forecast.forecastday[0].hour[0].temp_c),
      temp2: Math.floor(data.forecast.forecastday[0].hour[1].temp_c),
      temp3: Math.floor(data.forecast.forecastday[0].hour[2].temp_c),
      temp4: Math.floor(data.forecast.forecastday[0].hour[3].temp_c),
      temp5: Math.floor(data.forecast.forecastday[0].hour[4].temp_c),
      temp6: Math.floor(data.forecast.forecastday[0].hour[5].temp_c),
      temp7: Math.floor(data.forecast.forecastday[0].hour[6].temp_c),
      temp8: Math.floor(data.forecast.forecastday[0].hour[7].temp_c),
      temp9: Math.floor(data.forecast.forecastday[0].hour[8].temp_c),
      temp10: Math.floor(data.forecast.forecastday[0].hour[9].temp_c),
      temp11: Math.floor(data.forecast.forecastday[0].hour[10].temp_c),
      temp12: Math.floor(data.forecast.forecastday[0].hour[11].temp_c),
    };
    const tempNight = {
      temp1: Math.floor(data.forecast.forecastday[0].hour[12].temp_c),
      temp2: Math.floor(data.forecast.forecastday[0].hour[13].temp_c),
      temp3: Math.floor(data.forecast.forecastday[0].hour[14].temp_c),
      temp4: Math.floor(data.forecast.forecastday[0].hour[15].temp_c),
      temp5: Math.floor(data.forecast.forecastday[0].hour[16].temp_c),
      temp6: Math.floor(data.forecast.forecastday[0].hour[17].temp_c),
      temp7: Math.floor(data.forecast.forecastday[0].hour[18].temp_c),
      temp8: Math.floor(data.forecast.forecastday[0].hour[19].temp_c),
      temp9: Math.floor(data.forecast.forecastday[0].hour[20].temp_c),
      temp10: Math.floor(data.forecast.forecastday[0].hour[21].temp_c),
      temp11: Math.floor(data.forecast.forecastday[0].hour[22].temp_c),
      temp12: Math.floor(data.forecast.forecastday[0].hour[23].temp_c),
    };
    const logoDay = {
      logo1:
        data.forecast.forecastday[0].hour[0].condition.icon.split("weather")[2],
      logo2:
        data.forecast.forecastday[0].hour[1].condition.icon.split("weather")[2],
      logo3:
        data.forecast.forecastday[0].hour[2].condition.icon.split("weather")[2],
      logo4:
        data.forecast.forecastday[0].hour[3].condition.icon.split("weather")[2],
      logo5:
        data.forecast.forecastday[0].hour[4].condition.icon.split("weather")[2],
      logo6:
        data.forecast.forecastday[0].hour[5].condition.icon.split("weather")[2],
      logo7:
        data.forecast.forecastday[0].hour[6].condition.icon.split("weather")[2],
      logo8:
        data.forecast.forecastday[0].hour[7].condition.icon.split("weather")[2],
      logo9:
        data.forecast.forecastday[0].hour[8].condition.icon.split("weather")[2],
      logo10:
        data.forecast.forecastday[0].hour[9].condition.icon.split("weather")[2],
      logo11:
        data.forecast.forecastday[0].hour[10].condition.icon.split(
          "weather"
        )[2],
      logo12:
        data.forecast.forecastday[0].hour[11].condition.icon.split(
          "weather"
        )[2],
    };
    const logoNight = {
      logo1:
        data.forecast.forecastday[0].hour[12].condition.icon.split(
          "weather"
        )[2],
      logo2:
        data.forecast.forecastday[0].hour[13].condition.icon.split(
          "weather"
        )[2],
      logo3:
        data.forecast.forecastday[0].hour[14].condition.icon.split(
          "weather"
        )[2],
      logo4:
        data.forecast.forecastday[0].hour[15].condition.icon.split(
          "weather"
        )[2],
      logo5:
        data.forecast.forecastday[0].hour[16].condition.icon.split(
          "weather"
        )[2],
      logo6:
        data.forecast.forecastday[0].hour[17].condition.icon.split(
          "weather"
        )[2],
      logo7:
        data.forecast.forecastday[0].hour[18].condition.icon.split(
          "weather"
        )[2],
      logo8:
        data.forecast.forecastday[0].hour[19].condition.icon.split(
          "weather"
        )[2],
      logo9:
        data.forecast.forecastday[0].hour[20].condition.icon.split(
          "weather"
        )[2],
      logo10:
        data.forecast.forecastday[0].hour[21].condition.icon.split(
          "weather"
        )[2],
      logo11:
        data.forecast.forecastday[0].hour[22].condition.icon.split(
          "weather"
        )[2],
      logo12:
        data.forecast.forecastday[0].hour[23].condition.icon.split(
          "weather"
        )[2],
    };
    // часы
    const hourValue = data.location.localtime.split(" ")[1].split(":")[0];
    const timeHalf = hourValue <= 12 ? timeDay : timeNight;
    const logoHalf = hourValue <= 12 ? logoDay : logoNight;
    const tempHalf = hourValue <= 12 ? tempDay : tempNight;
    const biglogo = `${data.current.condition.icon.split("64x64")[0]}128x128${
      data.current.condition.icon.split("64x64")[1]
    }`;
    // закат
    const fullSunset = `${
      Number(
        data.forecast.forecastday[0].astro.sunset.split(" ")[0].split(":")[0]
      ) + 12
    }:${data.forecast.forecastday[0].astro.sunset.split(" ")[0].split(":")[1]}`;
    // закат
    const weatherData = {
      // лого
      mainLogo: biglogo,

      // город
      city: data.location.name,

      // страна
      country: data.location.country,

      // день недели
      dayName: days[day.getDay()],

      // дата
      dateFull: fullDate,

      // время
      time: data.location.localtime.split(" ")[1],

      // температура
      temp: Math.floor(data.current.temp_c),

      // ощущение температуры
      tempFeels: Math.floor(data.current.feelslike_c),

      // состояние
      condition: data.current.condition.text,

      // время заката
      sunset: fullSunset,

      // время восхода
      sunrise: data.forecast.forecastday[0].astro.sunrise.split(" ")[0],

      // вероятность дождя
      chanceFallout: chanceFalloutC,

      // скорость ветра
      windSpeed: data.current.wind_kph,

      // влажность воздуха
      humidity: data.current.humidity,

      // уф индекс
      uvIndex: data.current.uv,

      // давление
      pressure: data.current.pressure_mb,

      // видимость
      visible: data.current.vis_km,

      // прогноз на день по часам
      timeV1: timeHalf.time1,
      logoV1: logoHalf.logo1,
      tempV1: tempHalf.temp1,

      timeV2: timeHalf.time2,
      logoV2: logoHalf.logo2,
      tempV2: tempHalf.temp2,

      timeV3: timeHalf.time3,
      logoV3: logoHalf.logo3,
      tempV3: tempHalf.temp3,

      timeV4: timeHalf.time4,
      logoV4: logoHalf.logo4,
      tempV4: tempHalf.temp4,

      timeV5: timeHalf.time5,
      logoV5: logoHalf.logo5,
      tempV5: tempHalf.temp5,

      timeV6: timeHalf.time6,
      logoV6: logoHalf.logo6,
      tempV6: tempHalf.temp6,

      timeV7: timeHalf.time7,
      logoV7: logoHalf.logo7,
      tempV7: tempHalf.temp7,

      timeV8: timeHalf.time8,
      logoV8: logoHalf.logo8,
      tempV8: tempHalf.temp8,

      timeV9: timeHalf.time9,
      logoV9: logoHalf.logo9,
      tempV9: tempHalf.temp9,

      timeV10: timeHalf.time11,
      logoV10: logoHalf.logo11,
      tempV10: tempHalf.temp11,

      timeV11: timeHalf.time11,
      logoV11: logoHalf.logo11,
      tempV11: tempHalf.temp11,

      timeV12: timeHalf.time12,
      logoV12: logoHalf.logo12,
      tempV12: tempHalf.temp12,
    };
    HTMLCard(weatherData);
  }
});
