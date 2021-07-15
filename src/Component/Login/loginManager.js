import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0){ 
    firebase.initializeApp(firebaseConfig);
    }
}

// GOOGLE LOGIN
export const handleGoogleSignIn = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(googleProvider)
  .then(res => {
    const {displayName,photoURL,email} = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email:email,
      photo:photoURL,
      success:true
    }
    return signedInUser;
    // console.log(displayName,email,photoURL);
  })
  .catch(err => {
    console.log(err);
    console.log(err.message);
  })
}

// FACEBOOK LOGIN
export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
  
    return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // The signed-in user info.
      var user = result.user;
      user.success = true;
      return user;
      // console.log('fb user after sign in', user);
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // console.log(errorCode,errorMessage);
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
  
      // // ...
  
      console.log(error);
    });
   }



   export const handleSignOut = () => {
   return firebase.auth().signOut()
    .then(res=> {
      const signedOutUser ={
        isSignedIn: false,
        name: '',
        photo: '',
        email: ''
      }
      return signedOutUser;
    })
    .catch(err => {
     // console.log(err);
     // console.log(err.message);
   })
   //  console.log("sign out clicked");
  }



  export const createUserWithEmailAndPassword = (name,email,password) => {
   return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success= true;
      updateUserName(name);
      return newUserInfo;

    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
      

      // var errorCode = error.code;
      // var errorMessage = error.message;
      // console.log(errorCode,errorMessage);
    });
  }



  export const signInWithEmailAndPassword = (email, password) => {
   return  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      
      const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success= true;
        return newUserInfo;
        
        // console.log('sign in user info', res.user);      
  
    })
  
    .catch((error) => {
      const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
  
    });
  }

  const updateUserName =name =>{
    const user = firebase.auth().currentUser;
  
    user.updateProfile({
      displayName: name,
    })
    .then(() => {
      // Update successful
    console.log('user name update succesfully');
      // ...
    })
    .catch((error) => {
      // An error occurred
      console.log(error);
      // ...
  });  
  }


















































































//my code
// import  firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';


// export const initializeLoginFramework = () => {
//     if (firebase.apps.length ===0) {
// firebase.initializeApp(firebaseConfig);
//     }
// }

// //sign In with google
// export  const handleGoogleSignIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
  
// return firebase.auth().signInWithPopup(provider)
//       .then(res => {
//         const { email, displayName, photoURL } = res.user;
//         console.log(res);
//         const signedInUser = {
//           isSignIn: true,
//           name: displayName,
//           email: email,
//           success:true
//         }

//         return signedInUser;

//       })

//       .catch(err => {
//         console.log(err);
//         console.log(err.message);
//       })
//   }

//   //

// export  const handleFbSign = () => {
//     var fbprovider = new firebase.auth.FacebookAuthProvider();
//   return  firebase
//       .auth()
//       .signInWithPopup(fbprovider)
//       .then((result) => {

//         var credential = result.credential;

//         // The signed-in user info.
//         var user = result.user;
//         user.success=true;
//         return user;
//         console.log("abs jawser", user);
       
//         var accessToken = credential.accessToken;

//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;

//         // ...
//       });
//   }


//   //  signOut
//  export const handleSingnOut = () => {
//   return  firebase.auth().signOut()
//       .then(res => {
//         const signOutUser = {
//           isSignIn: false,
//           name: '',
//           email: '',
//           photo: '',
//           error: '',
//           success: false
//         }
//         return signOutUser;
//       }).catch((error) => {

//       });

//   }

//   //  
//  export const createUserWithEmailAndPassword = (name,email,password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(res => {
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       upDateUserName(name);
//       return newUserInfo;
//     })
//     .catch(error => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });

//  }

  // // Signed in
//  export const signInWithEmailAndPassword = (email, password) => {
//    return firebase.auth().signInWithEmailAndPassword(email,password)
//     .then(res => {
//      
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       return newUserInfo;
     
//     })
//     .catch((error) => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });
//  }

//  //update user name
//  const upDateUserName = name => {
//     const user = firebase.auth().currentUser;
//     user.updateProfile({
//       displayName: name

//     }).then(() => {
//       // Update successful
//       // ...
//     }).catch((error) => {
//       // An error occurred
//       // ...
//     });

//   }