import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import image3 from '../../../components/Carousel/Img/3.jpg';
import image5 from '../../../components/Carousel/Img/5.jpg';
import image7 from '../../../components/Carousel/Img/7.jpg';

// export const Product = () => {

//     return (
//         <div>
//             <div className="product">
//                 <img
//                     className="productImage"
//                     width="32%"
//                     height="30%"
//                     src={image3}
//                     alt="First slide"
//                 />
//                 <img
//                     className="productImage"
//                     width="32%"
//                     height="30%"
//                     src={image3}
//                     alt="First slide"
//                 />
//                 <img
//                     className="productImage"
//                     width="32%"
//                     height="30%"
//                     src={image3}
//                     alt="First slide"
//                 />
//             </div>
//         </div>
//     )
// }
// export default Product

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
                                        <img src={image5} className="productPhoto"
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