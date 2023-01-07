import React from "react";
import BookShow from "./BookShow";
export default function BookList({ books, deleteBook, updateBook }) {
  const renderBooks = books.map((book) => (
    <BookShow
      deleteBook={deleteBook}
      updateBook={updateBook}
      id={book.id}
      book={book}
    />
  ));

  return <div className="book-list">{renderBooks}</div>;
}
