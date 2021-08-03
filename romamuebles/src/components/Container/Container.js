import React from 'react';
// import './Container.css'
import { NavBar } from '../NavBar/NavBar'
import { Carrousel } from '../Carousel/Carrousel'
import { ProductContainer } from '../ProductContainer/ProductContainer'
import { Footer } from '../Footer/Footer'

export const Container = (props) => {

    return (
        <div class="container-body">
            <NavBar />
            <Carrousel />
            <ProductContainer />
            <Footer />
        </div>
    )
}

export default Container