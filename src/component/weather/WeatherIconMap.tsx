import React from 'react';
import d01 from "../../icon/weather/weather_01d.svg";
import n01 from "../../icon/weather/weather_01n.svg";
import d02 from "../../icon/weather/weather_02d.svg";
import n02 from "../../icon/weather/weather_02n.svg";
import i03 from "../../icon/weather/weather_03.svg";
import i04 from "../../icon/weather/weather_04.svg";
import i09 from "../../icon/weather/weather_09.svg";
import i10 from "../../icon/weather/weather_10.svg";
import i11 from "../../icon/weather/weather_11.svg";
import i13 from "../../icon/weather/weather_13.svg";
import i50 from "../../icon/weather/weather_50.svg";

type params={
    icon:string,
    id:string
}
function WeatherIconMap(props:params){
    let iconKey=props.icon

    const icon:{[key:string]:string}={
        '"01d"':d01,
        '"01n"':n01,
        '"02d"':d02,
        '"02n"':n02,
        '"03d"':i03,
        '"03n"':i03,
        '"04d"':i04,
        '"04n"':i04,
        '"09d"':i09,
        '"09n"':i09,
        '"10d"':i10,
        '"10n"':i10,
        '"11d"':i11,
        '"11n"':i11,
        '"13d"':i13,
        '"13n"':i13,
        '"50d"':i50,
        '"50n"':i50
    };
    return <div>
        <img id="weatherIcon"  src={icon[iconKey]} alt={iconKey}/>
    </div>
}

export default WeatherIconMap;