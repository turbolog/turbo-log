require("dotenv").config()
const express = require("express");
const session = require("express-session")
const massive = require("massive");

//Controller File Imports
const { register,login,logout,getSession } = require("./controller/authCtrl")
const { getUserGarage, updateMiles, deleteVehicle, addVehicle } = require("./controller/vehicleCtrl")
const { getRecords, addRecord, updateRecord, deleteRecord, getVehicleRecord } = require("./controller/recordCtrl")
const { getPosts, addPost, deletePost, getComments, addComment, getFavorites, getUserPosts } = require("./controller/postCtrl")
 
const app = express()
app.use(express.json())
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db",dbInstance)
    console.log("Database Connected")
}).catch(error => console.log(error, "database did not connect"))

app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

//Authentication Endpoints
app.post("/auth/register", register)
app.post("/auth/login", login)
app.get("/auth/logout", logout)
app.get("/auth/user", getSession)

//Garage Endpoints 
app.get("/api/vehicles", getUserGarage)
app.put("/api/vehicles/:vehicle_id", updateMiles)
app.post("/api/vehicles", addVehicle)
app.delete("/api/vehicles/:vehicle_id", deleteVehicle)

//Record Endpoints
app.get("/api/records", getRecords)
app.post("/api/records", addRecord)
app.put("/api/records/:report_id", updateRecord)
app.delete("/api/records/:report_id", deleteRecord)
app.get("/api/vehicles/records/:vehicle_id", getVehicleRecord)

//Post Endpoints
app.get("/api/posts", getPosts)
app.get("/api/users/posts", getUserPosts)
app.post("/api/posts", addPost)
app.delete("/api/posts/:post_id", deletePost)
app.get("/api/favorites", getFavorites)
app.get("/api/comments/:post_id", getComments)
app.post("/api/comments/:post_id", addComment)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
