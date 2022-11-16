window.addEventListener('load', () => {
    let lon
    let lat

    let temperatura_valor = document.getElementById('temperatura-valor')
    let temperatura_descripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let icono_animado = document.getElementById('icono-animado')

    let viento_velocidad = document.getElementById('viento-velocidad')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicación actual    
            //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AQUI_VIENE_TU_API_KEY}`

            //ubicación por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=19fa80fb8a2d5dddcc9f334c0db14f16`

            //console.log(url)

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    console.log(data)

                    let temp = Math.round(data.main.temp)
                    //console.log(temp)
                    temperatura_valor.textContent = `${temp} ° C`

                    //console.log(data.weather[0].description)
                    let desc = data.weather[0].description
                    temperatura_descripcion.textContent = desc.toLowerCase()
                    ubicacion.textContent = data.name

                    viento_velocidad.textContent = `${data.wind.speed} m/s`

                    //para iconos estáticos
                    //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                    //icono.src = urlIcon
                    //console.log(data.weather[0].icon)

                    //para iconos dinámicos
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            icono_animado.src = './img/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            icono_animado.src = './img/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            icono_animado.src = './img/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            icono_animado.src = './img/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            icono_animado.src = './img/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            icono_animado.src = './img/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            icono_animado.src = './img/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            icono_animado.src = './img/cloudy-day-1.svg'
                            console.log('por defecto');
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})
