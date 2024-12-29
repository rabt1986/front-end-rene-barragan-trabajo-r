import React, {useEffect, useState} from 'react';
import './App.css';
import GlobalRouter from "./routes/GlobalRouter";
import {Footer} from "./components/Footer";
import {useBooks} from './hooks/useBooks';
import { BookContext } from './context/BookContext';


function App() {

  const books = useBooks();
  const [cart, setCart] = useState([]);
  const addToCart = (book) => {
    setCart([...cart, { id: book.id, name: book.volumeInfo.title }]);
    };

    const removeFromCart = (bookId) => {
        setCart(cart.filter(book => book.id !== bookId));
    };
   


   return (
        <BookContext.Provider value={{books, cart, addToCart, removeFromCart}}>
            <GlobalRouter></GlobalRouter>
            <Footer />
        </BookContext.Provider>
  );
}

export default App;
