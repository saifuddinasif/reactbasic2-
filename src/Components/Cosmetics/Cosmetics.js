import React, { useEffect, useState } from 'react';
import Cosmeti from '../Cosmeti/Cosmeti';

const Cosmetics = () => {

const [cosmetics, setCosmetics] = useState([]);


useEffect (() => {

    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))

},[])

//  const cosmetics = [
  
//       {id:1, name:'ALTA', price:100 },
//       {id:2, name:'ALTA', price:200 },

//       {id:3, name:'ALTA', price:300 },

//       {id:4, name:'ALTA', price:400 } 


//  ]
    return (
        <div>
            <h1>Cosmetics </h1>
            {
                cosmetics.map(cosmetic => <Cosmeti
                    key= {cosmetic.id}
                    cosmetic={cosmetic}></Cosmeti>)

                
            }
        </div>
    );
};

export default Cosmetics;