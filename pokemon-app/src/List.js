
import React from 'react';

function List ({list}){
      console.log(list,"listaaa")
    return (
        
    <div className="fff">
       {list.map(item =>(
          console.log(item.name)
        
       ))}
    </div>);
}

export default List;