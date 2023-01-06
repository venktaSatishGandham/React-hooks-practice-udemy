import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);
  return (
    <div>
      <h1>Hi</h1>
      <BookCreate />
    </div>
  );
}

export default App;
