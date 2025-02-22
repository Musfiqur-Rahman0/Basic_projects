const searchBtn = document.querySelector(".search");
const cityName = document.querySelector(".cityName");
const WeatherData = document.querySelector(".Weather");
const input = document.querySelector(".input");
const icon = document.querySelector(".img");
const flag = document.querySelector("#country");
const feel_like = document.querySelector(".feel-like");
const Pressure = document.querySelector(".preasure");
const Humidity = document.querySelector(".humanitidy");
const tempMax = document.querySelector(".temp_max");

const key = "f512d90d0534f2c14e1921b2bbe931bb";
let city = "Dhaka";

const getWeather = async () => {
  city = input.value.trim() || city;
  if (city.trim() !== "") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("please enter a city name!");
  }
};

function setData(data) {
  const { main, name, weather, sys } = data;

  const iconCode = weather[0].icon;
  const countryCode = sys.country;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const flagUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
  const { temp, humidity, feels_like, pressure, temp_max } = main;
  WeatherData.innerText = `${temp}°C `;
  cityName.innerHTML = name;
  icon.src = iconUrl;
  feel_like.innerText = `Feels like ${feels_like}`;
  Pressure.innerText = pressure;
  Humidity.innerText = humidity;
  tempMax.innerText = temp_max;
  flag.src = flagUrl;
}

const Temprature = document.querySelector(".Temprature");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather();
  input.value = "";
});

function init() {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    },
    () => {
      city = "Dhaka";
      getWeather();
    }
  );
}

init();
