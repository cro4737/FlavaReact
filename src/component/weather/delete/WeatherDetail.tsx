import React from 'react';
import Form from 'react-bootstrap/Form';

function WeatherDetail(){
    const host= "https://api.openweathermap.org/data/2.5/weather"
    const key="e8eb83b7442bde62e1eaa3433f1bc069"

    const [temp,setTemp]=React.useState(0)
    const [tempMax,setTempMax]=React.useState(0)
    const [tempMin,setTempMin]=React.useState(0)
    const [loca,setLoca]=React.useState("seoul")

    const qsParam={
        "q":loca,
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
            if (xhr.readyState===4){
                setTemp(JSON.parse(xhr.response).main.temp)
                setTempMax(JSON.parse(xhr.response).main.temp_max)
                setTempMin(JSON.parse(xhr.response).main.temp_min)
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
        <Form.Select aria-label="location" id={"location"} onChange={changeLoca}>
            <option value="Gangwon-do">강원</option>
            <option value="Gyeonggi-do">경기</option>
            <option value="Gyeongsangnam-do">경남</option>
            <option value="Gyeongsangbuk-do">경북</option>
            <option value="Gwangju">광주</option>
            <option value="Daegu">대구</option>
            <option value="Busan">부산</option>
            <option value="Seoul" selected>서울</option>
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
}

export default WeatherDetail;