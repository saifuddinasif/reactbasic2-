


const addToDb = id => {

let shoppingCart ={}
/* get the shopping cart from local storage  */
const storedCart = localStorage.getItem('shopping-cart');

if(storedCart){
/* can not use the value , so have to parse the value  */
shoppingCart =JSON.parse(storedCart);


}

/* get the shopping cart  */



/* add quantity */
  const quantity = shoppingCart[id]
  if(quantity){
console.log(quantity);
    const newQuantity =quantity +1;

  shoppingCart[id] =newQuantity

  }else{

    shoppingCart[id] =1 
  }

  /* if u hover over setItem it shows value and key have to string . but shoppingCart is not string so we have to convert it to string  */
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    



} 


const removeFromDb = id => {

    
const storedCart =localStorage.getItem('shopping-cart');

if(storedCart){
    /* shopping cart is string can not use string so haveto parse it  */
   
    const shoppingCart = JSON.parse(storedCart);

    if(id in shoppingCart){

        console.log("first")
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    }
}

}


export {addToDb, removeFromDb}
