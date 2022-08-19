import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import CurrentReading from "./components/CurrentReading";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, [books.length]);

  return (
    <>
    {console.log(books)}
    <CurrentReading books={books}/>
    </>

  );
}

export default App;
