import { useState } from "react";

export default function BookEdit({ book, toggleForm }) {
  const [title, setTitle] = useState(book.title);

  const handleForm = (e) => {
    e.preventDefault();
    toggleForm(title, book.id);
    setTitle("");
  };

  const handleEditInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleForm} className="book-edit">
      <label>title</label>
      <input className="input" onChange={handleEditInput} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
