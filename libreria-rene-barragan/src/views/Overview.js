import React, {useContext} from 'react';
import '../styles/styles.css';
import {Books} from "../components/Books";
import {BookContext} from "../context/BookContext";
import {LinearProgress} from "@mui/material";

export const Overview = () => {

    const { books } = useContext(BookContext);

    return (
        <div>
            <h2 className="center-text">Catalogo de Libros</h2>
            <div className="book-container">

                {
                    books.length > 0 ? (
                        books.map((book, index) => (
                            <Books
                                key={index}
                                id={book.id}
                                name={book.volumeInfo.title}
                                url_book={book.volumeInfo.previewLink}
                                authors={book.volumeInfo.authors}
                                publisher={book.volumeInfo.publisher}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }

                {}
            </div>
        </div>
    );
}