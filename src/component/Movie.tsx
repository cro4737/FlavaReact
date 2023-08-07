import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";

function Movie(){
    const rst=document.querySelector("#searchRst");

    const [query,setQuery]=useState("")

    const setSearchText=()=>{
        const query:HTMLInputElement|null=document.querySelector('#searchText');
        if(query!=null){
            setQuery(query.value);
        }
    }
    const setQueryInit=()=>{
        const query:HTMLInputElement|null=document.querySelector('#searchText');
        if(query!=null){
            setQuery("");
            query.value="";
        }

    }

    let reqMovie=()=> {
       if(query===''){
            alert("no query");
            return;
        } else {
           const authKey = ""

           let qs = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&query=" + encodeURIComponent(query) + "&ServiceKey=" + authKey
           console.log(qs)


           const xhr = new XMLHttpRequest();
                xhr.open("GET", qs, false);
                xhr.send();

            if (xhr.readyState === 4){
                let json=JSON.parse(xhr.responseText);
                console.log(json.Data[0].Result);
                //        json.Data[0].Result.map((i:object)=>tempor(i))
                        json.Data[0].Result.map((i:object)=>poster(i))
            } else{
                console.error("request failed. returned status of "+xhr.readyState);
            }
        }
    }

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

    let summarizeF=(obj:any)=> {
        if(obj===null){
            new Error("noooooooooooooooooooooooooooooooooooo");
        }
        else{
            let movieObj = {
                "title": obj.title,
                "actor": obj.actors.actor.map((i:any)=>i.actorNm).join(' ,'),
                "director": obj.directors.director[0].directorNm,
                "prodYear": obj.prodYear,
                rating: 0,
                "posters": obj.posters
            };
            console.log(movieObj);
        }
    }


    let poster=(param:any)=>{
        if(rst===null){
            new Error("root is null")
        } else {
            //let tmp=createElement("img",{id:param.title, src:param.posters.split("|")[0]})
            //root.render(tmp);
            let tmp=document.createElement('img')
            tmp.id=param.title
            tmp.src=param.posters.split("|")[0]
            rst.appendChild(tmp)
        }
    }

    return <div>
        <Form.Label htmlFor="searchText">영화제목</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text id="searchTextHead">🔎</InputGroup.Text>
            <Form.Control
                type="text"
                id="searchText"
                placeholder="searchText"
                aria-label="searchText"
                aria-describedby="searchTextHelpBlock"
                onChange={setSearchText}
            />
            <Button variant="primary" id={"setSearchTextInit"} onClick={setQueryInit}>
                X
            </Button>
            <Button variant="primary" id={"searchBtn"} onClick={reqMovie}>
                검색
            </Button>
        </InputGroup>
        <Form.Text id="desc" muted>
            영화제목을 검색해보세요
        </Form.Text>
        <div id={"searchRst"}></div>
    </div>
}

export default Movie;
