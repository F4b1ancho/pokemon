
import React from 'react';
import './Region.css'
function Region ({name,image}){

    switch (name) {
        case "kanto":
          var image="http://i.imgur.com/PjenVVj.jpg"
          break;
        case "johto":
            var image="https://areajugones.sport.es/wp-content/uploads/2020/09/Johto.jpg";
            break;
         case "hoenn":
            var image="https://i.pinimg.com/originals/e9/4a/1f/e94a1f2e5a88c47224308a51dbaa766b.png"
           break;
           case "sinnoh":
            var image="";
           break;
           case "unova":
            var image="https://areajugones.sport.es/wp-content/uploads/2020/12/teselia-pokemon-1080x609.jpg"
           break;
           case "kalos":
            var image="https://1.bp.blogspot.com/-FERI5BZ4qgo/W4B03w6bPQI/AAAAAAAADgo/HbMP_EJ8R5o6k42aENRN_H0CkB3LDgBlQCLcBGAs/s1600/pokemon_x_and_y_kalos_region_map_by_gturbo5-d65c2au%2B%25281%2529.jpg"
           break;
           case "alola":
            var image="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e5/latest/20170819025541/Alola_USUL.png/1200px-Alola_USUL.png"
           break;
           case "galar":
            var image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/02/Poke%CC%81mon%20Espada%20y%20Escudo%20Galar%20mapa.jpg"
           break;
        
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break
      }
    return (
        <div className="location-container">

<img className="location-pic"src={image} alt=""></img>
<div className="info-location">
            <h1>{name}</h1>
            </div>
        
        </div>)
}

export default Region;