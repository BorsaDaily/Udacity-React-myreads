import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SearchPageComponent from "./components/SearchPageComponent";

function App() {
  // adding state managment for book shelf
  const [books, setBooks] = useState([]);
// to render books condtitionally with changing the book shelf
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      const storedBooks = JSON.parse(window.localStorage.getItem('books'))
      setBooks(storedBooks);
    });
  },[]);

  // useEffect(() => {
  //     console.log(books)
  //     window.localStorage.setItem('books',JSON.stringify(books))
  //     console.log(JSON.parse(window.localStorage.getItem('books')))
    
  // }, [books.length]);


  // methode to update and store the selected book status for booth book shelf and search Page
  const update = (book, currentStatus) => {
    BooksAPI.update(book, currentStatus).then(
      BooksAPI.get(book.id).then((book) => {
        book.shelf = currentStatus;
        setBooks(books
          .filter((oldbook) => oldbook.id !== book.id)
          .concat({
            ...book,
            currentStatus,}));
      }).then(()=>window.localStorage.setItem('books',JSON.stringify(books)))
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
