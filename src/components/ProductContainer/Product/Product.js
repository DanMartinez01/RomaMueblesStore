import React from 'react';
import './Product.css'

import image3 from '../../../components/Carousel/Img/3.jpg';

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
        <div className="body-container">
            <div className="prodContainer">
                <div class="box">
                    <div class="imgBx">
                        <img src={image3}
                            alt="cama box"
                        />
                    </div>
                    <div className="content">
                        <h2>Camas<br />
                            <span>
                                Cama Box con 6 cajones en total
                            </span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBx">
                        <img src={image3}
                            alt="cama box"
                        />
                    </div>
                    <div className="content">
                        <h2>Mesitas de luz<br /><span></span></h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBx">
                        <img src={image3}
                            alt="cama box"
                        />
                    </div>
                    <div className="content">
                        <h2>Respaldos<br /><span></span></h2>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Product