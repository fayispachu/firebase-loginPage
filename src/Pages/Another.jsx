import google from "../assets/google.png";

function Another() {
  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="flex justify-center py-24 ">
          <div className="bg-white/40 rounded w-[30%] h-[70vh] flex py-10 flex-col gap-5 items-center">
            <button
              id="google-for"
              className="bg-white w-[90%] rounded-full h-10 flex justify-center gap-3  items-center"
            >
              <img src={google} className="w-7" alt="" />
              <h1 className="text-l font-bold text-slate-500">
                Sign in with Google
              </h1>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Another;
