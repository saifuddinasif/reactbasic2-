import React from 'react';

const Cosmeti = (props) => {
 
    const {name ,id , price } = props.cosmetic
    return (
        <div>
          <h2>name :{name}</h2>
          <p>price :{price}</p>  
          <p>id :{id}</p>  
        </div>
    );
};

export default Cosmeti;