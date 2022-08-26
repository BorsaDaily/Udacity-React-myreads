import React, { useState, useEffect } from "react";
import BookShelf from "./BookShelf";

// displaying categorized book shelf
const Home = ({ books,selectedBooks}) => {
  // state mangement for each category
  const [currentReadingBooks, setCurrentReadingBooks] = useState([]);
  const [read, setRead] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);

useEffect(()=>{
  setCurrentReadingBooks(books.filter(book=>book.shelf==='Currently Reading'))
},[books])
useEffect(()=>{
  setRead(books.filter(book=>book.shelf==='Read'))
},[books])
useEffect(()=>{
  setWantToRead(books.filter(book=>book.shelf==='Want to Read'))
},[books])

  return books.length > 0 ? (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={currentReadingBooks} category ={"Currently Reading"} selectedBooks={selectedBooks}/>
          <BookShelf books={read} category ={"Read"} selectedBooks={selectedBooks}/>
          <BookShelf books={wantToRead} category ={"Want to Read"} selectedBooks={selectedBooks}/>
        </div>
      </div>
    </div>
  ) : (
    <>
          <div className="list-books-title">
        <h1>Your Book Shelf is Empty; kindly add new book</h1>
      </div>
    </>
  );
};

export default Home;
