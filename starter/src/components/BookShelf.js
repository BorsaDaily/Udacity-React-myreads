import React from "react";
import CardComponent from "./CardComponent";

const BookShelf = ({ books, category, selectedBooks }) => {
    return (
        <>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <CardComponent book={book} selectedBooks={selectedBooks} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default BookShelf;
