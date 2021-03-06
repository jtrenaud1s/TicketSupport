import { Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <Navbar variant="dark" bg="dark" sticky="top" expand="md" className="flex-md-nowrap p-0 shadow">
      <Navbar.Brand as={Link} className="col-md-3 col-lg-2 me-0 px-3" to="/dashboard">Support</Navbar.Brand>

      <Navbar.Toggle className="position-absolute d-md-none collapsed" aria-controls="sidebarMenu">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>

      <Form.Control className="form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
      
      <Nav>
        <Nav.Link as={Link} className="px-3 text-nowrap" to="profile">Account</Nav.Link>
        <Nav.Link as={Link} className="px-3 text-nowrap" to="logout">Sign out</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopNav