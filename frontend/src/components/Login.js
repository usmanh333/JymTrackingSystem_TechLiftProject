import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const empty = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState(empty);
  const handleClick = (event) => {
    const { name, value } = event.target;
    setLoginInputs({ ...loginInputs, [name]: value });
  };
  const loginBtn = async () => {
    if (loginInputs.email == "" || loginInputs.password == "") {
      alert("please enter data in both fields");
    } else {
      let record = await fetch("http://127.0.0.1:4000/post/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInputs),
      });
      record = await record.json();
      if (record.message == "login successfully") {
        sessionStorage.setItem("user", record.userDetails._id);
        sessionStorage.setItem("useremail", record.userDetails.email);
        navigate("/dashboard/DashboardActivitiesRecord");
        setLoginInputs(empty);
      } else {
        alert("Email or password is Wrong!");
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
          <Link to={'/'}><img src="./logo.png" alt="logo" className="w-36 bg-white" style={{padding:"10px", border: "1px solid aliceblue", borderRadius: "20px"}}  /></Link>
        </div>
        <div className="flex justify-center items-center w-screen h-4/5">
          <div className="bg-white py-5 rounded-2xl items-center justify-center flex-col flex sm:w-1/2 w-2/3 sm:m-0 m-5">
            <h2 className="sm:text-4xl text-xl font-bold">TechLift Tracking Project</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Email</label>
              <input
                class="border border-red-800 p-2 w-full"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                onChange={handleClick}
                value={loginInputs.email}
              />
              <div className="sm:mt-3 mt-1">
                <label>Password</label>
                <input
                  class="border border-red-800 p-2 w-full"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  onChange={handleClick}
                  value={loginInputs.password}
                />
              </div>
              <div className="sm:mt-3 mt-1 flex justify-center">
                <button
                  className="bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black"
                  onClick={loginBtn}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-col items-center justify-between mt-2">
              <p>Not a memeber yet? </p>
              <div>
                <Link
                  to="/signup"
                  className="font-bold ml-3 border-b-2 border-red-800 text-red-800"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
