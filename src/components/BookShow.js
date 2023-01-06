import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, deleteBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteButtonClick = () => {
    deleteBook(book.id);
  };

  const handleEditButtonClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditButtonClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteButtonClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
