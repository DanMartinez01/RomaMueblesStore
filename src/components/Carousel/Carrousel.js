import React from 'react';
import { Carousel } from 'react-bootstrap';


// import image3 from './Img/3.jpg';
// import image4 from './Img/4.jpg';
// import image7 from './Img/7.jpg';
import image9 from './Img/9.jpg';
import image10 from './Img/10.jpg';
import image11 from './Img/11.jpg';

export const Carrousel = () => {
    return (

        <Carousel fade={true} pause={false} controls={false} >
            <Carousel.Item interval={3000} >
                <img
                    className="d-block w-100"
                    src={image9}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img

                    className="d-block w-100"
                    src={image10}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    {/* <h3>Muebles a medida</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img

                    className="d-block w-100"
                    src={image11}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    {/* <h2>Muebles a medida</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
}

export default Carrousel;