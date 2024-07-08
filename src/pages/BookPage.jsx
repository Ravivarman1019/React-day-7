// src/pages/BooksPage.js
import React, { useState } from 'react';
import BookForm from '../components/BookForm';


const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  const handleAddOrEditBook = (book) => {
    if (currentBook) {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
    setCurrentBook(null);
  };

  const handleEditBook = (id) => {
    const book = books.find((b) => b.id === id);
    setCurrentBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div>
      <h1>Manage Books</h1>
      <BookForm initialValues={currentBook || { title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleAddOrEditBook} />
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
    </div>
  );
};

export default BooksPage;
