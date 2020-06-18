import React from "react";
import { useHistory } from "react-router-dom";
import { useApp } from "../hooks";
import Select from "react-select";

const IssueBook = () => {
  const {
    avaliableBooks,
    setAvaliableBooks,
    setIssuedBooks,
    issuedBooks,
  } = useApp();
  const history = useHistory();

  const [username, setUsername] = React.useState("");
  const [selectedBook, setSelectedBook] = React.useState(avaliableBooks[0]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const bookToBeIssue = avaliableBooks.find(
          (b) => b.value === selectedBook.value
        );

        const dataToSubmit = {
          username,
          issuesDate: new Date(),
          ...bookToBeIssue,
        };

        if (issuedBooks?.[username]) {
          if (issuedBooks[username].length === 3) {
            alert("You can't issue more than 3 books");
          } else {
            if (bookToBeIssue.copies > 1) {
              setAvaliableBooks(
                avaliableBooks.map((b) => {
                  if (b.value === selectedBook.value) {
                    b.copies = b.copies - 1;
                  }
                  return b;
                })
              );
            } else {
              setAvaliableBooks(
                avaliableBooks.filter((b) => b.value !== selectedBook.value)
              );
            }
            setIssuedBooks({
              ...issuedBooks,
              [username]: [...issuedBooks[username], dataToSubmit],
            });
            alert(
              `Book ${selectedBook.label} sucessfully issued for user ${username}`
            );
            history.push("/");
          }
        } else {
          if (bookToBeIssue.copies > 1) {
            setAvaliableBooks(
              avaliableBooks.map((b) => {
                if (b.value === selectedBook.value) {
                  b.copies = b.copies - 1;
                }
                return b;
              })
            );
          } else {
            setAvaliableBooks(
              avaliableBooks.filter((b) => b.value !== selectedBook.value)
            );
          }
          setIssuedBooks({ ...issuedBooks, [username]: [dataToSubmit] });
          alert(
            `Book ${selectedBook.label} sucessfully issued for user ${username}`
          );
          history.push("/");
        }
      }}
      style={{ marginTop: 20 }}
    >
      <input
        type="text"
        value={username}
        className="input"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        style={{ marginBottom: 20 }}
        placeholder="Enter your username"
      />
      <Select
        options={avaliableBooks}
        value={selectedBook}
        onChange={(newValue) => {
          setSelectedBook(newValue);
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: 20 }}
      >
        Issue Book
      </button>
    </form>
  );
};

export default IssueBook;
