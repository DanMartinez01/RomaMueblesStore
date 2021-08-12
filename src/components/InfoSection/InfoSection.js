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
                        <h4><b>Horarios de atención</b></h4>
                        <ui className="list-unstyled">
                            <li>Lun a Vier de 10 a 19</li>
                            <li>Sábados de 10 a 18</li>
                            <li>Dom: Cerrado</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4><b>Links utiles</b></h4>
                        <ui className="list-unstyled">
                            <li>Camas</li>
                            <li>Mesitas</li>
                            <li>Combos</li>
                        </ui>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
export default InfoSection