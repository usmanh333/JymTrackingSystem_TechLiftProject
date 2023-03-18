import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Activities from "./Activities";
import ActivityForm from "./ActivityForm";
import ActivityRecord from "./ActivityRecord";
import DashboardActivityRecord from "./DashboardActivityRecord";
import { FaArrowCircleLeft, FaRunning } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Dashboard = () => {
  const [sessionData, setsessionData] = useState(null);
  const getSessionData = () => {
    setsessionData(sessionStorage.getItem("user"));
  };
  const navigate = useNavigate();
  useEffect(() => {
    getSessionData();
    navigate();
  }, []);
  const logOut = () => {
    sessionStorage.clear();
  };
  return (
    <>
      {sessionData === null ? (
        navigate("/login")
      ) : (
        <div
          className="w-screen h-screen bg-cover bg-top bg-no-repeat flex"
          style={{
            backgroundImage:
              "linear-gradient(to bottom,rgba(20, 40,60, 0.4), rgba(20, 40,60, 0.7)), url(/bgImage.jpg)",
          }}
        >
          <div className=" bg-red-800 h-screen w-2/12">
            <div className="space-y-12 flex-col flex items-center pt-14">
              <div className="flex items-center justify center">
                <div className="md:hidden block" title="Dashboard">
                  <Link to="/dashboard/DashboardActivitiesRecord">
                    <MdDashboard size={42} />
                  </Link>
                </div>
                <div className="sm:text-2xl text-xs text-white hover:text-black hover:border-black hover:border-b-2 md:block hidden">
                  <Link to="/dashboard/DashboardActivitiesRecord">
                    Dashboard
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify center">
                <div className="md:hidden block" title="Activities">
                  <Link to="/dashboard/activities">
                    <FaRunning size={42} />
                  </Link>
                </div>
                <div className="sm:text-2xl text-xs text-white hover:text-black hover:border-black hover:border-b-2 md:block hidden">
                  <Link to="/dashboard/activities">Activities</Link>
                </div>
              </div>

              <div className="flex items-center justify center">
                <div className="md:hidden block" title="Logout">
                  <Link to="/">
                    <FaArrowCircleLeft size={42} onClick={logOut} />
                  </Link>
                </div>
                <Link to="/">
                  <button
                    className="bg-black sm:p-4 p-0  text-white rounded-2xl sm:font-bold sm:text-base md:block hidden"
                    onClick={logOut}
                  >
                    LogOut
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Routes>
            <Route
              path="/DashboardActivitiesRecord"
              element={<DashboardActivityRecord />}
            ></Route>
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/ActivityForm" element={<ActivityForm />}></Route>
            <Route path="/ActivityRecord" element={<ActivityRecord />}></Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default Dashboard;
