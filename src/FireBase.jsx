import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
document.addEventListener("click", () => {
  var googleLogin = document.getElementById("google-for");

  googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        const user = result.user;
        console.log(user);

        window.location.href = "/profile";
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        const email = error.customData.email;
        console.log(email);

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  });
});
