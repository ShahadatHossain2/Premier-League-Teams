import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="headerStyle">
            {
                props.title
            }
        </div>
    );
};

export default Header;