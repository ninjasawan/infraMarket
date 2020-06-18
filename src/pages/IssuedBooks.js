import React from "react";
import { useApp } from "../hooks";

const IssuedBooks = () => {
  const { issuedBooks } = useApp();

  const allIssuedBook = Object.keys(issuedBooks);

  const isEmpty = allIssuedBook.length === 0;

  const bookList = (book, i) =>
    book.copies > 0 && (
      <tr key={`issuedBook-${i}`}>
        <td>{book.label}</td>
        <td>{book.subject}</td>
        <td>{book.py}</td>
        <td>{book.author}</td>
        <td>{book.issuesDate.toLocaleDateString()}</td>
      </tr>
    );

  const books = (user) => {
    const aib = issuedBooks[user];
    return (
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
            <th>Author</th>
            <th>Issue Date</th>
          </tr>
        </thead>
        <tbody>{aib.map((book, i) => bookList(book, i))}</tbody>
      </table>
    );
  };

  const renderIssuedBooks = !isEmpty ? (
    allIssuedBook.map((user) => (
      <div key={`user-${user}`}>
        <h4>{user}</h4>
        {books(user)}
      </div>
    ))
  ) : (
    <h2>No books issued yet. Please issue one.</h2>
  );

  return renderIssuedBooks;
};

export default IssuedBooks;
