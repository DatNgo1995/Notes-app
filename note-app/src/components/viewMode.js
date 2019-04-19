import React from "react";

export const ViewMode = ({ title, content }) => {
  return (
    <div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};
