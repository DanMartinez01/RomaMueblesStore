import React from 'react';
import './Product.css'

import image6 from '../../../components/Carousel/Img/6.jpg';

export const Product = () => {

    return (
        <div>
            <div className="product">
                <img
                    className="productImage"
                    width="30%"
                    height="30%"
                    src={image6}
                    alt="First slide"
                />
                <img
                    className="productImage"
                    width="30%"
                    height="30%"
                    src={image6}
                    alt="First slide"
                />
                <img
                    className="productImage"
                    width="30%"
                    height="30%"
                    src={image6}
                    alt="First slide"
                />
            </div>
        </div>
    )
}
export default Product