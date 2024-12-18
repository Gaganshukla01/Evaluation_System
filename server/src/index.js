require('dotenv').config();
const cors = require('cors');
const connectDB = require("./db/db.connection");
const express = require('express');
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Connect to the database
connectDB();
 
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
   
//User Routes  
app.use("/api/users", userRoute);
 
//Admin Routes
app.use("/api/admin", adminRoute);
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});