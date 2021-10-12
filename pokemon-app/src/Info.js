import React from 'react';
import './Info.css'

function Info({name}){
    return (
    <div className="container-info">
      
        <div className="background">
         <h2>dd</h2>
        </div>
        
    
        <div className="info-pokemon">
        <h1>{name}</h1>
        </div>

    </div>);
}

export default Info;