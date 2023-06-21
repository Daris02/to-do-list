import React from "react";
import { useState } from "react";

export default function TaskForm({ handleAdd }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const title = event.target.name;
    const description = event.target.value;
    setInputs((values) => ({ ...values, [title]: description }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date();
    const title = inputs.title;
    const description = inputs.description;
    const status = "start";

    if (title == null || description == null) {
      alert("Title or Content value not empty, retry please !");
    } else {
      handleAdd({ id, title, description, status });
    }

    setInputs("");
  };

  return (
    <div className="container my-2">
      <form action="submit" onSubmit={handleSubmit} className="text-center">
        <div className="mb-3">
          <label className="form-label text-gray">
            Title:
            <input
              type="text"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
              className="form-control text-center opacity"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="text-gray">
            Description:
            <input
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              className="form-control pb-5 text-center opacity"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
