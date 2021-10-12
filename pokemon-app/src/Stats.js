
import React from 'react';
import './Stats.css'
import Star from './img/star.png'
import Thunder from './img/thunder.png'
import Shield from './img/shield.png'
import Special from './img/thunderspecial.png'
import Defense from './img/shieldspecial.png'
import Speed from './img/arrow.png'

function Stats ({power,number,image}){

    switch (power) {
        case "hp":
          var image=Star;
          break;
        case "attack":
            var image=Thunder;
            break;
         case "defense":
            var image=Shield;
           break;
           case "special-attack":
            var image=Special;
           break;
           case "special-defense":
            var image=Defense
           break;
           case "speed":
            var image=Speed;
           break;
        
        
        default:
    
        break
      }
      
    return (
        
    <div className="container-stats">
            <p className="stats-name">{power}</p>
            <div className="image-stats">
            <img className="stats-icon" src={image} alt="k"></img>
            </div>
            <p>{number}</p>
    </div>);
}

export default Stats;