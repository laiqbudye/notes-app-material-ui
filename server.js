const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notes');
const path = require('path');

dotenv.config({ path: './config/config.env' });    // this code needs to read data from env file, otherwise it wont read data

connectDB();

const app = express();

app.use(express.json());         // this gives req.body obj in which we get all our passed values automatically
//mapping api with routes
app.use('/api/notes', notesRoutes);


// serve static asset in production
if(process.env.NODE_ENV === 'production'){
    //set the static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started running on port " + PORT);
})