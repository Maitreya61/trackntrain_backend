require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workout');
const PORT = process.env.PORT || 4000

//Express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cors());


app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Connected to DB and listening on Port`, PORT);
        }) 
    })
    .catch((error)=>{
        console.log(error);
    })



