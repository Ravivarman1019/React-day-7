// src/pages/AuthorsPage.js
import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const handleAddOrEditAuthor = (author) => {
    if (currentAuthor) {
      setAuthors(authors.map((a) => (a.id === author.id ? author : a)));
    } else {
      setAuthors([...authors, { ...author, id: Date.now() }]);
    }
    setCurrentAuthor(null);
  };

  const handleEditAuthor = (id) => {
    const author = authors.find((a) => a.id === id);
    setCurrentAuthor(author);
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h1>Manage Authors</h1>
      <AuthorForm initialValues={currentAuthor || { name: '', birthDate: '', biography: '' }} onSubmit={handleAddOrEditAuthor} />
      <AuthorList authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default AuthorsPage;
