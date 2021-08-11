import React from 'react';
import './Product.css'

import image3 from '../../../components/Carousel/Img/3.jpg';

export const Product = () => {

    return (
        <div>
            <div className="product">
                <img
                    className="productImage"
                    width="32%"
                    height="30%"
                    src={image3}
                    alt="First slide"
                />
                <img
                    className="productImage"
                    width="32%"
                    height="30%"
                    src={image3}
                    alt="First slide"
                />
                <img
                    className="productImage"
                    width="32%"
                    height="30%"
                    src={image3}
                    alt="First slide"
                />
            </div>
        </div>
    )
}
export default Product