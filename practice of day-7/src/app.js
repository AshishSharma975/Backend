const express = require('express');

const app = express();
app.use(express.json());
const noteModel = require('./models/notes.models.js');




app.post("/notes", async (req,res)=>{
    const {title,description,age} = req.body;

  const note =  await noteModel.create({
        title,
        description,
        age
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })
})


app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find()
    
    //find-method  - array of objects me return karega

    res.status(200).json({
        message: "all notes fetched successfully",
        notes
    })
})


module.exports = app;