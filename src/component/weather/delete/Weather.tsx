import React from 'react';

function Weather(){
    const host= "https://api.openweathermap.org/data/2.5/weather"
    const key="e8eb83b7442bde62e1eaa3433f1bc069"

    const [weather,setWeather]=React.useState(host)

    const qsParam={
        "q":"seoul",
        "appid":key,
        "lang":"kr",
        "units":"metric"
    }

    const qs=host+"/?"+Object.entries(qsParam).map(e => e.join('=')).join('&')
    //Object.entries(qsParam).map(e => e) :::: e is array pairs of [key,value], rst of map is array

    React.useEffect(()=>{
        const xhr=new XMLHttpRequest()
        xhr.open('get',qs)
        xhr.onload=()=>{
            if (xhr.readyState==4){
                setWeather(JSON.parse(xhr.response).weather[0].icon)
            }
        }
        xhr.send()

        console.log(qs)
        },[])

    return <div>
        {JSON.stringify(weather)}
    </div>
}

export default Weather;