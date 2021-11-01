import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <Navbar.Collapse
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
    >
      <div className="position-sticky pt-3">
        <Nav className="flex-column">
          <Nav.Link exact aria-current="page" as={NavLink} to="/" activeClassName="active">Dashboard</Nav.Link>
        </Nav>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Administration</span>
        </h6>

        <Nav className="nav flex-column mb-2">
          <NavDropdown id="management" title="User Management">
            <NavDropdown.Item aria-current="page" as={NavLink} to="/users" activeClassName="active">Users</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </div>
    </Navbar.Collapse>
  );
};

export default SideNav;
