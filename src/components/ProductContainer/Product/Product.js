import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import image3 from '../../../components/Carousel/Img/3.jpg';
import image6 from '../../../components/Carousel/Img/6.jpg';
import image7 from '../../../components/Carousel/Img/7.jpg';

export const Product = () => {

    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: { type: 'spring', duration: 1, bounce: 0.3 }
            })
        }
        if (!inView) {
            animation.start({ x: '-100vw' })
        }
    })
    return (
        <div>
            <h1 className="categoriesTitle">Nuestros productos</h1>
            <motion.ol ref={ref}
                className="wrapper"
            >
                <motion.li
                    animate={animation}
                    className="product">
                    <div className="productContainer" >
                        <div className="imgContainer">
                            <Link to='/Camas'>
                                <img src={image3} className="productPhoto"
                                    alt="cama box con cajones"
                                />
                            </Link>
                        </div>
                        <div className="colorStripe">
                            <br />
                            <Link className="infoSectionLink" to='/Camas'>
                                <p className="categoriesText">Camas</p>
                            </Link>
                            <br />
                        </div>
                    </div>
                </motion.li>
                <motion.li className="product"
                    animate={animation}>
                    <div className="productContainer" >
                        <div className="imgContainer">
                            <Link to='/Mesasdeluz'>
                                <img src={image6} className="productPhoto"
                                    alt="mesa de luz flotante"
                                />
                            </Link>
                        </div>
                        <div className="colorStripe">
                            <br />
                            <Link className="infoSectionLink" to='/Mesasdeluz'>
                                <p className="categoriesText">Mesas de luz</p>
                            </Link>
                            <br />
                        </div>
                    </div>
                </motion.li>
                < motion.li className="product"
                    animate={animation}>
                    <div className="productContainer" >
                        <div className="imgContainer">
                            <Link to='/Respaldos'>
                                <img src={image7} className="productPhoto"
                                    alt="respaldos de melamina"
                                />
                            </Link>
                        </div>
                        <div className="colorStripe">
                            <br />
                            <Link className="infoSectionLink" to='/Respaldos'>
                                <p className="categoriesText">Respaldos</p>
                            </Link>
                            <br />
                        </div>
                    </div>
                </motion.li>
                <motion.li className="product"
                    animate={animation}>
                    <div className="productContainer" >
                        <div className="imgContainer">
                            <Link to='/Combos'>
                                <img src={image3} className="productPhoto"
                                    alt="cambo: cama mesita de luz respaldo"
                                />
                            </Link>
                        </div>
                        <div className="colorStripe">
                            <br />
                            <Link className="infoSectionLink" to='/Combos'>
                                <p className="categoriesText">Pedí el combo!</p>
                            </Link>
                            <br />
                        </div>
                    </div>
                </motion.li>
            </motion.ol >

        </div>
    )
}
export default Product