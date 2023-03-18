import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const empty = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [singupInputs, setSignUpInputs] = useState(empty);
  const handleClick = (event) => {
    const { name, value } = event.target;
    setSignUpInputs({ ...singupInputs, [name]: value });
  };
  // console.log(singupInputs);
  const userDetails = async () => {
    if (
      singupInputs.firstname == "" ||
      singupInputs.lastname == "" ||
      singupInputs.email == "" ||
      singupInputs.password == ""
    ) {
      alert("please enter data in all fields");
    } else {
      let record = await fetch("http://127.0.0.1:4000/post/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(singupInputs),
      });
      record= await record.json();
      if (record =="email already exists") {
        alert("email already exists!"); 
      } else {
        setSignUpInputs(empty);
        alert("Signed Up Successfully!");
      }
    }
  };
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom,rgba(20, 40,60, 0.4), rgba(20, 40,60, 0.7)), url(./loginbg.png)",
        }}
      >
        <div className="sm:py-8 py-3 border-b-2 border-red-800 h-1/5 flex justify-center items-center">
          <Link to={"/"}><img src="./logo.png" alt="logo" className="w-36 bg-white" style={{padding:"10px", border: "1px solid aliceblue", borderRadius: "20px"}}  /></Link>
        </div>
        <div className="w-screen h-4/5 flex items-center justify-center">
          <div className="bg-white p-5 rounded-2xl items-center justify-center flex-col flex sm:w-1/2 w-2/3 sm:overflow-none">
            <h2 className="sm:text-4xl text-2xl font-bold">TechLift Tracking Project</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>First Name</label>
              <input
                class="border border-red-800 w-full"
                type="text"
                name="firstname"
                placeholder="Enter your First Name"
                required
                onChange={handleClick}
                value={singupInputs.firstname}
              />
              <label>Last Name</label>
              <input
                class="border border-red-800 w-full"
                type="text"
                name="lastname"
                placeholder="Enter your Last Name"
                required
                onChange={handleClick}
                value={singupInputs.lastname}
              />
              <label>Email</label>
              <input
                class="border border-red-800 w-full"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                onChange={handleClick}
                value={singupInputs.email}
              />
              <label>Password</label>
              <input
                class="border border-red-800 w-full"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={handleClick}
                value={singupInputs.password}
              />
              <div className="flex justify-center mt-3">
                <button
                  className="bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black"
                  onClick={userDetails}
                >
                  SIGN UP
                </button>
              </div>
              <div>
                <p className="text-sm">
                  Already have an account?
                  <Link
                    to="/login"
                    className="font-bold ml-3 border-b-2 border-red-800 text-red-800"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>

            {/* <h2 className="text-4xl font-bold">TechLift Tracking Project</h2>
          <form className="mt-3" onSubmit={(e) => e.preventDefault()}>
          <label>First Name</label>
              <input
                class="border border-red-800 p-2 w-full"
                type="text"
                name="firstname"
                placeholder="Enter your First Name"
                required
                onChange={handleClick}
                value={singupInputs.firstname}
              />
              <div className="mt-3">
              <label>Last Name</label>
              <input
                class="border border-red-800 p-2 w-full"
                type="text"
                name="lastname"
                placeholder="Enter your Last Name"
                required
                onChange={handleClick}
                value={singupInputs.lastname}
              />
              </div>
              <div className="mt-3"></div>
              <label>Email</label>
              <input
                class="border border-red-800 p-2 w-full"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                onChange={handleClick}
                value={singupInputs.email}
              />
              <div className="mt-3">
              <label>Password</label>
              <input
                class="border border-red-800 p-2 w-full"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={handleClick}
                value={singupInputs.password}    
              />
              </div>
          </form>
          <div className="flex justify-center mt-3">
          <button className='bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black' onClick={userDetails}>SIGN UP</button>
          </div>
          <div className='flex'>
        <div>
            <p>already have an account?<Link to="/login" className="font-bold ml-3 border-b-2 border-red-800 text-red-800">Login</Link></p> 
          </div>
          <div>
          <Link to="/" className="font-bold ml-3 border-b-2 border-red-800 text-red-800">Home</Link>
          </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
