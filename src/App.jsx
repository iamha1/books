import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookEdit  from './components/BookEdit';
import BookList from './components/BookList';
import BookShow from './components/BookShow';


function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add Book with: ", title);

  }


  return (
  <div>
    BOOKS
    <BookCreate onCreate={createBook} />
    <BookEdit />
  
  </div>        
  )
}

export default App
