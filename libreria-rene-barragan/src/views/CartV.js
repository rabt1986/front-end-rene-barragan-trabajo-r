import React, {useContext} from 'react';
import '../styles/styles.css';
import {CartC} from "../components/CartC";
import {BookContext} from "../context/BookContext";


export const CartV = () => {

    const { cart, books } = useContext(BookContext);

    try {
        return books.length > 0 ? (
            books.map((carrito, index) => (
                <CartC
                    key={index}
                    id={carrito.id}
                    name={carrito.volumeInfo.title}
                />
            ))
        ) : (
            <p>No hay libros en el carrito</p>
        );
    } catch (error) {
        console.error("Error rendering cart items:", error);
        return <p>Ocurrio un error al cargar el carrito</p>;
    }
}