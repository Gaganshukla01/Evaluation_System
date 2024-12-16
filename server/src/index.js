require('dotenv').config('src');
const db=require("./db/db.connection")
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, err => {
  console.log(`PORT IS Running on ${PORT}`);
});
