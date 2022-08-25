import React from "react";

const CardComponent = ({ book, selectedBooks }) => {
  let currentOption = "none";
  const handleSelection = (selectedOption) => {
    const index = selectedOption.target.selectedIndex;
    currentOption = selectedOption.target.options[index].text;
    return currentOption;
  };
  

  return (
    (book.length!==0)? <><div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.thumbnail})`
        }}
      ></div>
      <div className="book-shelf-changer">
        <select
          id="bookStatus"
          required
          onChange={(e) => {
            handleSelection(e)
            selectedBooks(book,currentOption)
          }}
        >
          <option value="" disabled selected>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none" >None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors[0]}</div>
  </div> </>:<div>null</div>

  );
};

export default CardComponent;
