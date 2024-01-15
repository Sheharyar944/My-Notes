import React from "react";
import { Link } from "react-router-dom";

const getDate = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

const getTitle = (note) => {
  let title = note.body.split("\n")[0];

  if (title.length > 45) {
    return title.slice(0, 50);
  }

  return title;
};

const getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", "");

  content = note.body;
  content = content.replaceAll(title, "");

  if (content.length > 40) {
    return content.slice(0, 40);
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3> {getTitle(note)} </h3>
        <p>
          <span>{getDate(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
