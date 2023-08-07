import React from 'react';
import Button from 'react-bootstrap/esm/Button';

import CommonModal from "./CommonModal";
import Movie from "./Movie";
import DocuIcon from "./svgIcon/DocuIcon";
import CameraIcon from "./svgIcon/CameraIcon";
import VideoIcon from "./svgIcon/VideoIcon";
import VoiceIcon from "./svgIcon/VoiceIcon";
import MusicIcon from "./svgIcon/MusicIcon";
import MovieIcon from "./svgIcon/MovieIcon";
import BookIcon from "./svgIcon/BookIcon";
import LocationIcon from "./svgIcon/LocationIcon";
import ChainIcon from "./svgIcon/ChainIcon";

import "../css/undecided.css";
//import docuBtn from "../icon/docuBtn.svg";

function UnDecided(){


    return <div>
        <Button variant="primary" id={"docuBtn"} className={"BtnGroup"}>
            {/*<img src={docuBtn} alt={"docuBtn"} id={"docuBtnIcon"}/>*/}
            <DocuIcon/>
        </Button>
        <Button variant="primary" id={"cameraBtn"} className={"BtnGroup"}>
            <CameraIcon/>
        </Button>
        <Button variant="primary" id={"videoBtn"} className={"BtnGroup"}>
            <VideoIcon/>
        </Button>
        <Button variant="primary" id={"voiceBtn"} className={"BtnGroup"}>
            <VoiceIcon/>
        </Button>
        <Button variant="primary" id={"musicBtn"} className={"BtnGroup"}>
            <MusicIcon/>
        </Button>
        <Button variant="primary" id={"movieBtn"} className={"BtnGroup"}>
            {/*<MovieIcon/>*/}
            <CommonModal _btnName={<MovieIcon/>} _title={"영화 검색"} _body={<Movie/>}/>
        </Button>
        <Button variant="primary" id={"bookBtn"} className={"BtnGroup"}>
            <BookIcon/>
        </Button>
        <Button variant="primary" id={"locationBtn"} className={"BtnGroup"}>
            <LocationIcon/>
        </Button>
        <Button variant="primary" id={"chainBtn"} className={"BtnGroup"}>
            <ChainIcon/>
        </Button>
    </div>
}

export default UnDecided;