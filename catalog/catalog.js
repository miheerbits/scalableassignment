"use strict";

const express = require("express");

// Constants
const PORT = 2301;
const HOST = "0.0.0.0";

// API response with sample catalog data
const data = {
  cats: [
    {
      name: "Persian White Cat",
      color: "White",
      availability: "Nov 1, 2022",
    },
    {
      name: "Moroccan Cat",
      color: "black",
      availability: "Nov 11, 2022",
    },
  ],
  dogs: [
    {
      name: "Labrador",
      color: "Brown",
      availability: "Nov 1, 2022",
    },
    {
      name: "Husky",
      color: "White",
      availability: "Nov 3, 2022",
    },
  ],
};
// App
const app = express();
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, HOST);
console.log(`Catalog Service Up and Running on http://${HOST}:${PORT}`);
console.log("Version 1");
