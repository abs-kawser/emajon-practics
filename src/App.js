// import React, { createContext, useState } from 'react';
// import './App.css';
// import Header from './component/Header/Header';
// import Shop from './component/Shop/Shop';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Review from "./component/Review/Review";
// import Inventory from './component/Inventory/Inventory';
// import NotFound from './component/NotFound/NotFound';
// import ProductDetail from './component/ProductDetail/ProductDetail';
// import Shipment from './component/Shipment/Shipment';
// import Login from './component/Login/Login';
// import PrivateRoute from './component/PrivateRoute/PrivateRoute';


// export const UserContext= createContext();



// function App() {

//   const [loggedInUser, setLoggedInUser] = useState({});
  
//   return (
//     <UserContext.Provider value = {[loggedInUser,setLoggedInUser]} >

//       <h3>email: {loggedInUser.email}</h3>
      
//       <Router>
//        <Header> </Header>
//         <Switch>
//           <Route path="/shop">
//               <Shop></Shop>
//           </Route>

//           <Route path="/review">
//             <Review></Review>
//           </Route>

//           <PrivateRoute path="/inventory">
//             <Inventory></Inventory>
//           </PrivateRoute>

//           <Route path="/login">
//             <Login></Login>
//           </Route>

//           <PrivateRoute path="/shipment">
//             <Shipment></Shipment>
//           </PrivateRoute>

//           <Route exact path="/">
//             <Shop></Shop>
//           </Route>

//           <Route path={"/product/:productKey"}>
//               <ProductDetail></ProductDetail>
//           </Route>

//           <Route path="*">
//             <NotFound></NotFound>
//           </Route>
//         </Switch>
//       </Router>


//     </UserContext.Provider>
//   );
// }

// export default App;






























 import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Review from "./Component/Review/Review";
import Inventory from "./Component/Inventory/Inventory";
import NotFound from "./Component/NotFound/NotFound";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Shipment from './Component/Shipment/Shipment';
import Login from "./Component/Login/Login";

import { createContext } from "react";
import React, { useState } from 'react'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();



function App() {
 const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
    <h3>email:{loggedInUser.email}</h3>
     

      <Router>
      <Header></Header>

        <Switch>
          {/* first Route for shop*/}
          <Route path="/shop">
            <Shop></Shop>
          </Route>

          {/* Second Route for shop*/}
          <Route path="/review">
            <Review></Review>
          </Route>

          {/*third Route for Inventroy */}
          <PrivateRoute  path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
     
           {/* module 42 a  */}
           <Router path="/login">
           <Login></Login>
           </Router>

           <PrivateRoute path="/shipment">
           <Shipment></Shipment>
          </PrivateRoute>



          {/* forth Route for  jokhon kisu milba na tokhon main componet ta dakhaba*/}
          <Route exact path="/">
          <Shop></Shop>
          </Route>
         
        {/* use for link ai nam gula : dawya hoi daynamic korar jonno*/}
        <Route path="/abs/:productKey">
            <ProductDetail></ProductDetail>
        </Route>


          {/* fifth for 404  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </UserContext.Provider>
  );
}
export default App;
