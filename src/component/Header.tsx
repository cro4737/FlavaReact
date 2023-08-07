import React from 'react';

import WeatherApiCall from "./weather/WeatherApiCall";
import AddIcon from "./svgIcon/AddIcon";
import CommonModal from "./CommonModal";
import BoardC from "./BoardC";
import SidebarToggle from "./SidebarToggle";

import '../css/Header.css';
import '../css/bootstrap_min.css.map.css';
import ProfileImg from '../img/test.jpg'


function Header(){
    return <div>
        <div id={"grid"} >
            <SidebarToggle/>
            <img src={ProfileImg} id={"profileImg"} alt={"profileImg"}/>
            <WeatherApiCall/>
            <CommonModal _btnName={<AddIcon/>} _title={""} _body={<BoardC/>}/>
            {/*<CommonModal _btnName={<WeatherSummary/>} _title={"오늘의 날씨"} _body={<WeatherDetail/>}/>*/}
        </div>
    </div>
}

export default Header;