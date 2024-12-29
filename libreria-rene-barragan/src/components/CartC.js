import React, {useContext} from 'react';
import { BookContext } from "../context/BookContext"; 

export const CartC = ({ id, name }) => {
    const {removeFromCart} = useContext(BookContext);
    return (
        <div className="cart-container">
            <h2>Cart</h2>
                <p>Id: {id}</p>
                <p>Titulo: {name}</p>                    
                <button onClick={() => removeFromCart(id)}>Remove</button>
                
        </div>
    );
}