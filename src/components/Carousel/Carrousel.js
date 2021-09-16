import React from 'react';
import { Carousel } from 'react-bootstrap';
import image14 from './Img/14.jpg';
import image15 from './Img/15.jpg';

export const Carrousel = () => {

    return (
        <div>
            <Carousel variant="dark" fade={true} slide={false} >
                <Carousel.Item align="center" >
                    <Carousel.Caption>
                    </Carousel.Caption>
                    <img
                        className="carrousel-Img"
                        width="100%"
                        src={image14}
                        alt="cama box con cajones"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" >
                    <img
                        className="carrousel-Img"
                        width="100%"
                        src={image15}
                        alt="cama box con cajones"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default Carrousel;