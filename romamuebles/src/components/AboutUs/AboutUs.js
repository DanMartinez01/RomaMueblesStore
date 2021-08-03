import React from 'react';
import './AboutUs.css';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';


import image4 from '../Carousel/Img/4.jpg';
import image5 from '../Carousel/Img/5.jpg';
import image6 from '../Carousel/Img/6.jpg';
export const AboutUs = () => {

    return (
        <div>
            <NavBar />
            <div>
                {/* <h3>Nosotros</h3> */}
                <div className="product">

                    <img
                        className="productImage"
                        width="50%"
                        height="20%"
                        src={image4}
                        alt="First slide"
                    />
                    <div className="aboutDescription">
                        <h3> <b>Quienes somos</b></h3>
                        <p><b>Empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        <br />
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente</b></p>
                        <br />
                        <p><b> Desde hace mas de 10 años junto a vos.</b></p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default AboutUs