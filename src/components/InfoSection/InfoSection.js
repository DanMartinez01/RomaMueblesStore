import React from 'react';
import './InfoSection.css';


export const InfoSection = () => {
    return (
        // <div className="infoSection">
        //     <div className="infoText">
        //         <p><b>Horarios de atencion</b></p>
        //         <p>Lun a Vier de 10 a 19</p>
        //         <p>Sábados de 10 a 18</p>
        //         <p>Dom:Cerrado</p>
        //     </div>
        //     <div className="infoText" >
        //         <p><b>Informacion Util</b></p>
        //         <p>Home</p>
        //         <p>Nosotros</p>
        //         <p>Contacto</p>
        //     </div>
        //     <div className="infoText" >
        //         <p><b>Productos</b></p>
        //         <p>Camas</p>
        //         <p>Mesas</p>
        //         <p>Combos</p>
        //     </div>

        // </div >

        <div className="main-info-section">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>THICC MEMES INC</h4>
                        <ui className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Streeet South North</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Stuff</h4>
                        <ui className="list-unstyled">
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>GUD STUFF</li>
                        </ui>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
export default InfoSection