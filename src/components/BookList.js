import React from "react";
import BookShow from "./BookShow";
export default function BookList({ books, deleteBook }) {
  const renderBooks = books.map((book) => (
    <BookShow deleteBook={deleteBook} id={book.id} book={book} />
  ));

  return <div className="book-list">{renderBooks}</div>;
}
