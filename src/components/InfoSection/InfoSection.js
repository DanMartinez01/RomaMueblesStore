import React from 'react';
import './InfoSection.css';
import { Link } from 'react-router-dom';
import mercadolibre from '../Carousel/Img/mercadolibre.png'


export const InfoSection = () => {
    return (
        <div className="main-info-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4><b>Horarios de atención</b></h4>
                        <ui className="list-unstyled">
                            <li>Lun a Vier de 8 a 19</li>
                            <li>Sábados de 10 a 18</li>
                        </ui>
                    </div>
                    <div className="col">
                        <h4><b>Productos</b></h4>
                        <ui className="list-unstyled">
                            <Link className="infoSectionLink" to='/Camas'>Camas</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Mesasdeluz'>Mesas de luz</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Respaldos'>Respaldos</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Combos'>Combos</Link>
                        </ui>
                    </div>
                    <div className="col">
                        <h4><b>Links Utiles</b></h4>
                        <ui className="list-unstyled">
                            <Link className="infoSectionLink" to='/'>Home</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Nosotros'>Nosotros</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Contacto'>Contacto</Link>
                            <br />
                            <a className="infoSectionLink" target="_blank" rel="noreferrer"
                                href="https://www.facebook.com/Roma-muebles-110762931290216/">
                                Seguinos
                            </a>
                        </ui>
                    </div>
                    <div className="col">
                        <h4><b>Encontranos en<br /> Mercado Libre</b></h4>
                        <ui className="list-unstyled">
                            <a
                                href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                                target="_blank"
                                rel="noopener noreferrer">
                                <p className="btn-meLi-infoSection"><img alt="mercado libre" src={mercadolibre} width="100px" height="30 px" /></p>
                            </a>

                        </ui>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
export default InfoSection