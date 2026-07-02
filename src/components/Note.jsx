import React from "react";

function Note(props) {
  return (
    <div>
      {props.notes.map((note, index) => {
        return (
          <div key={index} className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button
              onClick={() => {
                props.deleteNote(index);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Note;
