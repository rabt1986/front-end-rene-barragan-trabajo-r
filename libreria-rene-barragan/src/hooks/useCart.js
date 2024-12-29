import {useEffect, useState} from "react";

export const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
    
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
     }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (book) => {
    setCart([...cart, { id: book.id, name: book.volumeInfo.title }]);
    };

    const removeFromCart = (bookId) => {
        setCart(cart.filter(book => book.id !== bookId));
    };

    return {
        cart,
        addToCart,
        removeFromCart
    };
    
}