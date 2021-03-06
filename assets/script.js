var btn = document.getElementById('button')

// current weather display///
var getWeather = function () {
    var myKey = '74ba70f345163fd841357d524728306a'
    var city = document.getElementById('cityinput').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`)
        .then(res => res.json())
        .then(data => {
            var lat = data.coord.lat
            var lon = data.coord.lon
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`)
                .then(res1 => res1.json())
                .then(data1 => {
                    console.log(data1)
                    // Current weather
                    console.log(moment().format('L'))
                    document.getElementById('currentCity').innerHTML = `City: ${city}`
                    document.getElementById('date').innerHTML = `${moment().format('L')}`
                    document.getElementById('currentTemp').innerHTML = `Temperature: ${data1.daily[0].temp.day}`
                    document.getElementById('currentHum').innerHTML = `Humidity: ${data1.daily[0].humidity}`
                    document.getElementById('currentWind').innerHTML = `Wind: ${data1.daily[0].wind_speed}`
                    document.getElementById('currentUV').innerHTML = `UV-index: ${data1.daily[0].uvi}`
                    // Forecast day 1
                    document.getElementById('forecastTemp1').innerHTML = `Temperature: ${data1.daily[1].temp.day}`
                    document.getElementById('date1').innerHTML = `${moment().add(1, 'days').format('L')}`
                    document.getElementById('forecastHum1').innerHTML = `Humidity: ${data1.daily[1].humidity}`
                    document.getElementById('forecastWind1').innerHTML = `Wind: ${data1.daily[1].wind_speed}`
                    // Forecast day 2
                    document.getElementById('forecastTemp2').innerHTML = `Temperature: ${data1.daily[2].temp.day}`
                    document.getElementById('date2').innerHTML = `${moment().add(2, 'days').format('L')}`
                    document.getElementById('forecastHum2').innerHTML = `Humidity: ${data1.daily[2].humidity}`
                    document.getElementById('forecastWind2').innerHTML = `Wind: ${data1.daily[2].wind_speed}`
                    // Forecast day 3
                    document.getElementById('forecastTemp3').innerHTML = `Temperature: ${data1.daily[3].temp.day}`
                    document.getElementById('date3').innerHTML = `${moment().add(3, 'days').format('L')}`
                    document.getElementById('forecastHum3').innerHTML = `Humidity: ${data1.daily[3].humidity}`
                    document.getElementById('forecastWind3').innerHTML = `Wind: ${data1.daily[3].wind_speed}`
                    // Forecast day 4
                    document.getElementById('forecastTemp4').innerHTML = `Temperature: ${data1.daily[4].temp.day}`
                    document.getElementById('date4').innerHTML = `${moment().add(4, 'days').format('L')}`
                    document.getElementById('forecastHum4').innerHTML = `Humidity: ${data1.daily[4].humidity}`
                    document.getElementById('forecastWind4').innerHTML = `Wind: ${data1.daily[4].wind_speed}`
                    // Forecast day 5
                    document.getElementById('forecastTemp5').innerHTML = `Temperature: ${data1.daily[5].temp.day}`
                    document.getElementById('date5').innerHTML = `${moment().add(5, 'days').format('L')}`
                    document.getElementById('forecastHum5').innerHTML = `Humidity: ${data1.daily[5].humidity}`
                    document.getElementById('forecastWind5').innerHTML = `Wind: ${data1.daily[5].wind_speed}`

                    if (data1.daily[0].uvi < 3) {
                        document.getElementById("currentUV").style.color = "green";
                    }
                    else if (data1.daily[0].uvi < 8) {
                        document.getElementById("currentUV").style.color = "gold";
                    }
                    else { document.getElementById("currentUV").style.color = "red"; }
                })

        })

};









// getWeather();
btn.addEventListener("click", getWeather)

//btn.addEventListener("click", document.getElementByClassName("fiveday").innerHTML = 'Five Day Forecast function () {

