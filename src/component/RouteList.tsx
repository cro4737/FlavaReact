import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Button from "react-bootstrap/Button";

import App from "./App";
import Movie from "./Movie";
import Board from "./Board";

import "../css/Header.css"

function RouteList(){
    return <div>
        <BrowserRouter>
            <div className="menu-wrapper">
                <Button variant={"primary"}>
                    <Link to="/" className={"routeLinkGroup"}>Home</Link>
                </Button>
                <Button variant={"primary"}>
                    <Link to="/board" className={"routeLinkGroup"}>Board</Link>
                </Button>
                <Button variant={"primary"}>
                    <Link to="/movie" className={"routeLinkGroup"}>Movie</Link>
                </Button>
            </div>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/board" element={<Board/>} />
                <Route path="/movie" element={<Movie/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default RouteList