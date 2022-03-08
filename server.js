const express = require("express");
const connectDB = require('./db/connection');
const app = express();


connectDB()
const port = process.env.port || 3000;

app.listen(port, ()=> console.log(`Server is running at port ${port}`))