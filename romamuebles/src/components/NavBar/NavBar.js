import React from 'react';
import './NavBar.css';
// import { useEffect } from 'react';

import { Link } from 'react-router-dom';

// import { CartContext } from '../../context/cartContext';

export const NavBar = (props) => {
    // const [scrolled, setScrolled] = React.useState(false);

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > 200) {
    //         setScrolled(true);
    //     }
    //     else {
    //         setScrolled(false);
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // })

    // let x = ["navbar"];
    // if (scrolled) {
    //     x.push("scrolled");
    // }

    return (
        <header className="head">

            <Link className="links" to='/'> <h3><b>Roma Muebles</b></h3> </Link>

            <nav>
                <ul className="links">
                    {/* <li className="link"><Link to='/category/Sunglasses'><b>Sunglasses</b></Link></li>
                    <li className="link"><Link to='/category/Earrings'> <b>Earrings</b></Link></li> */}
                    <li ><Link className="link" to='/AboutUs'>Nosotros</Link></li>
                    <li ><Link className="link" to='/ProductDetails'>Productos</Link></li>
                    <li ><Link className="link" to='/Contact'>Contacto</Link></li>
                </ul>
            </nav >
        </header >
    )
}
export default NavBar