import React from "react";
import { useApp } from "../hooks";
import books from "../books";

const SearchBook = () => {
  const {
    avaliableBooks,
    setAvaliableBooks,
    setIssuedBooks,
    issuedBooks,
  } = useApp();

  const [title, setTitle] = React.useState("");

  const checkForBook = avaliableBooks.filter(
    (b) => b.label.toLocaleLowerCase().indexOf(title.toLocaleLowerCase()) !== -1
  );

  const bookList = (book, i) =>
    book.copies > 0 && (
      <tr key={`avaliableBook-${i}`}>
        <td>{book.label}</td>
        <td>{book.subject}</td>
        <td>{book.py}</td>
        <td>{book.copies}</td>
        <td>{book.author}</td>
      </tr>
    );

  const books =
    checkForBook && checkForBook.length > 0 ? (
      <table
        style={{ textAlign: "center", width: "100%", marginTop: 20 }}
        border="1"
        cellSpacing="0"
        cellPadding="10"
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Publication year</th>
            <th>Avaliable Copies</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>{checkForBook.map((book, i) => bookList(book, i))}</tbody>
      </table>
    ) : (
      <h2>No books found with your search. Please try with other keyword.</h2>
    );

  return (
    <div>
      <input
        type="text"
        placeholder="Search book by title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="input"
        style={{ marginTop: 20 }}
      />
      {title && books}
    </div>
  );
};

export default SearchBook;
