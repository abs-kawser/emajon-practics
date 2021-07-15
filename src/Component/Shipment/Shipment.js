// import React from 'react';

// const Shipment = () => {
//   return (
//     <div>
//       <h2>thish is shipment</h2>
//     </div>
//   );
// };

// export default Shipment;
















import React, { useContext } from 'react';
import './Shipment.css'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Shipment = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        console.log('form submitted' , data);
    }
    console.log(watch("example")); 
  
    return (
      
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        
        
        <input {...register("name", { required: true })} defaultValue={loggedInUser.name} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}

        <input {...register("email", { required: true })} defaultValue={loggedInUser.email} placeholder="Your Email" />
        {errors.email && <span className="error">Email is required</span>}

        <input {...register("address", { required: true })} defaultValue={loggedInUser.address} placeholder="Your Address"/>
        {errors.address && <span className="error">Address is required</span>}

        <input {...register("phone", { required: true })} defaultValue={loggedInUser.phone}placeholder="Your Phone" />
        {errors.phone && <span className="error">Phone Number is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;



