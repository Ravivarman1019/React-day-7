// src/components/AuthorList.js
import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => (
  <div>
    <h2>Authors</h2>
    <ul>
      {authors.map((author) => (
        <li key={author.id}>
          {author.name} - Born on {author.birthDate}
          <button onClick={() => onEdit(author.id)}>Edit</button>
          <button onClick={() => onDelete(author.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorList;
