// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/books" component={BooksPage} />
          <Route path="/authors" component={AuthorsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
