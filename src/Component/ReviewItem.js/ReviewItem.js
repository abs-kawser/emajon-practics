import React from 'react';


const ReviewItem = (props) => {
     const {name,quantity,price,key}=props.product;
  return (
    <div>
         <h4 className="Product-name">This is : {name}</h4>
         <p>Quantity:{quantity}</p>
         <h5>Price:{price}</h5>
         <button className="main-btn"
         onClick={()=> props.removeProduct(key)}
         
         >Remove</button>
    </div>
  );
};

export default ReviewItem;