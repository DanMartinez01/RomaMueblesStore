import React from 'react';
import { Carousel } from 'react-bootstrap';


import image6 from './Img/6.jpg';

export const Carrousel = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={3000}>
                <img
                    className="carrouselImg"
                    width="100%"
                    height="10%"
                    src={image6}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>Muebles a medida</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carrouselImg"
                    width="100%"
                    height="10%"
                    src={image6}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    {/* <h3>Muebles a medida</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carrouselImg"
                    width="100%"
                    height="10%"
                    src={image6}
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