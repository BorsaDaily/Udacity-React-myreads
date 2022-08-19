import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

const CurrentReading = ({ books }) => {
  const [currentReedingBooks, setCurrentReadingBooks] = useState([]);

  useEffect(() => {
    setCurrentReadingBooks(books);
     console.log(books);
  }, [books]);

  return (
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
                <CardComponent books={currentReedingBooks} />
             {/* {console.log(currentReedingBooks)}  */}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentReading;
