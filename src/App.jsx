import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookEdit  from './components/BookEdit';
import BookList from './components/BookList';
import BookShow from './components/BookShow';

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books, 
      {id: Math.round(Math.random() * 9999), title: title}];
    setBooks(updatedBooks)
  };

  return (
  <div className='app'>
    <BookList books={books}/>
    <BookCreate onCreate={createBook} />
  </div>        
  )
}

export default App
