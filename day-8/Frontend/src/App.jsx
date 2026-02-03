import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [notes, setnotes] = useState([]);

  function FetchNotes() {
    axios.get("http://localhost:3000/notes").then((res) => {
      setnotes(res.data.notes);
    });
  }

  useEffect(() => {
    FetchNotes();
  }, []);

  function HandleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    console.log(title.value, description.value);

    axios
      .post("http://localhost:3000/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);

        FetchNotes();
      });
  }

  function HandleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/notes/" + noteId)
    .then((res) => {
      console.log(res.data);
      FetchNotes();
    });
  }

  return (
    <>
      <form className="note-create-form" onSubmit={HandleSubmit}>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Discription" />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  HandleDeleteNote(note._id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
