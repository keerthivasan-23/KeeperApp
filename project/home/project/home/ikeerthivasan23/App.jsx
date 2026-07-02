import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((curr, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Note
        key={1}
        title="Note title"
        content="Note content"
        notes={notes}
        deleteNote={deleteNote}
      />
      <Footer />
    </div>
  );
}

export default App;
