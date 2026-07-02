import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(event) {
    const { value } = event.target;
    setTitle(value);
  }

  function handleContent(event) {
    const { value } = event.target;
    setContent(value);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={handleContent}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd({ title: title, content: content });
            setContent("");
            setTitle("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
