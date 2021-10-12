import React from 'react'
import './Pokemon.css';
import Pokebola from './img/pokebola.png'
import Stats from './Stats'



function Pokemon({id, name, image, type, expirience,stats,abilities}){

   
       return( 
         
           <div className="conten">
              <h3 className="number-poke">#{id}</h3>
<div id="container" className="container">


<div className={type}>
   <img className="pokebola"src={Pokebola} alt=""></img>
    <img className="pokemon-img" src={image} alt={name}></img>
       </div>
      
<div className="info">
   
   <h1>{name}</h1>
   <div className="specs">
   <p className="type">{type}</p>
   <p className="experience">{expirience}</p>
   </div>
   <h2>Stats</h2>
   <div className="stats-container"> 
   
   <div className="stats">
   {stats.map(number =>(
      <Stats power={number.stat.name}
             number={number.base_stat}/>
   ))}
 </div>
 </div>
 <h2>Abilities</h2>
 <div className="abilities">
  {abilities.map(number =>(
     <p className="abilitie ">{number.ability.name}</p>
  ))}
 </div>

   </div>


   </div>
   </div>
  
   )

   
   
       
  
    


   
    
}

export default Pokemon;
