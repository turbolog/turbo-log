require("dotenv").config()
const express = require("express");
const session = require("express-session")
const massive = require("massive");

//Controller File Imports
const { register,login,logout,getSession } = require("./controller/authCtrl")
const { getUserGarage } = require("./controller/vehicleCtrl")

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
app.get("/api/garage", getUserGarage)




app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
