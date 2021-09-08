const weatherApi = {
    key: "ab2ffd8491dc9bf83ae36f3caea3672a",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

const searchBox = document.getElementById('input');
searchBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchBox.value);
        getWeather(searchBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }


});
//get weather report
function getWeather(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

//show weather
function showWeather(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText= `${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

    let minMax = document.getElementById('min-max');
    minMax.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

   
    let date = document.getElementById('date');
    let today = new Date();
    date.innerText = dateManage(today);

    let time = document.getElementById('time');
    let totime = new Date();
    time.innerText = timeManage(totime);


    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1583184617435-d0dc4a3857a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    if(weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1493130952181-47e36589f64d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3VkeSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1547242651-45e06cae2491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    if(weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1490590292518-2a52bd885754?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdHklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1597907412477-dad8c83d3e86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }
    if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1540941511432-d0d8480fdd99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGhhenklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }

}    
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
function timeManage(timeArgs){
    let time1 = timeArgs.getHours() + ":" + timeArgs.getMinutes() + ":" + timeArgs.getSeconds();
    return `${time1}`;
}



































