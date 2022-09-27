import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakedb/fakedb';
import './Cosmeti.css'
const Cosmeti = (props) => {
 
    const {name ,id , price } = props.cosmetic
  
   const addToCart = (id) => {

    addToDb(id)


   }

     const removeFromCart = id => {
         
      removeFromDb(id)

     }

    return (
        <div className='cosmeti'>
          <h2>name :{name}</h2>
          <p>price :{price}</p>  
          <p>id :{id}</p>  
          <button onClick={() => addToCart(id)}>ADD TO CART </button>
          <button onClick={( ) => removeFromCart(id)} >Remove</button>
        </div>
    );
};

export default Cosmeti;