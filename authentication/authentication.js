"use strict";

const express = require("express");

// Constants
var PORT = 2300;
var HOST = "0.0.0.0";

// API Response with sample login data
const data = {
  name: "Adam P",
  role: "Supervisor",
  isAuthenticated: true,
};
// App
const app = express();
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, HOST);
console.log(`Authentication Service Up and Running on http://${HOST}:${PORT}`);
console.log("Version 1");
