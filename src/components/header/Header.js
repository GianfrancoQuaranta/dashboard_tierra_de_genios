// import de react
import React from 'react';
import { Link } from 'react-router-dom';

// import css
import './Header.css'

// import images
import logo from '../../assets/img/generales/tierra-de-genios-texto-logo-1.png'

function Header() {
    return (
        <header id='header-box'>
            <figure id='header-figure'>
                <img id="logo-tdg-header" src={logo} alt="Logotipo principal" />
                <p id="title-dashboard">DASHBOARD TIERRA DE GENIOS</p>
            </figure>
            <nav>
                <Link to='/' className='link-nav'>Home</Link>
                <Link to='/totales' className='link-nav'>Totales</Link>
                <Link to='/lastProduct' className='link-nav'>Last Product</Link>
                <Link to='/inDB' className='link-nav'>In Database</Link>
                <Link to='/usersTable' className='link-nav'>Users Table</Link>
            </nav>
        </header>
    )
}

export default Header;