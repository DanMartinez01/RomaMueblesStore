import React from 'react';
// import './Container.css'
import { NavBar } from '../NavBar/NavBar'
import { Banner } from '../Banner/Banner'
import { Carrousel } from '../Carousel/Carrousel'
import { ProductContainer } from '../ProductContainer/ProductContainer'
import { InfoSection } from '../InfoSection/InfoSection'
import { Footer } from '../Footer/Footer'

export const Container = (props) => {

    return (
        <div class="container-body">
            <NavBar />
            <Banner />
            <Carrousel />
            <ProductContainer />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Container