
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Beds } from './components/ProductDetails/Beds';
import { Tables } from './components/ProductDetails/Tables';
import { BedFrames } from './components/ProductDetails/BedFrames';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Contact" component={Contact}>
          <Contact />
        </Route>
        <Route path="/Beds" component={Beds}>
          <Beds />
        </Route>
        <Route path="/Tables" component={Tables}>
          <Tables />
        </Route>
        <Route path="/BedFrames" component={BedFrames}>
          <BedFrames />
        </Route>
        <Route path="/AboutUs" component={AboutUs}>
          <AboutUs />
        </Route>
        <Route exact path="/" component={Container}>
          <Container />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

