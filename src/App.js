import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { AppProvider } from "./providers";
import {
  AllBooks,
  AvaliableBooks,
  IssuedBooks,
  SearchBook,
  IssueBook,
  NotFound,
} from "./pages";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <nav className="nav">
          <ul className="container">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/avaliableBooks" activeClassName="selected">
                Avaliable Books
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/issuedBooks" activeClassName="selected">
                Issued Books
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/issueBook" activeClassName="selected">
                Issue Book
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/searchBook" activeClassName="selected">
                Search Book
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route component={AllBooks} path="/" exact />
            <Route component={AvaliableBooks} path="/avaliableBooks" exact />
            <Route component={IssuedBooks} path="/issuedBooks" exact />
            <Route component={IssueBook} path="/issueBook" exact />
            <Route component={SearchBook} path="/searchBook" exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
