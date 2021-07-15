import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
console.log(props);
const {img, name, seller, price, stock,key}= props.product;//imporant 


  return (
    <div className="product">

      <div>
        <img src={img} alt="" />
      </div>

      <div >
        {/* name ta ka link bananor jonno dynamacli use kora hoisa */}
        <h4 className="Product-name"> <Link to={"/abs/"+key}>{name}</Link></h4>
        <br />
        <p><small>By:{seller}</small></p>
        <p>${price}</p>
        <br />

        <p><small>Only{stock} avalia</small> </p>
         
         {/* bytton ta na dakhanor jpnno props.showAddtoCard && ata korta hoisa */}

        { props.showAddToCard &&  <button 
        className="main-btn" 
         onClick={()=> props.handheleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add to card
        </button>} 


        {/* aikana akta arrow funcion extra deta hoisa karon props.product ta argument man hesaba count korba => na dela*/}
      </div>

    </div>
  );
};

export default Product;