const express = require('express')
const noteModel = require('./models/Note.Model')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

// POST

app.post('/notes',async (req,res)=>{
    const {title,description} = req.body;
    const note = await  noteModel.create({title,description})

res.status(201).json({
    message:"Note created successfully",
    note
})

})

// GET

app.get("/notes",async (req,res)=>{
   const notes = await noteModel.find()

   res.status(200).json({
    message:"Notes fetched successfully",
    notes
   })

})

// DELETE

app.delete("/notes/:id",async (req,res)=>{
const id = req.params.id;

await noteModel.findByIdAndDelete(id)

res.status(200).json({
    message:"Note deleted successfully"

})

})


// patch


app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    const {description} = req.body;

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"Note updated successfully"
        
    })
})


module.exports = app