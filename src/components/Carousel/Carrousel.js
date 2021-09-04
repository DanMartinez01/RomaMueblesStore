import React from 'react';
import { Carousel } from 'react-bootstrap';

import image3 from './Img/3.jpg';
import image4 from './Img/4.jpg';

export const Carrousel = () => {
    return (
        <div>
            <Carousel variant="dark" fade={true} pause={false} controls={true}  >

                <Carousel.Item align="center" interval={2000} >
                    <Carousel.Caption>
                    </Carousel.Caption>
                    <img
                        className="carrousel-Img"
                        width="70%"
                        height="30%"
                        fluid
                        src={image3}
                        alt="cama box con cajones"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" interval={2000}>
                    <img
                        className="carrousel-Img"
                        width="70%"
                        height="30%"
                        fluid
                        src={image4}
                        alt="cama box con cajones"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item align="center" interval={2000}>
                    <img
                        className="carrousel-Img"
                        width="70%"
                        height="30%"
                        fluid
                        src={image3}
                        alt="cama box con cajones"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrousel;