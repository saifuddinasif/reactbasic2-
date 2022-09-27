/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cosmeti from '../Cosmeti/Cosmeti';
import { add, multiply } from '../utilities/Calculate';
import './Cosmetics.css'
const Cosmetics = () => {

    const first = 44;
    const second =4;
    const total = add(first,second)
    const multiplyi= multiply(first,second)


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

<>
           <div className='products'>
            <h1>Total: {total}</h1>
            <h1>MUltiply: {multiplyi}</h1>
            <h1>Cosmetics </h1>
          
        </div>

        <div className='cosmetics'>
        {
              cosmetics.map(cosmetic => <Cosmeti
                  key= {cosmetic.id}
                  cosmetic={cosmetic}></Cosmeti>)

              
          }
        </div>

        </>
    );
};

export default Cosmetics;