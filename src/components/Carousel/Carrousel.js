import React from 'react';
import { Carousel } from 'react-bootstrap';


import image3 from './Img/3.jpg';
import image4 from './Img/4.jpg';
import image7 from './Img/7.jpg';

export const Carrousel = () => {
    return (
        <Carousel fade={true} pause={false} controls={false}>

            <Carousel.Item interval={3000}>

                <img
                    className="carrouselImg"
                    width="100%"
                    height="500px"
                    src={image3}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carrouselImg"
                    width="100%"
                    height="500px"
                    src={image4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    {/* <h3>Muebles a medida</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item interval={3000}>
                <img
                    className="carrouselImg"
                    width="100%"
                    height="550px"
                    src={image5}
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item interval={3000}>
                <img
                    className="carrouselImg"
                    width="100%"
                    height="500px"
                    src={image7}
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