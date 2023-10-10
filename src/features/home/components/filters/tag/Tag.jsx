import React from "react";
import TagComponent from "./component/TagComponent";
import "./Tag.css";


export default function Tag() {
  const tags = [
    "javascript",
    "python",
    "java",
    "docker",
    "gcp",
    "linux",
    "raspberry",
    "typescript",
    "tensorflow",
    'reaxct',
    'react native',
    'angular',
    'nest',
    'nodejs'
  ];
  return (
    <div className="tag">
      <h1>Etiquetas:</h1>
      <div className="tag-container">
        {tags.map((tag, index) => (
          <TagComponent key={index} tag={tag}/>
          ))}
      </div>
    </div>
  );
}
