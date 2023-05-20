import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, NavLink } from 'react-router-dom';

import '../NavBar/navstyless.css'

import { CartWidget } from '../CartWidget/CartWidget';



function NavBar() {
      return (
        <div>
          <Navbar collapseOnSelect expand="lg" variant="dark" className="background">
            <Container>
              <Link to='/' className="home" href="#home">
                  {/* <Navbar.Brand className="home" href="#home"> */}
                  <img
                  src='/indieandie.svg'
                  width="30"
                  height="30"
                  className="logo d-inline-block align-top"
                  alt="App logo"
                  />
                  {/* </Navbar.Brand> */}
              </Link>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink to='/category/Printed' 
                            className="btn mx-4" 
                            style={({ isActive }) => {
                      return { color: isActive ? 'mediumpurple' : 'beige'}
                    }}>Printed</NavLink>
                    <NavLink to='/category/Digital' 
                            className="btn mx-2" 
                            style={({ isActive }) => {
                      return { color: isActive ? 'mediumpurple' : 'beige'}
                    }}>Digital</NavLink>
                  </Nav>
                  
                  <Nav className="cart">
                      {/* <Nav.Link eventKey={2} href="#memes"> */}
                        <Link to='/cart'>
                          <CartWidget />
                        </Link>
                      {/* </Nav.Link> */}
                  </Nav>
                  
              </Navbar.Collapse>
            </Container>
          </Navbar>
       </div>
);
}

export default NavBar;