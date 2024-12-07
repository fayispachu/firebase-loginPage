import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase";
import { useState } from "react";

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
          <form className="bg-white/40 rounded w-[30%] h-[70vh] flex py-10 flex-col gap-5 items-center">
            <h1 className="text-teal-600 text-4xl font-bold pb-16"> Welcome</h1>

            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded w-72"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
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

            <Link
              to={"/register"}
              className="py-2 px-3 hover:bg-slate-400 rounded"
            >
              Create a new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
