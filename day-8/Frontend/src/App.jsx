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

  return (
    <>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
