import React from 'react';
import { Carousel } from 'react-bootstrap';


// import image10 from './Img/10.jpg';
// import image11 from './Img/11.jpg';
// import image12 from './Img/12.jpg';
import image14 from './Img/14.jpg';
import image15 from './Img/15.jpg';
export const Carrousel = () => {
    return (
        <div>
            <Carousel variant="dark" fade={true} pause={false} controls={false}  >

                <Carousel.Item align="center" interval={2000} >
                    <Carousel.Caption>
                    </Carousel.Caption>
                    <img
                        className="carrousel-Img"
                        width="100%"
                        // height="40%"
                        // fluid
                        src={image14}
                        alt="cama box con cajones"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" interval={2000}>
                    <img
                        className="carrousel-Img"
                        width="100%"
                        // height="40%"
                        // fluid
                        src={image15}
                        alt="cama box con cajones"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item align="center" interval={2000}>
                    <img
                        className="carrousel-Img"
                        width="100%"
                        // height="40%"
                        // fluid
                        src={image14}
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