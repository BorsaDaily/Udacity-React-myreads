import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SearchPageComponent from "./components/SearchPageComponent";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks([books]);
    });
  }, []);
  const update = (book, currentStatus) => {
    BooksAPI.update(book, currentStatus).then(
      BooksAPI.get(book.id).then((book) => {
        book.shelf = currentStatus;
        setBooks([...books, book]);
        console.log(books);
      })
    );
  };
  return (
    <>
      <Routes>
        <Route
          path="/search"
          element={
            <>
              <SearchPageComponent selectedBooks={update} />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home books={books} selectedBooks={update} />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
