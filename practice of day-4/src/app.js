const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");

});

const notes = [];

app.post("/notes", (req, res) => {
    res.send("Note added");
    const note = req.body;
    notes.push(note);
  });

  app.get("/notes",(req,res)=>{
    res.send(notes);
    notes.push(req.body);
  })


  app.delete('/notes/:index',(req,res)=>{
   delete notes[req.params.index];
    res.send(`Note at index  deleted`);
  })

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index]=req.body.description;
    notes[req.params.index]=req.body.title;
    res.send(`Note at index updated`);
})

module.exports = app;
