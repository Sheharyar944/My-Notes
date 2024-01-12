import React from "react";
import notes from "../assets/data.js";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  return (
    <div>
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes </h2>
          <p>{notes.length}</p>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <ListItem key={index} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesListPage;
