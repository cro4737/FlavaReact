import React from 'react';
import WeatherIcon from "./WeatherIconMap";
import "../../css/WeatherSummary.css"
import CommonModal from "../CommonModal";
import Form from 'react-bootstrap/esm/Form';

function WeatherApiCall(){
    const host= "https://api.openweathermap.org/data/2.5/weather"
    const key="e8eb83b7442bde62e1eaa3433f1bc069"

    const [weather,setWeather]=React.useState(host)

    const [temp,setTemp]=React.useState(0)
    const [tempMax,setTempMax]=React.useState(0)
    const [tempMin,setTempMin]=React.useState(0)
    const [loca,setLoca]=React.useState("Seoul")

    const qsParam={
        "q":loca,
        "appid":key,
        "lang":"kr",
        "units":"metric"
    }

    const qs=host+"/?"+Object.entries(qsParam).map(e => e.join('=')).join('&')
    //Object.entries(qsParam).map(e => e) :::: e is array pairs of [key,value], rst of map is array

    React.useEffect(()=>{
        console.log("render",qs)
        const xhr=new XMLHttpRequest()
        xhr.open('get',qs)
        xhr.onload=()=>{
            if (xhr.readyState===4){
                setWeather(JSON.parse(xhr.response).weather[0].icon)

                setTemp(Math.round(Number.parseFloat(JSON.parse(xhr.response).main.temp)*10)/10)
                setTempMax(Math.round(Number.parseFloat(JSON.parse(xhr.response).main.temp_max)*10)/10)
                setTempMin(Math.round(Number.parseFloat(JSON.parse(xhr.response).main.temp_min)*10)/10)
            }
        }
        xhr.send()
        },[qs])

    const changeLoca=()=>{
        const location:HTMLSelectElement | null=document.querySelector("#location");
        if(location!==null){
            setLoca(location.value);
        }
    }

    return <div>
        {/*{JSON.stringify(weather)}*/}
        <CommonModal
            _btnName={<WeatherIcon icon={JSON.stringify(weather)} id={"weatherIcon"}/>}
            _title={"오늘의 날씨"}
            _body={<div>
                {/*{JSON.stringify(weather)}*/}
                <Form.Select aria-label="location" id={"location"} onChange={changeLoca} value={loca}>
                    <option value="Gangwon-do">강원</option>
                    <option value="Gyeonggi-do">경기</option>
                    <option value="Gyeongsangnam-do">경남</option>
                    <option value="Gyeongsangbuk-do">경북</option>
                    <option value="Gwangju">광주</option>
                    <option value="Daegu">대구</option>
                    <option value="Busan">부산</option>
                    <option value="Seoul">서울</option>
                    <option value="Sejong" >세종</option>
                    <option value="Ulsan">울산</option>
                    <option value="Incheon">인천</option>
                    <option value="Jeollanam-do">전남</option>
                    <option value="Jeollabuk-do">전북</option>
                    <option value="Jeju">제주</option>
                    <option value="Chungcheongnam-do">충남</option>
                    <option value="Chungcheongbuk-do">충북</option>
                </Form.Select>
                <div>현재온도 : {temp}℃</div>
                <div>최고온도 : {tempMax}℃</div>
                <div>최저온도 : {tempMin}℃</div>
            </div>
        }/>
    </div>
}

export default WeatherApiCall;