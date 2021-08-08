import React from 'react';
import './InfoSection.css';


export const InfoSection = () => {
    return (
        <div className="infoSection">
            <div className="infoText">
                <p><b>Horarios de atencion</b></p>
                <p>Lun a Vier de 10 a 19</p>
                <p>Sábados de 10 a 18</p>
                <p>Dom:Cerrado</p>
            </div>
            <div className="infoText" >
                <p><b>Informacion Util</b></p>
                <p>Home</p>
                <p>Nosotros</p>
                <p>Contacto</p>
            </div>
            <div className="infoText" >
                <p><b>Productos</b></p>
                <p>Camas</p>
                <p>Mesas</p>
                <p>Combos</p>
            </div>

        </div >
    )
}
export default InfoSection