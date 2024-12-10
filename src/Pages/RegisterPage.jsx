import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../FireBase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../FireBase";

function RegisterPage() {
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        setDoc(doc(db, "users", "id"), {
          name: "name",
          state: "CA",
          country: "USA",
        });
        // ...
        console.log(user, "Successfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        // ..
      });
  };
  return (
    <>
      <div className="w-full h-full bg-slate-500">
        <div className="flex justify-center py-24 ">
          <form className="bg-white/40 rounded w-[30%] h-[70vh] flex py-5 flex-col gap-5 items-center">
            <h1 className="text-teal-600 text-3xl pb-6 font-bold ">
              {" "}
              Register your Email
            </h1>
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded w-72"
              required
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="Confrm Password"
              className="p-2 rounded w-72"
              required
              onChange={(e) => setConfirm(e.target.value)}
            />
            <button
              className="p-2 rounded bg-teal-600 w-72 "
              onClick={handleRegister}
            >
              Register
            </button>
            <div className="flex flex-row">
              {" "}
              <Link to={"/"} className="py-2 px-3 hover:bg-slate-400 rounded">
                Login
              </Link>
              <p>or</p>
              <Link
                to={"/already "}
                className="py-2 px-3 hover:bg-slate-400 rounded"
              >
                Already heave an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
