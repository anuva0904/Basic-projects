const apiKey="7d94d92b9a04d2246dc6ec91ff09cf8a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");

async function checkWeather(city){
  const response= await fetch(apiUrl + city +`&appid=${apiKey}`);
  if (response.status==404){
    document.querySelector(".error").style.display='block';
    document.querySelector(".weather").style.display="none";
  } else{
    var data= await response.json();
    console.log(data);

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+`°c`;
  document.querySelector(".wind").innerHTML= `💨`+data.wind.speed+` km/h`;
  document.querySelector(".humidity").innerHTML=`💧`+data.main.humidity;


  document.querySelector(".error").style.display = 'none'; 
  document.querySelector(".weather").style.display="block";
  }
  
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

