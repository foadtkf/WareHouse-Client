import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Nav, Navbar} from 'react-bootstrap';
import auth from "../../firebase.init";
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg'
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt="" className="rounded-pill"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Items</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="addservice">AddItems</Nav.Link>
                                <Nav.Link as={Link} to="manageservice">ManageItems</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none' style={{color:'gray'}} onClick={handleSignOut}>sign out</button>
                                    
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
  );
};

export default Header;
