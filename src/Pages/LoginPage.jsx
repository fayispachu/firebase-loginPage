import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase";
import { useState } from "react";
import google from "../assets/google.png";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="flex justify-center py-24 ">
          <div className="bg-white/40 rounded w-[30%] h-[70vh] flex py-10 flex-col gap-5 items-center">
            <h1 className="text-teal-600 text-4xl font-bold pb-7"> Welcome</h1>

            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded w-72"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded w-72"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="p-2 rounded bg-teal-600 w-72 "
              onClick={handleLogin}
            >
              Login
            </button>
            <span className="flex justify-center gap-3 flex-col items-center">
              <h1>or</h1>
              <button
                id="google-for"
                className="bg-white w-72 rounded-full py-4 h-10 flex justify-center gap-3  items-center"
              >
                <img src={google} className="w-7" alt="" />
                <h1 className="text-l font-bold text-slate-500">
                  Sign in with Google
                </h1>{" "}
              </button>{" "}
            </span>

            <Link
              to={"/register"}
              className="py-2 px-3 hover:bg-slate-400 rounded"
            >
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
