let weather = {
    apiKey: "c18d200113dfc791ab27475b98875256",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=metric&appid=" 
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector('.change-name').innerHTML = "Welcome to " + name
    }
}