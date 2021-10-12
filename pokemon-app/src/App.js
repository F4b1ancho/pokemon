
import './App.css';
import Region from './Region'
import React,{ useEffect, useState } from 'react'
 import Pokemon from './Pokemon'
 
 import Sidebar from './Sidebar'

 import IconPikachu from './img/pikachu.png'
 import Map from './img/map.png'
 import Pokeball from './img/pokeball.png'

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  let [allPokemons, setAllPokemons] = useState([])
  const [allLocations, setAllLocations] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=200')
  const [location, setlocation] = useState('https://pokeapi.co/api/v2/region/')

 

  const getAllPokemons = async() =>{
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    

    function createPokemonList (result) {
      result.forEach( async (pokemon)=>{
        const res = await fetch(`${pokemon.url}`)
        const data = await res.json();
        
        setAllPokemons(currentList  => [...currentList, data])
        allPokemons.push(data)
      
            }) 
           
        
      
      
    }
    createPokemonList(data.results)
    await console.log(allPokemons,'carebolaaas')
   
    allPokemons=allPokemons.sort((a, b) =>{
      return (a.id > b.id) ? 1 : -1;
    })

  }
  


  const getAllLocations = async() =>{
    const ress = await fetch(location)
    const datas = await ress.json()
    console.log(datas,"locations")
    setlocation(datas.next)
    
    function createLocationList (result) {
      result.forEach( async (location) => {
        const ress = await fetch(`${location.url}`)
        const datas = await ress.json();
        
        setAllLocations(currentLis => [...currentLis, datas])
        allLocations.push(datas)
      
            }) 

  }
  createLocationList(datas.results)
  await console.log(allLocations,'carebolaaas')
  }
  const getPokemonInfo = async() =>{
    const ress = await fetch(`https://pokeapi.co/api/v2/`)
    const datas = await ress.json()
    console.log(datas,"reeeeddd")
    setlocation(datas.next)
    


  }

  useEffect(() =>{
getAllPokemons()
getAllLocations()
getPokemonInfo()

  },[])
 
 



  
  return (
    <div className="app">
       <BrowserRouter>
      <div className="header">
    
        <div className="texture">
        <Link  to={"/"} exact>
        <img className="logo" src={Pokeball} alt="" ></img>
        </Link>
        <h1 className="title">Pokedex</h1>
       
       <div className="buttons">
        <Link className="button" to={"/pokemon"}>
     <Sidebar image={IconPikachu} name={"Pokemons"} alt="IconPikachu"/>
     </Link>
     <Link className="button" to={"/regions"}>
     <Sidebar image={Map} name={"Regions"} alt="IconMap"/>
     </Link>
     </div>
    
  
        </div>
     
     
     </div>
   
     <div className="body">
  
     <Switch>
       <Route path="/" exact >
 <div className="empty">
   <h2>Welcome to the Pokedex</h2>
 </div>
       </Route>
     <Route path={"/pokemon"}>
  <div className="table">
  
  {
    
    allPokemons.map(pokemon =>(    
  
      <Pokemon id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              expirience={pokemon.base_experience}
              stats={pokemon.stats}
              abilities={pokemon.abilities}
            
             />
      
           
    ))}
    </div>
    </Route>
  
   <Route path={"/regions"}>
   <div className="regions">
   {allLocations.map(location =>(
     <Region name={location.name}/>
   ))}
   </div>
   </Route>
  
    </Switch>
   
    
    </div>
    </BrowserRouter>
   
     </div>
  
  );
}

export default App;
