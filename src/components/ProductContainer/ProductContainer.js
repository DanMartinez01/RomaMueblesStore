import React from 'react';
import './ProductContainer.css';
import { Product } from './Product/Product'
import { SiWhatsapp } from "react-icons/si";

export const ProductContainer = () => {
    return (
        <div class="productContainer"

        >
            <h3 className="categoriesTitle">Nuestros productos</h3>
            <a
                href="https://wa.me/5491160482934"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiWhatsapp />
            </a>
            <Product />
        </div>
    )
}
export default ProductContainer