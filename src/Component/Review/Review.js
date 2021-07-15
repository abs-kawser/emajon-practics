
import React, { useEffect, useState } from 'react'
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem.js/ReviewItem';
import fakeData from './../../fakeData/index';
import funnyImage from'../../images/giphy.gif'
import { useHistory } from 'react-router-dom';






const Review = () => {
  const [cart, Setcart] = useState([]);
   const [orderPlaced,setOrderPlaced] = useState(false);
  //  module 42
   
  // place order
  const history =useHistory()
  const handleProceedCheckOut =()=>{
   history.push('/shipment')



  }

//  btn remove korar jonno
    const removeProduct =(productKey) =>{
      console.log('clicked it abs',productKey);
  const newCart =cart.filter(pd => pd.key !== productKey)
   Setcart(newCart);
   removeFromDatabaseCart(productKey)
    }


  useEffect(() => {
    //cart data
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key]//o
      return product;

    });
    Setcart(cartProducts);
  },[])

let Thankyou; 
if (orderPlaced){
  Thankyou = <img src={funnyImage} alt="" />
}  

  return (
    <div className="twin-Container"> 
      
    <div className="product-Container"> 
    {
      cart.map(pd => <ReviewItem
          key={pd.key}
          removeProduct={removeProduct}
          product={pd} ></ReviewItem>)
          
      }
  
  {/*happy img dakhanor jonno kora hoisa  */}
   {Thankyou }
  

    </div>
        <div className="cart-Container">
             <Cart Cartdata={cart}>
    <button onClick={handleProceedCheckOut} className="main-btn">Proceed Checkout</button>
               </Cart>   
        </div> 
      
    </div>

  );
};

export default Review;