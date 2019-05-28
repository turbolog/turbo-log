require("dotenv").config()
const express = require("express");
const session = require("express-session")
const massive = require("massive");

const app = express()
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env





app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
