const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./model");
const activityModel = require("./activityModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.listen(4000, () => {
  console.log("port connected");
});

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/gymtracker"),
  {
    useNewUrlParser: true,
  };
mongoose.connection.once("open", () => {
  console.log("TechLift database is connected!");
});

app.post("/post/signup", async (req, res) => {
  const userDetails = await userModel(req.body);
  try {
    const recordMatch = await userModel.findOne({
      email: req.body.email,
    });
    if (recordMatch) {
      res.json("email already exists");
    } else {
      userDetails.save();
      res.json("Signed Up Successfully");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/post/login", async (req, res) => {
  try {
    const userDetails = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (userDetails) {
      res.send({message:"login successfully", userDetails:userDetails});
    } 
    else {
      res.json("user not exist!");
    }
  } catch (error) {
    console.log(error);
  }
});



app.get("/get", (req, res) => {
  userModel.find({}, (err, data) => {
    res.send(data);
  });
});
app.get("/get/:id", async (req, res) => {
  const getData = await userModel.findById(req.params.id);
  res.send(getData);
});
// app.delete("/get/:id", async (req, res) => {
//   const getData = await userModel.findByIdAndRemove(req.params.id);
//   res.send(getData);
// });

// app.put("/edit/:id", async (req, res) => {
//   await userModel.findByIdAndUpdate(req.params.id, {
//     $set: req.body,
//   });
//   const idGet = await userModel.findByIdAndUpdate(req.params.id);
//   res.send(idGet);
// });

app.post("/activitypost", async (req, res) => {
  const activityDetails = await activityModel(req.body);
  activityDetails.save();
  res.send(activityDetails);
});
app.get("/activityget", (req, res) => {
  activityModel.find({}, (err, data) => {
    res.send(data);
  });
});
// app.get("/activityget/:email", async (req, res) => {
//   const activityRecord= await activityModel.find({
//     email: req.params.email,
//   });
//   res.send(activityRecord); 
// });
app.get("/activityget/:id", async (req, res) => {
  const getActivityData = await activityModel.findById(req.params.id);
  res.send(getActivityData);
});
app.delete("/activityget/:id", async (req, res) => {
  const deleteActivityData = await activityModel.findByIdAndRemove(
    req.params.id
  );
  res.send(deleteActivityData);
});

app.put("/activityedit/:id", async (req, res) => {
  await activityModel.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  const idGet = await activityModel.findByIdAndUpdate(req.params.id);
  res.send(idGet);
});
