import React, { useState } from "react";
import "./CSS/PostCategory.css";

const PostCategory = () => {
  const [credentials, setCredentials] = useState({
    category: "",
  });

  const host = "http://localhost:5000";

  const onChangetext = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/admin/postcategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: credentials.category,
      }),
    });
    const json = await response.json();
    console.log(json);
    window.location.reload(false);
  };
  return (
    <div className="postcategory-main">
      <div className="postcategory-form">
        <h2>Add New Category</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Category*"
            name="category"
            value={credentials.category}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={3}
            required
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button type="submit">POST</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default PostCategory;
