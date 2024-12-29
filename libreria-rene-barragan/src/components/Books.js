import React, { useContext } from 'react';
import { Link } from "react-router-dom";   
import { BookContext } from "../context/BookContext"; 


export const Books = ({ id, name, url_book, authors, publisher, description, image}) => {
     const { books, addToCart} = useContext(BookContext);
     const book = books.find(r => r.id === id);
     
     

     return (
        <div className="card">
            <h3>{name}</h3>
            <p>Id: {id}</p>
            <img src={image} alt={name} />
            <p>Titulo: {name}</p>
            <a href={url_book}>Ver PDF</a>
            <p>Autores: {authors} </p>
            <p>Editorial: {publisher} </p>
            <p>Descripción: {description} </p>
            <p>Id ver: {book.volumeInfo.title} </p> 
            
            <Link to={`/books/${id}`}>
                <button>Ver detalles</button>
            </Link>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
           
        </div>
    );
} 