import React from 'react';
import './Banner.css';

// import qualityIcon from '../Carousel/Img/quality.jpg';
import bannerImg from '../Carousel/Img/Banner5.jpg';

export const Banner = () => {

    return (
        <div>
            <img
                width="100%"
                // height="180px"
                src={bannerImg}
                alt="quality icon"
                fluid
            />
        </div>

    )
}

export default Banner