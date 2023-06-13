require('dotenv').config({path:"config.env"});
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

//Express app
const app = express();

app.use(express.json());


app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to DB and listening on Port`, process.env.PORT)
        }) 
    })
    .catch((error)=>{
        console.log(error)
    })


