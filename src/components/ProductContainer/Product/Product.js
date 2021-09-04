import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import image3 from '../../../components/Carousel/Img/3.jpg';
import image6 from '../../../components/Carousel/Img/6.jpg';
import image7 from '../../../components/Carousel/Img/7.jpg';

export const Product = () => {

    return (
        <div>
            <h1 className="categoriesTitle">Nuestros productos</h1>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
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
                                    <Link className="infoSectionLink" to='/Camas'><p> CAMAS</p></Link>
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
                                    <Link to='/Mesasdeluz'>
                                        <img src={image6} className="productPhoto"
                                            alt="mesa de luz flotante"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/Mesasdeluz'><p>MESAS DE LUZ</p></Link>
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
                                    <Link to='/Respaldos'>
                                        <img src={image7} className="productPhoto"
                                            alt="respaldos de melamina"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/Respaldos'><p>RESPALDOS</p></Link>
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
                                    <Link to='/Combos'>
                                        <img src={image3} className="productPhoto"
                                            alt="cambo: cama mesita de luz respaldo"
                                        />
                                    </Link>
                                </div>
                                <div className="colorStripe">
                                    <br />
                                    <Link className="infoSectionLink" to='/Combos'><p>PEDI EL COMBO!</p></Link>
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