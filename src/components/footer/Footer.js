// import de react
import React from 'react';

// import css
import './Footer.css';

// import elements
import logo from './img/logotipo-tdg.png';

// import components

function Footer() {
    return (
        <div id='div-footer' >
            <img id="footer-logo" src={logo} alt=""/>
        </div>
    )
}

export default Footer;