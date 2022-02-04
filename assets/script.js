var getWeather = function () {
    //let shyla = '74ba70f345163fd841357d524728306a'
    var response = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=94.04&exclude=daily&appid=74ba70f345163fd841357d524728306a');

    console.log(response);
};

getWeather();