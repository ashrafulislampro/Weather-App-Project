const API_Key = "22367c2bc90359d01d9dbb41e533596e";
function searchTemperature(){
          const city =  document.getElementById("city_name").value;
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

          fetch(url)
          .then(res => res.json())
          .then(data => displayTemperature(data));

          document.getElementById("city_name").value = "";
}

// code recognize
const setInnerText = (id, text) => {
          document.getElementById(id).innerText = text;
}

// set value in the webpage
function displayTemperature(temperature) {
          setInnerText("city",  temperature.name);
          setInnerText("country", temperature.sys.country);
          setInnerText("temperature", temperature.main.temp);
          setInnerText("temp_min",  temperature.main.temp_min);
          setInnerText("temp_max", temperature.main.temp_max);
          setInnerText("condition", temperature.weather[0].description);

          const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
          const imgIcon = document.getElementById("weather_icon");
          imgIcon.setAttribute("src", url);          
}
