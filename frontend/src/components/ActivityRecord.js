import React, { useState, useEffect } from "react";

const ActivityRecord = () => {
  const empty = {
    description: "",
    activityType: "",
    duration: "",
    date: "",
  };
  const [data, setData] = useState([]);
  const [editBoxshow, setEditBoxShow] = useState(false);
  const [editActivityState, seteditActivityState] = useState(empty);
  const [idget, setIdget] = useState(0);
  // const [sessionEmail, setsessionEmail] = useState(null);
  // const getSessionEmail = () => {
  //   setsessionEmail(sessionStorage.getItem("useremail"));
  // };
  const handleClick = (event) => {
    const { name, value } = event.target;
    seteditActivityState({ ...editActivityState, [name]: value });
  };
  const dataFetch = async () => {
    let dataFetch = await fetch(`http://localhost:4000/activityget`);
    dataFetch = await dataFetch.json();
    setData(dataFetch);
  };
  // const dataFetchh = async () => {
  //   let dataFetch = await fetch(`http://localhost:4000/activityget/${sessionEmail}`);
  //   dataFetch = await dataFetch.json();
  //   setData(dataFetch);
  // };
  useEffect(() => {
    // getSessionEmail();
    dataFetch();
  }, []);

  const deleteActivity = async (id) => {
    console.log("delete clicked");
    await fetch(`http://127.0.0.1:4000/activityget/${id}`, {
      method: "DELETE",
    });
    dataFetch();
  };

  const editActivity = async (id) => {
    console.log("edit clicked");
    let dataGet = await fetch(`http://127.0.0.1:4000/activityget/${id}`);
    dataGet = await dataGet.json();
    seteditActivityState(dataGet);
    setIdget(id);
    setEditBoxShow(true);
  };
  console.log(editActivityState, "data Get");
  const updateActivityBtn = async () => {
    let idtoUpdate = idget;
    await fetch(`http://127.0.0.1:4000/activityedit/${idtoUpdate}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editActivityState),
    });
    dataFetch();
    seteditActivityState(empty);
    setEditBoxShow(false);
  };
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 grid-cols-1 w-screen p-4 overflow-auto">
        {data.length==0? <div className="text-white flex items-center justify-center text-3xl">No activity records available</div>:
        data.map((elem) => {
          return (
            <div className="bg-white h-80 p-4 rounded-xl" key={elem._id}>
              <div className="flex flex-col items-center lg:gap-3 sm:gap-2 gap-3">
                <div className="text-center flex md:flex-row flex-col justify-center items-center md:space-x-3 space-x-2">
                  <h1 className="font-bold sm:text-md md:text-lg text-sm">
                    Description:
                  </h1>
                  <p className="text-center text-sm sm:text-lg md:text-xl">
                    {elem.description}
                  </p>
                </div>
                <div className="text-center flex lg:flex-row flex-col justify-center items-center md:space-x-3 space-x-2">
                  <h1 className="font-bold sm:text-md md:text-lg text-sm">
                    Type:
                  </h1>
                  <p className="text-center text-sm sm:text-lg md:text-xl">
                    {elem.activityType}
                  </p>
                </div>
                <div className="text-center flex lg:flex-row flex-col justify-center items-center md:space-x-3 space-x-2">
                  <h1 className="font-bold sm:text-md md:text-lg text-sm">
                    Duration:
                  </h1>
                  <p className="text-center text-sm sm:text-lg md:text-xl">
                    {elem.duration} Minutes
                  </p>
                </div>
                <div className="text-center flex lg:flex-row flex-col justify-center items-center md:space-x-3 space-x-2">
                  <h1 className="font-bold sm:text-md md:text-lg text-sm">
                    Date:
                  </h1>
                  <p className="text-center text-sm sm:text-lg md:text-xl">
                    {elem.date}
                  </p>
                </div>
              </div>
              <div className="space-x-4 flex justify-center mt-3">
                <button
                  className="bg-red-800 p-3 text-white font-bold rounded-2xl hover:bg-black"
                  onClick={() => editActivity(elem._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-800 p-3 text-white font-bold hover:bg-black rounded-2xl"
                  onClick={() => deleteActivity(elem._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {editBoxshow && (
        <div className="w-screen h-screen absolute backdrop-blur-sm">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-2 space-y-4 sm:w-1/2 w-4/12 absolute lg:left-1/4 lg:top-1/4 sm:left-1/3 sm:top-1/4 top-1/4 left-1/3"
          >
            <h2 className="text-center sm:text-3xl text-xl">Edit Activity</h2>
            {/* <input
            className="border border-red-800 w-full p-0.5"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleClick}
            value={editActivityState.name}
          /> */}
            <input
              className="border border-red-800 w-full p-0.5"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleClick}
              value={editActivityState.description}
            />
            <select
              className="border border-red-800 w-full p-0.5"
              name="activityType"
              onChange={handleClick}
              value={editActivityState.activityType}
            >
              <option>Choose Your Activity</option>
              <option> Run</option>
              <option>Bicycle Ride</option>
              <option>swim</option>
              <option>Run & Hike</option>
            </select>
            <input
              className="border border-red-800 w-full p-0.5"
              type="number"
              name="duration"
              placeholder="Duration in Minutes"
              onChange={handleClick}
              value={editActivityState.duration}
            />
            <input
              className="border border-red-800 w-full p-0.5"
              type="date"
              name="date"
              onChange={handleClick}
              value={editActivityState.date}
            />
            <div className="flex justify-center mt-3">
              <button
                className="bg-red-800 p-3 rounded-full text-white font-bold hover:bg-black"
                onClick={updateActivityBtn}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ActivityRecord;
