import React from 'react'
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const NavBar = () => {
  const { auth, setAuth } = useAuth();

  let navigate = useNavigate()
  const handleLogout = () => {
    setAuth('');
    navigate("/", {replace:true})
  }



  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <Image src="images/White_pizza-logo.jpg" alt="Logo Pizza Delicious" style={{width:'20%'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {
              auth?._id ? 
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link> :             <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            }
            <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar