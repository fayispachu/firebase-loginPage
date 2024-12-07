import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCii-Wbh8mH_IdGZjalgr_ib5gs19jjII",
  authDomain: "react-session-5564c.firebaseapp.com",
  projectId: "react-session-5564c",
  storageBucket: "react-session-5564c.firebasestorage.app",
  messagingSenderId: "523035285676",
  appId: "1:523035285676:web:808df76b52ea03bd852709",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "it";
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

// Ensure the element with ID "google" is available
const googleLogin = document.getElementById("google");
if (googleLogin) {
  googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google Access Token
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        // Signed-in user info
        const user = result.user;
        console.log(user);

        // Redirect after login
        window.location.href = "../profile";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);

        const email = error.customData.email;
        console.log(email);

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  });
} else {
  console.error("The Google login button was not found.");
}

// for facebook
const facebook = document.getElementById("facebook");
if (facebook) {
  facebook.addEventListener("click", function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        window.location.href = "../profile";

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);

        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(credential);

        // ...
      });
  });
} else {
  console.error("The FaceBook login button was not found.");
}
