import React from 'react';
import { addToDb } from '../utilities/fakedb/fakedb';
import './Cosmeti.css'
const Cosmeti = (props) => {
 
    const {name ,id , price } = props.cosmetic
  
   const addToCart = (id) => {

    addToDb(id)
    

   }

    return (
        <div className='cosmeti'>
          <h2>name :{name}</h2>
          <p>price :{price}</p>  
          <p>id :{id}</p>  
          <button onClick={() => addToCart(id)}>ADD TO CART </button>
        </div>
    );
};

export default Cosmeti;