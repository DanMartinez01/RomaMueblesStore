import React from 'react';
import { Carousel } from 'react-bootstrap';

import image3 from './Img/3.jpg';
import image4 from './Img/4.jpg';

export const Carrousel = () => {
    return (
        <div>
            {/* <h1 className="carousel-caption">Calidad</h1> */}
            <Carousel variant="dark" fade={true} pause={false} controls={true}  >

                <Carousel.Item align="center" interval={3000} >
                    <Carousel.Caption>

                    </Carousel.Caption>
                    <img
                        className="d-block w-50"
                        fluid
                        src={image3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" interval={3000}>
                    <img
                        className="d-block w-50"
                        fluid
                        src={image4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item align="center" interval={3000}>
                    <img
                        className="d-block w-50"
                        fluid
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrousel;