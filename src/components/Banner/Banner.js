import React from 'react';
import './Banner.css';

// import qualityIcon from '../Carousel/Img/quality.jpg';
import bannerImg from '../Carousel/Img/Banner3.jpg';

export const Banner = () => {

    return (
        // <div className="banner">
        //     <img
        //         width="100%"
        //         height="60%"
        //         src={bannerImg}
        //         alt="quality icon"
        //         fluid
        //     />
        // </div>
        <img
            width="100%"
            height="180px"
            src={bannerImg}
            alt="quality icon"
            fluid
        />
    )
}

export default Banner