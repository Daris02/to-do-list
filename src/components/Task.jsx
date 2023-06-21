import React from "react";

export default function Task({ id, title, description, status }) {
  return (
    <div key={id}>
      <h6 className="card-header p-2">{title}</h6>
      <p className="">{description}</p>
    </div>
  );
}
