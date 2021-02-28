import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import Menu from './components/MenuComponent';

import { DISHES } from './shared/dishes';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <img src={logo} style={{height:`40px`}} alt="logo" />
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      
      <Menu dishes={DISHES}/>
    </div>
  );
}

export default App;
