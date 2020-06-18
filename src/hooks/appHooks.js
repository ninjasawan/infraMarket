import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

const useAppContext = () => useContext(AppContext);

export const useApp = () => {
  const avaliableBooks = useAppContext().avaliableBooks;
  const setAvaliableBooks = useAppContext().setAvaliableBooks;
  const issuedBooks = useAppContext().issuedBooks;
  const setIssuedBooks = useAppContext().setIssuedBooks;

  return {
    avaliableBooks,
    setAvaliableBooks,
    issuedBooks,
    setIssuedBooks,
  };
};
