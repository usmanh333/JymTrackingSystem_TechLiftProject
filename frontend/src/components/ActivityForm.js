import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ActivityForm = () => {

    const empty = {
        description: "",
        activityType:"",
        duration:"",
        date:""
      };
      const [sessionEmail, setsessionEmail] = useState(null);
      const getSessionEmail = () => {
        setsessionEmail(sessionStorage.getItem("useremail"));
      };
      useEffect(()=>{
        getSessionEmail();
      },[]);
    const navigate=useNavigate();
    const [addActivity, setAddActivity]=useState(empty);
    
    const handleClick=(event)=>{
        const {name, value}= event.target;
        setAddActivity({...addActivity, [name]:value, email: sessionEmail})
    }

  const addActivityBtn = async () => {
    if(addActivity.description=="" || addActivity.activityType=="" || addActivity.duration=="" || addActivity.date==""){
        alert("please Enter Data in All fields!")
    }
    else{
      await fetch("http://127.0.0.1:4000/activitypost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addActivity),
      });
        alert("Activity added");
        setAddActivity(empty);
        navigate("/dashboard/activities")
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-2 space-y-4 sm:w-1/2 w-4/12"
        >
          <h2 className="text-center sm:text-3xl text-xl">Add Activity</h2>
          <input
            className="border border-red-800 w-full p-0.5"
            value={sessionEmail}
           readOnly
           />
          <select
            className="border border-red-800 w-full p-0.5"
            name="activityType"
            onChange={handleClick}
            value={addActivity.activityType}
          >
            <option>Choose Your Activity</option>   
            <option> Run</option>   
            <option>Bicycle Ride</option>
            <option>swim</option>
            <option>Run & Hike</option>
          </select>
          <input
            className="border border-red-800 w-full p-0.5"
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleClick}
            value={addActivity.description}
          />
          <input
            className="border border-red-800 w-full p-0.5"
            type="number"
            name="duration"
            min="1"
            placeholder="Duration in Minutes"
            onChange={handleClick}
            value={addActivity.duration}
          />
           <input
            className="border border-red-800 w-full p-0.5"
            type="date" 
            name="date"
            onChange={handleClick}
            value={addActivity.date}
          />
          <div className="flex justify-center mt-3">
            <button
              className="bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black"
              onClick={addActivityBtn}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ActivityForm;
