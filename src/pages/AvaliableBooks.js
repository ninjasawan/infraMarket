import React from "react";
import { useApp } from "../hooks";

const AvaliableBooks = () => {
  const { avaliableBooks } = useApp();

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
    avaliableBooks && avaliableBooks.length > 0 ? (
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
        <tbody>{avaliableBooks.map((book, i) => bookList(book, i))}</tbody>
      </table>
    ) : (
      <h2>No books avaliable. Please try after sometimes.</h2>
    );

  return books;
};

export default AvaliableBooks;
