import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import image3 from '../../../components/Carousel/Img/3.jpg';
import image6 from '../../../components/Carousel/Img/6.jpg';
import image7 from '../../../components/Carousel/Img/7.jpg';

export const Product = () => {

    return (
        <div>
            <h1 className="categoriesTitle">Categorías</h1>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <Link to='/Beds'>
                                        <img src={image3} className="productPhoto"
                                            alt="cama box con cajones"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/Beds'><p> CAMAS</p></Link>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <Link to='/Tables'>
                                        <img src={image6} className="productPhoto"
                                            alt="cama box con cajones"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/Beds'><p>MESAS DE LUZ</p></Link>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <Link to='/BedFrames'>
                                        <img src={image7} className="productPhoto"
                                            alt="cama box con cajones"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/BedFrames'><p>RESPALDOS</p></Link>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <Link to='/Sets'>
                                        <img src={image3} className="productPhoto"
                                            alt="cama box con cajones"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/Sets'><p>PEDI EL COMBO!</p></Link>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}
export default Product