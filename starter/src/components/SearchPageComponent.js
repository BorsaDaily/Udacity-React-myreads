import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import * as BooksAPI from "../BooksAPI";

const SearchPageComponent = ({ books, selectedBooks }) => {
  const [query, setQuery] = useState("");
  const [searchbooks, setSearchbooks] = useState([]);

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.trim().length>0) {
      BooksAPI.search(query).then((result) => {
        if (result.length > 0) {
          setSearchbooks(result);
          console.log(result)
        } else {
          setSearchbooks([]);
          console.log(books)
        }
      });
    }
  }, [query]);


  return (
    <>
      <div className="search-books-bar">
        <div className="close-search">
          <Link to="/">Close</Link>
        </div>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={updateQuery}
          />
        </div>
      </div>

      <div className="list-books">
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Book Shelf</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {searchbooks.length>0 ? <>{searchbooks.map((book) => {
                    return (
                      <li key={book.id}>
                        <CardComponent
                          book={book}
                          selectedBooks={selectedBooks}
                        />
                      </li>
                    );
                  })}</>:<>...</>}
                  
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPageComponent;
