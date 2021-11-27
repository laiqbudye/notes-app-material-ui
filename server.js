const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notes');

dotenv.config({ path: './config/config.env' });    // this code needs to read data from env file, otherwise it wont read data

connectDB();

const app = express();

app.use(express.json());         // this gives req.body obj in which we get all our passed values automatically
//mapping api with routes
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started running on port " + PORT);
})