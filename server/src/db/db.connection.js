const mongoose = require('mongoose');
const URl=process.env.ConnectionUrl

// Establish the connection
mongoose.connect(URl)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        // Handle specific error conditions
        if (error.name === 'MongoNetworkError') {
            console.error('Network error occurred. Check your MongoDB server.');
        } else if (error.name === 'MongooseServerSelectionError') {
            console.error('Server selection error. Ensure MongoDB is running and accessible.');
        } else {
            console.error('An unexpected error occurred:', error);
        }
    });
