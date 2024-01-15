import React, { useState, useEffect } from "react";
// import notes from "../assets/data";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = (props, history) => {
  console.log("props", props);

  let { id } = useParams();
  console.log("id", id);

  // let note = notes.find((note) => note.id === Number(id));
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    if (id === "new") return;
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    await fetch(`http://localhost:8000/notes/`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  let navigate = useNavigate();

  let handleSubmit = () => {
    if (id !== "new" && !note.body) {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body) {
      createNote();
    }
    navigate("/");
  };

  //backendc
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete </button>
        ) : (
          <button onClick={handleSubmit}> Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
