import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";

import XBtnIcon from "./svgIcon/XBtnIcon";
import ChkIcon from "./svgIcon/ChkIcon";
import UnDecided from "./UnDecided";

import "../css/Board.css"

function BoardC(){
    const today=new Date();
    const todayY=today.getFullYear().toString();
    const todayM=today.getMonth()<8?"0"+(today.getMonth()+1).toString():today.getMonth().toString();
    const todayD=today.getDate()<10?"0"+today.getDate().toString():today.getDate().toString();
    const todayH=today.getHours()<10?"0"+today.getHours().toString():today.getHours().toString();
    const todayMi=today.getMinutes()<10?"0"+today.getMinutes().toString():today.getMinutes().toString();

    const [date,setDate]=useState([todayY,todayM,todayD].join("-"))
    const [time,setTime]=useState([todayH,todayMi].join(":"))

    const dateChk=()=>{
        let d:HTMLInputElement|null = document.querySelector("#date")
        if(d!== null){
            setDate(d.value)
        }
    }
    const timeChk=()=>{
        let t:HTMLInputElement|null = document.querySelector("#time")
        if(t!== null){
            setTime(t.value)
        }
    }
    const close=()=>{
        alert("close")
    }
    const save=()=>{
        let data=new FormData();
        const title:HTMLFormElement|null=document.querySelector('#title')
        const date:HTMLFormElement|null=document.querySelector('#date')
        const time:HTMLFormElement|null=document.querySelector('#time')
        const contents:HTMLFormElement|null=document.querySelector('#contents')

        if(title!==null && date!==null && time!==null && contents!==null){
            data.append("title",title.value)
            data.append("date",date.value)
            data.append("time",time.value)
            data.append("contents",contents.value)

            const xhr=new XMLHttpRequest();
            xhr.open("POST","/",false);
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(data);
        }
    }

    return <div>
        <Form id={"boardData"} action={"/"}>
            <InputGroup className="mb-3">
                <Button variant="primary" id={"closeBtn"} onClick={close}>
                    <XBtnIcon/>
                </Button>
                <Form.Control
                    type="text"
                    id="title"
                    placeholder="제목"
                    aria-label="title"
                    aria-describedby="titleHelpBlock"
                />
                <Button variant="primary" id={"saveBtn"} onClick={save}>
                   <ChkIcon/>
                </Button>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                    type="date"
                    id="date"
                    aria-label="date"
                    aria-describedby="dateHelpBlock"
                    value={date}
                    onChange={dateChk}
                />
                <Form.Control
                    type="time"
                    id="time"
                    aria-label="time"
                    aria-describedby="timeHelpBlock"
                    value={time}
                    onChange={timeChk}
                />
            </InputGroup>
            <Form.Group className="mb-3" controlId="contents">
                <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <UnDecided/>

        </Form>
    </div>
}

export default BoardC;