/*
- server create karna
- server ko config karna

*/

const express = require('express')

const app = express();

app.use(express.json());

const notes = [];


app.post('/notes', (req,res)=>{
    res.send('Note created');
    console.log(req.body);
    notes.push(req.body);
})

app.get('/notes', (req ,res)=>{
    res.send(notes);
})


app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index];
    res.send({message: 'Note deleted'});
})


app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index] = req.body.description;
    notes[req.params.index] = req.body.title;
    res.send({message: 'Note updated'});
})







module.exports = app;