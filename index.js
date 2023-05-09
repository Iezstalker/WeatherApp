
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Mathura")

// Amsterdam Weather

const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather_ = (city1) => {
    Amsterdam.innerHTML = city1
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options1)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct_.innerHTML = response.cloud_pct
            temp_.innerHTML = response.temp
            feels_like_.innerHTML = response.feels_like
            humidity_.innerHTML = response.humidity
            min_temp_.innerHTML = response.min_temp
            max_temp_.innerHTML = response.max_temp
            wind_speed_.innerHTML = response.wind_speed
            wind_degrees_.innerHTML = response.wind_degrees
            sunrise_.innerHTML = response.sunrise
            sunset_.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

getWeather_("Amsterdam")

// Norway Weather

const options_ = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

const getWeather1 = (city2) => {
    Norway.innerHTML = city2
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options_)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

getWeather1("Norway");

//Alaska Weather

const options3 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather2 = (city3) => {
    Alaska.innerHTML = city3
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options3)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

getWeather2("Alaska")

//Lucknow Weather

const options4 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather3 = (city4) => {
    Lucknow.innerHTML = city4
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options4)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

getWeather3("Lucknow")

//Ghaziabad Weather

const options5 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather4 = (city5) => {
    Ghaziabad.innerHTML = city5
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5, options5)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

getWeather4("Ghaziabad")

// Varanasi Weather 

const options6 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32471a1258mshf0b6eaed5d47393p15b9c6jsn265731d2dbac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather6 = (city6) => {
    Varanasi.innerHTML = city6
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city6, options6)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct7.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            wind_degrees7.innerHTML = response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

getWeather6("Varanasi")
