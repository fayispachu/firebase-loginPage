import { useEffect, useState } from "react";
import { auth } from "../FireBase";
function Profile() {
  const [email, setEmail] = useState(true);
  const [name, setName] = useState(true);
  const [profile, setProfile] = useState("");

  console.log(auth.currentUser);

  console.log(profile);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setEmail(user.email);
      setName(user.displayName);
      setProfile(user.photoURL);
    });
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="flex justify-center py-24 ">
          <div className="bg-white/40 rounded w-[30%] h-[70vh] flex py-10 flex-col gap-5 items-center">
            <img src={profile} alt="" className="w-40 h-40 rounded-full" />
            <h1 className="text-teal-600 text-2xl font-bold">{name}</h1>
            <h1 className="text-teal-600 text-2xl font-bold ">{email}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
