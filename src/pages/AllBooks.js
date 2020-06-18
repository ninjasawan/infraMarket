import React from "react";
import books from "../books";

const AllBooks = () => {
  const bookList = (book, i) => (
    <tr key={`book-${i}`}>
      <td>{book.label}</td>
      <td>{book.subject}</td>
      <td>{book.py}</td>
      <td>{book.copies}</td>
      <td>{book.author}</td>
    </tr>
  );

  const allBooks =
    books && books.length > 0 ? (
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
            <th>Number of Copies</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>{books.map((book, i) => bookList(book, i))}</tbody>
      </table>
    ) : (
      <h2>No books avaliable. Please try after sometimes.</h2>
    );

  return allBooks;
};

export default AllBooks;
