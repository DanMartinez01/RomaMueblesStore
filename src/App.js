
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Beds } from './components/ProductDetails/Beds';
import { Tables } from './components/ProductDetails/Tables';
import { BedFrames } from './components/ProductDetails/BedFrames';
import { Sets } from './components/ProductDetails/Sets';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';
import { SiWhatsapp } from 'react-icons/si';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/Contacto" component={Contact}>
          <Contact />
        </Route>
        <Route path="/Combos" component={Sets}>
          <Sets />
        </Route>
        <Route path="/Camas" component={Beds}>
          <Beds />
        </Route>
        <Route path="/Mesasdeluz" component={Tables}>
          <Tables />
        </Route>
        <Route path="/Respaldos" component={BedFrames}>
          <BedFrames />
        </Route>
        <Route path="/Nosotros" component={AboutUs}>
          <AboutUs />
        </Route>
        <Route exact path="/" component={Container}>
          <div>
            <a
              href="https://wa.me/2348100000000"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" whatsapp-icon">
                <SiWhatsapp size="large" />
              </i>
            </a>
          </div>
          <Container />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

