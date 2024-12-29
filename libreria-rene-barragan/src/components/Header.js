import React from "react";
import { Link } from "react-router-dom";   

export const Header = () => {
    return (
        <header className="header-footer">
            <h1 className="header-footer-text">Librería RABT</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/cart" className="header__nav-link">
                            <i className="fas fa-shopping-cart"></i> Cart
                        </Link>
                    </li>
                </ul>
            </nav>
            <form className="header__search-form">
                <input type="text" className="header__search-input" placeholder="Buscar libros..." />
                <button type="submit" className="header__search-button">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </header>
    );
}