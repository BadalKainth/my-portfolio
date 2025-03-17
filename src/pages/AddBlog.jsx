import React, { useState } from "react";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    coverImage: null,
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("coverImage", formData.coverImage);
    data.append("title", formData.title);
    data.append("body", formData.body);

    // Add your form submission logic here, e.g., send the data to the server
  };

  return (
    <div>
      <form
        className="container mt-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">
            Cover Image
          </label>
          <input
            type="file"
            className="form-control"
            id="coverImage"
            name="coverImage"
            onChange={handleChange}
            aria-describedby="coverImage"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            aria-describedby="title"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            name="body"
            id="body"
            value={formData.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
