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

  const handleEditBook = (newTitle, id) => {
    // console.log(newTitle + " " + id);
    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  console.log(books);
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        deleteBook={handleDeleteBook}
        updateBook={handleEditBook}
      />
      <BookCreate addBook={handleAddBook} />
    </div>
  );
}

export default App;
