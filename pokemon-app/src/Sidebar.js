
import React from 'react';
import './Sidebar.css';
import IconPikachu from './img/pikachu.png'


function Sidebar ({image,name,alt}){
   
    var dod = document.getElementsByClassName("sidebar-option");
    return (<div className="region-container">
        <div className="sidebar-option">
            <img className="icon"src={image} alt={alt}></img>
            </div>
            <p>{name}</p>
           
         
     
    </div>);
}

export default Sidebar;