import React from 'react';
import { Carousel } from 'react-bootstrap';


import image10 from './Img/10.jpg';
import image11 from './Img/11.jpg';
import image12 from './Img/12.jpg';
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
                        src={image10}
                        alt="cama box con cajones"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" interval={2000}>
                    <img
                        className="carrousel-Img"
                        width="70%"
                        height="30%"
                        fluid
                        src={image11}
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
                        src={image12}
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