var getWeather = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily&appid={shyla}")

    console.log("function was called");
};

getWeather();