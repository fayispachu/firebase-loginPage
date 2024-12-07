import { useEffect, useState } from "react";
import { auth } from "../FireBase";
function Profile() {
  const [email, setEmail] = useState(true);
  const [name, setName] = useState(true);

  console.log(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setEmail(user.email);
      setName(user.displayName);
    });
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="flex justify-center py-24 ">
          <div className="bg-white/40 rounded w-[30%] h-[70vh] flex py-10 flex-col gap-5 items-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABgUHAQMEAv/EADUQAAIBAwIDBAgEBwAAAAAAAAABAgMEEQUhBhIxE0GBkTJRYWJxobHhFCNCwSIkQ1JTg/D/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3KAAAAAAAAAAPms5xg+ySc+7J56NS7lNdrTjCPf7fmeoAAAAAAAAAAAAAAAAAAAAAAA6q11b2+O3rU6eenPJIw/EGuOxf4e2SddrLk/0fckK1WpXqOpVnKcn1cnlgX15q9lZ0lUqVoz5vRjTeWzDz4tipfl2bcfeqb/QlvAAXFjxHY3WI1JOhN91R7PxMummk4tNPo0awMjper3OnzSjJzo99KT28PUBfA6LK7pXttGvQbcZdz6p+pneAAAAAAAAAAAAAADk4Dzh469wGuNQrO4vriq9+ao3/wB4YPOczTU5KXVNnAAAAAABT8F1nzXNu3thTj9GVBH8GpvUKz7lS38ywAAAAAAAAAAAAAAByupwdN8pOyuFD0nTljyAhdbp06ep1+wnGdOUuZcrzhvqjwDHtyAAAAAACu4Nt+S0rXLW9SXKn7F92UJJ8GzqO6rQc5OkqeeXOyeSsAAAAAAAAAAAAAAAAA1/rNhOyvq0Iwl2KeYyxth9NzwGxNVtvxmnV6CW7jmPxW6NeNY2fVAcAAAAZPh20d3qlLK/Lp/xz+C6fPAGd4PtHSs6lxNNOtLC+C+5nwkkkkkkumAAAAAAAAAAAAAAAAAAIHiCjChq9xGntFvmx6m9y+clFOUnhJbtmvNXuY3epXFaHoSm+X4LZAeMAAC34XtadHS4VY+nWfNJ/JIiC04TuoVdN7DK7SlJrHsff9QM2AAAAAAAAAAAAAA8l9qVpYr+YrRjLGVBbyfgT99xVUnmNlSVNf5JvL8gKqc404805RjH1t4MXe8QWFsmoVe2n/bT3+ZF3N1cXcua4rTqP3n+x0gZPU9autQzBvs6L/pxfX4+sxgAAAADsoVqtvUVSjNwnHpKLwzrAFRp3FKwqeoQ/wBsF9UZ62v7S6S/D3FObfcpb+RrkLZpptNd+QNnghLHXr6zxHte1pr9FTf5lBY8S2dxiNfNvP3nmPmBmwcRlGcVKElKL3TTymcgAAAPFrF8tPsZ1us+lNetntJPjK45rihbxe0Iub+L2An6tWpXqSq1Zuc5PLk+8+AAAAAAAAAAAAAAAAAAM9wvqkre5jaVZN0arxFP9MixNYxbjJSi8NPKNk2lZXFtRrR6TgpfIDtAAAgNer9vq1xJPKjLlXhsXlaoqNKdV9IRcvI1rObnOU31k234gfIAAAAAAAAAAAAAAAAAAFxwrX7bSIRzvSk4P6/uQ5TcF1v4rmg31SmvoBUgADwa/Jx0e6cXh8mPNkDgAAAAAAAAAAAAAAAAAAAABl+FJOOrwSe0oST8sgAWwAA//9k="
              alt=""
              className="w-40 h-40 rounded-full"
            />
            <h1 className="text-teal-600 text-2xl font-bold">{name}</h1>
            <h1 className="text-teal-600 text-2xl font-bold ">{email}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
