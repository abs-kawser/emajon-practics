import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';


function Login() {

  const [newUser, setNewUser] = useState(false);
  const [user,setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success:false
  })
initializeLoginFramework();

 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 const history = useHistory();
 const location = useLocation();
 let { from } = location.state || { from: { pathname: "/" } };



// ............42 module er kaj..........

const googleSignIn = () => {
  handleGoogleSignIn()
  .then(res => {
    handleResponse(res, true);
  })
}

const fbSignIn = () => {
  handleFbSignIn()
  .then(res => {
    handleResponse(res, true);
  })
}


 const signOut = () => {
  handleSignOut()
  .then(res => {
    handleResponse(res, false);
    
  })
}


const handleResponse = (res, redirect) => {
  setUser(res);
  setLoggedInUser(res);
  if(redirect){
    history.replace(from);
  }
}



 const handleBlur=(e) => {
  
  //  console.log(e.target.name,e.target.value);

  let isFieldValid = true;

  // Email Validatation
  
   if (e.target.name === 'email') {
    //  akhane email thik moto boshano hoice kina seta cheack kora hocce
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isEmailValid);
     
   }
    if (e.target.name === 'password') {
  // aikhane password 6 digit er beshi and number use kora hoice kina seta check kora hocce..
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber = /\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;
    
     
   }
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
 }



 const handleSubmit = (e) => {
   console.log(user.email, user.password);
   if(newUser && user.email && user.password){
     createUserWithEmailAndPassword(user.name,user.email,user.password)
     .then(res => {
       console.log(res);

      handleResponse(res, true);
     })
    
  };
  
  if (!newUser && user.email && user.password) {

     signInWithEmailAndPassword(user.email,user.password)
     .then(res => {
      handleResponse(res, true);
   })
    
  }


   e.preventDefault();
 }




  return (


    <div style={{textAlign:'center'}} >

      {
        user.isSignedIn ?  <button onClick={signOut}>sign out</button> :
        <button onClick={googleSignIn}>sign in</button>
      }
    <br /> 
      <button onClick={fbSignIn}>Sign in using Facebook</button>

      {/* {
        user.isSignedIn && <div>
        <p> welcome, {user.name} </p> 
        <p>Your Email: {user.email}</p>
        <img src={user.photo} alt="" />


        </div>
      } */}
{/* 42 module er kaj  */}

{/* aita email and password er jonno form make kora hoice */}
      <h1>Our Own Authentication</h1>
      {/* <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> */}
      <input type="checkbox" onChange={()=> setNewUser(!newUser)}  name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>
      
      <form onSubmit={handleSubmit}>
        { newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="Enter Your name" required></input>}
        <br />
        <input type="text" onBlur={handleBlur} name="email" placeholder="Enter Your Email" required></input>
        <br />
        <input type="password" onBlur={handleBlur} placeholder="Enter Your Password" name="password" id="" required></input>
        <br />
        <input type="submit" value= {newUser ? 'Sign Up' : 'Sign In'}></input>
     </form>

     <p style={{color: 'red'}}>{user.error}</p>
     {
       user.success && <p style={{color: 'green'}}>user {newUser ? 'created' :'Logged In' } successfully</p>
     }

    </div>
  );
}

export default Login;


















































































//my code
// import React from 'react';
// import { useContext, useState } from "react";
// import { UserContext } from './../../App';
// import { useHistory, useLocation } from 'react-router-dom';
// import { handleFbSign, handleGoogleSignIn, handleSingnOut, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';


// function Login() {
//   // sign in er jonno state declare kora hoice

//   const [newUser, setNewUser] = useState(false);

//   // sign up er jonno state declare kora hoice
//   const [user, setUser] = useState({
//     // false kan delo
//     isSignIn: false,
//     name: '',
//     email: '',
//     password: '',
//     photo: ''
//   });

// initializeLoginFramework();
// const [loggedInUser,setLoggedInUser]=useContext(UserContext);
// const history =useHistory();
// const location =useLocation();
// let { from } = location.state || { from: { pathname: "/" } };

// const GoogleSignIn =()=>{
//   handleGoogleSignIn()
//   .then (res => {
//      setUser(res);
//      setLoggedInUser(res);
//   })
// }
  
// const SingnOut= ()=>{
//  handleSingnOut()
//  .then (res => {
//   setUser(res);
//   setLoggedInUser(res);
// })
// }

//  const FbSignIn= () => {
//    handleFbSign()
//    .then (res => {
//     setUser(res);
//     setLoggedInUser(res);
//   })
//  }
  

  

//   // module 42 start
//    const handleBlur = (e) => {
//     //console.log(e.target.name, e.target.value );
//     let isFieldValid = true;
//     //step 3
//     if (e.target.name === 'email') {
//       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

//     }
//     if (e.target.name === 'password') {
//       const isPasswordValid = e.target.value.length > 6;
//       const passwordHasNumber = /\d{1}/.test(e.target.value);
//       isFieldValid = isPasswordValid && passwordHasNumber;
//     }


//     if (isFieldValid) {
//       const newUserInfo = { ...user };
//       newUserInfo[e.target.name] = e.target.value;
//       setUser(newUserInfo)
//     }

//   }


//   const handleSubmit = (e) => {
//     console.log(user.email, user.password);
//     if (newUser && user.email && user.password) {
//       //  firebase thaka user password niya-aslam  step:5 start
//        createUserWithEmailAndPassword(user.email,user.password,user.name)
//        .then (res => {
//         setUser(res);
//         setLoggedInUser(res);
//         history.replace(from);
//       })
//     }
//     //step:5 end
//     // newUser na hole   thkle taile sign In hobe 6
//     if (!newUser && user.email && user.password) {
//       signInWithEmailAndPassword(user.email,user.password)
//       .then (res => {
//         setUser(res);
//         setLoggedInUser(res);
//         history.replace(from);
//       })

//     }
//     e.preventDefault();
//   }

//   //step 7
  
//   // module 42  and 

//   return (
//     <div  style={{textAlign: 'center'}}>
//       {
//         user.isSignIn ? <button onClick={SingnOut}>Sign out</button> :
//           <button onClick={GoogleSignIn}>Sign In</button>

//       }

//       <br />


//       <button onClick={FbSignIn}>Sign in useing Facebook</button>


//       {
//         user.isSignIn && <div>
//           <p> Welcome {user.name} </p>
//           <p>Your mail {user.email}</p>
//         </div>
//       }
//       {/*moudle 42 start*/}
//       {/* <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Password: {user.password}</p>*/}


//       <h1>Our own Authentication</h1>
//       {/* step 6 */}
//       <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
//       <label htmlFor="newUser">New User Sign Up</label>


//       <form onSubmit={handleSubmit}>
//         {newUser && <input name="name" onBlur={handleBlur} type="text" placeholder="Your name" />} 
//         <br />
//         <input type="text" onBlur={handleBlur} name="email" placeholder="Your Email adress" required />
//         <br />
//         <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Your Password" required />
//         <br />
//         <input type="submit" value={newUser ? 'Sign up' : 'Sign In'} />
//       </form>


//       <p style={{ color: 'red' }}>{user.error}</p>
//       {
//         user.success && <p style={{ color: 'green' }}>User {newUser ? "Created" : 'Logged In'} siccessfully</p>
//       }
//     </div>
//   );
// }

// export default Login;
