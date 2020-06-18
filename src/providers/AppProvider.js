import React from "react";
import books from "../books";

export const AppContext = React.createContext({
  avaliableBooks: JSON.parse(JSON.stringify(books)),
  setAvaliableBooks: null,
  issuedBooks: {},
  setIssuedBooks: null,
});

export const AppProvider = (props) => {
  const [avaliableBooks, setAvaliableBooks] = React.useState(
    JSON.parse(JSON.stringify(books))
  );
  const [issuedBooks, setIssuedBooks] = React.useState({});

  return (
    <AppContext.Provider
      value={{
        avaliableBooks,
        setAvaliableBooks,
        issuedBooks,
        setIssuedBooks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
