

import "./Cart.css"
const Cart = (props) => {
const cart =props.Cartdata;
  
 
  //const total =cart.reduce((total,prd)=> total+ prd.price,0);
  //another way
    let total=0;
    for (let i=0 ; i<cart.length; i++){
      const product=cart[i];
      total=total+product.price * product.quantity;
    }

    // shipping 
  let shipping=0;
  if (total>35) {
    shipping=4.99;
  }
 else if(total >15 ){
    shipping=4.99;
  }
   else if(total>0){
     shipping=12.99;
   }   
 const tax =Math.round(total%10).toFixed(2);
 const grandTotal =(total+shipping+Number(tax).toFixed(2));

  return (
    <div className="cart">
       
        <h1>Order Summery</h1>
        <p>Items Order:{cart.length}</p>
        <p>Product Price:{total}</p>
        <p><small>Shipping Cost:{shipping}</small></p>
        <p><small> TAX +VAT:{tax}</small></p>
        <p>Toatal Price:{grandTotal}</p>
         <br />
        {
          props.children
        }
                        
 
    </div>
  );
};

export default Cart;