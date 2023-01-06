import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  console.clear();
  const [books, setBooks] = useState([]);

  const handleAddBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => id !== book.id);
    setBooks(updatedBooks);
  };

  console.log(books);
  return (
    <div>
      <h1>Hi</h1>
      <BookList books={books} deleteBook={handleDeleteBook} />
      <BookCreate addBook={handleAddBook} />
    </div>
  );
}

export default App;
