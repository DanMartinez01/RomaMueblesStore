import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa';

export const NavBar = (props) => {

    return (
        <header className="head">
            <Link className="links" to='/'> <h3><b>Roma Muebles</b></h3> </Link>
            <nav>
                <ul className="links">
                    <li ><Link className="link" to='/AboutUs'>Nosotros</Link></li>
                    <li ><Link className="link" to='/ProductDetails'>Camas</Link></li>
                    <li ><Link className="link" to='/Contact'>Contacto</Link></li>
                </ul>
            </nav >
            <div className="right">
                <FaInstagram
                    fontSize="large"
                    color="black"
                />
                <FaFacebookSquare
                    fontSize="large"
                    color="black">
                </FaFacebookSquare>
            </div>

        </header >
    )
}
export default NavBar