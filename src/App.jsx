import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookEdit  from './components/BookEdit';
import BookList from './components/BookList';
import BookShow from './components/BookShow';

function App() {

  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) =>{
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books, 
      {id: Math.round(Math.random() * 9999), title: title}]; // 9999 to make it random
    setBooks(updatedBooks)
  };

  return (
  <div className='app'>
    <h1> Reading List</h1>
    <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
    <BookCreate onCreate={createBook} />
  </div>        
  )
}

export default App
