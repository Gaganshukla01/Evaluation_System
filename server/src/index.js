require('dotenv').config();
const connectDB = require("./db/db.connection");
const express = require('express');
const userRoute = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});