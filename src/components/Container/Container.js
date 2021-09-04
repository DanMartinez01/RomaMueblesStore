import React from 'react';
import './Container.css'
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Carrousel } from '../Carousel/Carrousel'
import { InfoSection } from '../InfoSection/InfoSection'
import { Footer } from '../Footer/Footer'
import { SiWhatsapp } from "react-icons/si";
import { Product } from '../ProductContainer/Product/Product';
import quality from '../Carousel/Img/qualityIcon.png';

export const Container = () => {

    return (
        <div className="page-container">
            <div>
                <a
                    href="https://wa.me/5491130666726"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className=" whatsapp-icon">
                        <SiWhatsapp size="large" />
                    </i>
                </a>
            </div>
            <NavBarComponent />
            <div className="bannerStripeContainer">
                <h1 className="bannerStripeContainerText">

                    Atención personalizada
                    <br />
                    Calidad Premium
                    <span>
                        <img alt="calidad" className="qualityIcon-Img" fluid src={quality} width="55px" height="50px" />
                    </span>
                </h1>

            </div>
            {/* <svg height="50%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 80.64114832535887,218.8133971291866 161.28229665071774,237.6267942583732 264,245 C 366.71770334928226,252.3732057416268 491.51196172248797,248.30622009569376 593,226 C 694.488038277512,203.69377990430624 772.6698564593302,163.14832535885168 867,164 C 961.3301435406698,164.85167464114832 1071.8086124401914,207.10047846889952 1170,220 C 1268.1913875598086,232.89952153110048 1354.0956937799042,216.44976076555025 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#e67e22ff" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg> */}
            <Carrousel />
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Container