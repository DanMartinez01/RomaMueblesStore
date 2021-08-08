
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Contact" component={Contact}>
          <Contact />
        </Route>
        <Route path="/ProductDetails" component={ProductDetails}>
          <ProductDetails />
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

