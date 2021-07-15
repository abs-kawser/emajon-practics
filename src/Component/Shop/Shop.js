import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import fakeData from './../../fakeData/index';
import './Shop.css';
import { addToDatabaseCart,getDatabaseCart } from '../../utilities/databaseManager'
import { Link } from 'react-router-dom';


const Shop = () => {
  // usestate product er jonno 
  const first10 = fakeData.slice(0, 11);
  const [products, setProduct] = useState(first10);
  // usestate cart er jonno 
  const [cart, setCart] = useState([]);
  // shop page a gala jata product price dakhai ajonno useEfect kora baki kaj kora hoisa 
    useEffect(() => { 
   const savedCart = getDatabaseCart();
   const productKeys=Object.keys(savedCart);
     const previousCart =productKeys.map(existingKey =>{ 
      const product =fakeData.find(pd => pd.key===existingKey)
        product.quantity=savedCart[existingKey];
       return product;    
        
     })
      console.log(previousCart);
      setCart(previousCart)
    },[])


  //  button er jonno eventhandlar add korta hba 
  // state  jaikana thaka handalar oikana thakla valo

  const handheleAddProduct = (product) => {
    const toBeAddedKey =product.key;
    const sameProduct = cart.find(pd => pd.key ===  toBeAddedKey);
    let count =1;
    let newCart;
    if(sameProduct){
       count = sameProduct.quantity+1;
      sameProduct.quantity=count;
      const others=cart.filter(pd => pd.key !== toBeAddedKey)   //plb
      newCart=[...others,sameProduct];
    }
    else{
       product.quantity=1;
       newCart=[...cart,product]
    }
    // const count = sameProduct.length;
     // console.log('its click',product);
     // atai plb assa 
    // const newCart = [...cart, product];
    setCart(newCart);
    addToDatabaseCart(product.key, count);

  }

  return (
    <div className="twin-Container">

      <div className="product-Container">
        {/* aikhana product ata paramitter*/}

        {/* <Product> ai ta buja suna deta hba karon kon compunent kothai show korta hba*/}
        {
          products.map(pd => <Product showAddToCard={true}
            key={pd.key}
            handheleAddProduct={handheleAddProduct}
            product={pd}> </Product>)//ai line plb

        }
      </div>


      {/* cart part  */}
      <div className="cart-Container">

        <Cart Cartdata={cart}> 
        {/* children */}
            <Link to="/review">
                  <button className="main-btn">
                    Review Order 
                    </button>
                  </Link>
        </Cart>

      </div>


    </div>
  );
};

export default Shop;