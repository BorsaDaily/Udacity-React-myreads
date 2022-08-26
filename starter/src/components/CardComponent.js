
const CardComponent = ({ book, selectedBooks }) => {
  // book component
  let currentOption = "none";
  const handleSelection = (selectedOption) => {
    const options = selectedOption.target.options;
    const index = selectedOption.target.selectedIndex;
    currentOption = selectedOption.target.options[index].text;
    for (let i = 0; i < options.length; i++) {
      options[i].id = "";
    }
    selectedOption.target.options[index].id = "selected";
    console.log(options[index].style.color = 'red');
    return currentOption;
  };

  return book.length !== 0 ? (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book?.imageLinks?.smallThumbnail !== undefined
                  ? `url(${book?.imageLinks?.smallThumbnail})`
                  : "unset",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              id="bookStatus"
              required
              onChange={(e) => {
                handleSelection(e);
                selectedBooks(book, currentOption);
              }}
            >
              <option value="" disabled>
                Move to...
              </option>
              <option value="currentlyReading" id="">
                Currently Reading
              </option>
              <option value="wantToRead" id="">
                Want to Read
              </option>
              <option value="read" id="">
                Read
              </option>
              <option value="none" id="" selected>
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {[book.authors].map((bookAurther) => (
          <div key={book.id} className="book-authors">
            {bookAurther}
          </div>
        ))}
      </div>{" "}
    </>
  ) : (
    <div>null</div>
  );
};

export default CardComponent;
