import React from 'react';
import './ProductDetails.css';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import { Product } from '../ProductContainer/Product/Product';

import image4 from '../Carousel/Img/4.jpg';
import image5 from '../Carousel/Img/5.jpg';
import image6 from '../Carousel/Img/6.jpg';

export const ProductDetails = () => {

    return (
        <div>
            <NavBar />
            <div className="product">
                <div className="productImage">
                    <img
                        className="productImage"
                        width="30%"
                        height="30%"
                        src={image4}
                        alt="First slide"
                    />
                    <p>Some text </p>
                    <br />
                    <p>Some text </p>
                </div>
                <div className="productImage">
                    <img
                        className="productImage"
                        width="30%"
                        height="30%"
                        src={image4}
                        alt="First slide"
                    />
                    <p>Some text </p>
                    <br />
                    <p>Some text </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ProductDetails