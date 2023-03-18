import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        className=" h-screen bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom,rgba(20, 40,60, 0.4), rgba(20, 40,60, 0.7)), url(./bgImage.jpg)",
        }}
      >
        <div className=" sm:py-8 py-4 border-b-2 border-red-800 mb-2 sm:mb-0">
          <nav className=" sm:flex-row flex flex-col container mx-auto items-center justify-between">
            <Link to={"/"}><img src="./logo.png" alt="logo" className="w-36 bg-white" style={{padding:"10px", border: "1px solid aliceblue", borderRadius: "20px"}} /></Link>
            <div className="space-x-5">
              <Link to="/signup">
                {" "}
                <button className="bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black">
                  SIGN UP
                </button>
              </Link>
              <Link to="/login">
                {" "}
                <button className="bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black">
                  LOGIN
                </button>
              </Link>
            </div>
          </nav>
        </div>
        <div className=" sm:h-3/5 pt-0 sm:pt-16 h-3/6 flex flex-col items-center justify-center">
          <div className="space-y-3 bg-white p-5 rounded-2xl items-center justify-center flex-col flex sm:w-1/2 w-2/3 sm:m-0 m-5">
            <h2 className="font-bold sm:text-4xl text-2xl">TechLift Tracking Project</h2>
            <h2 className="font-bold sm:text-xl text-lg">
              Refining Your Fitness Levels
            </h2>
            <p className="mt-3 sm:text-sm text-xs text-center">
              Welcome to our TechLift Tracking Project website! We are dedicated to providing
              you with the best possible workout experience. Our goal is to help
              you reach your fitness goals and improve your overall health and
              wellness.
            </p>
            <div className="sm:space-x-4 mt-4 space-x-0">
              <Link to="/signup">
                <button className="bg-red-800 sm:p-3 p-1 rounded-full text-white sm:font-bold hover:bg-black sm:text-base text-sm">
                  SIGN UP
                </button>
              </Link>
              <Link to="/login">
                {" "}
                <button className="bg-red-800 sm:p-3 p-1 rounded-full text-white sm:font-bold sm:text-base text-sm hover:bg-black">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-full">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">
            Our Story
          </h2>
          <p className="mt-4 text-lg text-center">
            We started our fitness tracking app with the goal of helping people
            achieve their health and fitness goals.We are a team of fitness
            enthusiasts and tech experts who have come together to create a gym
            tracking app that helps users achieve their fitness goals.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="./swimming.jpg"
              alt="swimming"
              className="h-1/2 w-full object-cover"
            />
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Swimming</h3>
              <p className="text-gray-700 text-center">
                Swimming is a popular water sport and recreational activity that
                involves moving through water by using the arms and legs. It is
                a low-impact exercise that provides a full-body workout and
                offers numerous physical and mental health benefits.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="./running.jpg"
              alt="Running"
              className="h-1/2 w-full object-cover"
            />
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Running</h3>
              <p className="text-gray-700 text-center">
                Running is a weight-bearing activity that can strengthen bones,
                muscles, and joints, improve cardiovascular fitness, and help
                with weight management. Running also releases endorphins, which
                can reduce stress and improve mood.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="bicycleride.jpg"
              alt="Bicycle Ride"
              className="h-1/2 w-full object-cover"
            />
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Bicycle Ride</h3>
              <p className="text-gray-700 text-center">
                cycling is an excellent form of exercise that can improve
                cardiovascular health, strengthen muscles and bones, and boost
                overall fitness levels. Bicycles are also eco-friendly,
                producing no harmful emissions and promoting sustainable
                transportation.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="./hiking.jpg"
              alt="Hiking"
              className="h-1/2 w-full object-cover"
            />
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Hiking</h3>
              <p className="text-gray-700 text-center">
                Hiking provides numerous benefits for physical and mental
                health. It is a weight-bearing exercise that can strengthen
                bones and muscles, improve cardiovascular health, and help with
                weight management. Hiking also allows you to connect with
                nature.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
        <div className="p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Track Your Fitness Goals</h2>
          <p className="mb-4 text-center">
            Our app makes it easy to set and achieve your fitness goals. With
            features like running, swimming, bicycle ride, and hiking, you can
            stay on top of your fitness journey and make meaningful progress
            towards your goals.
          </p>
          <Link to="/login">
            {" "}
            <button className="bg-red-800 p-3 rounded-full text-white sm:font-bold sm:text-base text-sm hover:bg-black">
              Get Started
            </button>
          </Link>
        </div>
        <div className="p-4">
          <img src="./trackingimage.jpg" alt="Fitness tracking app" />
        </div>
      </div>
      <div className="relative bg-cover bg-top h-screen bg-no-repeat" style={{backgroundImage: " linear-gradient(to bottom,rgba(20, 40,60, 0.4), rgba(20, 40,60, 0.7)), url(./herosection.jpg)"}}>
      <div className="flex flex-col sm:w-2/5 w-4/5 h-full justify-center items-center ml-6 space-y-10">
        <p className="text-white md:text-7xl text-4xl font-extrabold tracking-tight text-center">Train like a beast, look like a beauty.</p>
        <Link to="/signup">
            {" "}
            <button className="bg-red-800 p-3 rounded-full text-white sm:font-bold sm:text-base text-sm hover:bg-black">
             JOIN NOW
            </button>
          </Link>
      </div>
    </div>
    <footer className="bg-gray-100 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <span className="text-xl font-bold">TechLift Tracking Project</span>
          </div>
          <div className="flex flex-wrap justify-between md:ml-6">
          <div className="space-x-4">
          <Link to="/signup">
                {" "}
                <button className=" rounded-full font-bold underline hover:text-red-800">
                  SIGN UP
                </button>
              </Link>
              <Link to="/login">
                {" "}
                <button className="rounded-full font-bold underline hover:text-red-800">
                  LOGIN
                </button>
              </Link>
          </div>
          </div>
        </div>
        <div className="mt-8 border-t border-red-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-black text-sm">
              &copy; {new Date().getFullYear()} TechLift Tracking Project. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
