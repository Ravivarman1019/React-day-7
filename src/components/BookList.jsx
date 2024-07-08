// src/components/BookList.js
import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => (
  <div>
    <h2>Books</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author} (ISBN: {book.isbn}) - Published on {book.publicationDate}
          <button onClick={() => onEdit(book.id)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;
