import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Exercises</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Exercise1">Exercise 1</Nav.Link>
              <Nav.Link href="/Exercise2">Exercise 2</Nav.Link>
              <Nav.Link href="/Exercise3">Exercise 3</Nav.Link>
              <Nav.Link href="/Exercise4">Exercise 4</Nav.Link>
              <Nav.Link href="/Exercise5">Exercise 5</Nav.Link>
              <Nav.Link href="/Exercise6">Exercise 6</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;