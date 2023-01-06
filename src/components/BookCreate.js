import { useState } from "react";

export default function BookCreate({ addBook }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle("");
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleInput} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
