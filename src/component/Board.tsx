import React, {useState} from 'react';
import BoardC from "./BoardC"

function Board(){
    const boardRoot=document.querySelector("#board");


    // const reqMovie=()=>{
    //     if(query==''){
    //             alert("no query");
    //             return;
    //     } else {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open("POST","./movie",false);
    //         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //         xhr.send(`searchText=${query}`);
    //
    //         if (xhr.readyState == 4){
    //             let json=JSON.parse(xhr.responseText);
    //             console.log(json.Data[0].Result);
    //         } else{
    //             console.error("request failed. returned status of "+xhr.readyState);
    //         }
    //     }
    // }

    return <div id={"board"}>
        <div id={"0"}>어떤 객체가 오겠지?</div>
        <BoardC/>
    </div>
}

export default Board;