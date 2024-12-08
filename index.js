import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Logo from "./Logo";
import Search from './Search';
import Map from './Map';
import Itinerary from "./Itinerary";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Navbar/>
        <Logo/>
        <Search/>
        <Map/>
        <Itinerary/>




    </div>
);


