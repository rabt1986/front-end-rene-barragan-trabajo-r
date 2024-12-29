import {useEffect, useState} from "react";
export const useBooks = () => {
  const [books, setBooks] = useState([]);
 useEffect(() => {
    
    fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
      });
    /*fetch(process.env.REACT_APP_GW_URL="https://www.googleapis.com/books/v1/volumes?q=javascript").then((res) => res.json()).then((res) => setBooks(res));  */
  }, []);
  return books;
}