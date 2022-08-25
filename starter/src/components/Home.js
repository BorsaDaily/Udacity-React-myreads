import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";


const Home = ({ books,selectedBooks}) => {
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

  return currentReadingBooks.length > 0 ? (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentReadingBooks.map((book) => {
                  return (
                    <li key={book.id}>
                      <CardComponent
                        book={book} selectedBooks={selectedBooks}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => {
                  return (
                    <li key={book.id}>
                      <CardComponent
                        book={book} selectedBooks={selectedBooks}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map((book) => {
                  return (
                    <li key={book.id}>
                      <CardComponent
                        book={book} selectedBooks={selectedBooks}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
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
