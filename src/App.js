import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  console.clear();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:1234/books");

    setBooks(response.data);
  };

  const handleAddBook = async (title) => {
    const response = await axios.post("http://localhost:1234/books", {
      title: title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:1234/books/${id}`);

    const updatedBooks = books.filter((book) => id !== book.id);
    setBooks(updatedBooks);
  };

  const handleEditBook = async (newTitle, id) => {
    const response = await axios.put(`http://localhost:1234/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, ...response.data };
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
