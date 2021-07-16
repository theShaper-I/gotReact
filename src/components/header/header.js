import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-block">
                <a href="#">
                Game of Thrones DB
                </a>
            </div>
            <div className="header-links">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </div>
        </div>
    );
};

export default Header;