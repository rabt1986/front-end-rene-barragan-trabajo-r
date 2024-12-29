// BookDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {BookContext} from '../context/BookContext';

const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(r => r.id === bookId);

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }

    console.log(book.name);

    return (
        <div className="book-details">
            <h2 className="book-name">{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <p className="book-author">Autores: {book.volumeInfo.authors}</p>
            <p className="book-description">Editorial: {book.volumeInfo.publisher}</p>
            <p className="book-description">Descripción: {book.volumeInfo.description}</p>
            <a href={book.volumeInfo.previewLink}>Url </a> 
        </div>
    );
}

export default BookDetails;