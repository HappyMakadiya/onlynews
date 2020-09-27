import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.svg";
class NavBar extends React.Component{
    render() {
        return (
            <Navbar bg="light"  expand="lg" sticky="top">
                {/*<Navbar.Brand href="#home">*/}
                {/*    <img*/}
                {/*        src={logo}*/}
                {/*        width="300px"*/}
                {/*        alt="React Bootstrap logo"*/}
                {/*    />*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        )
    }
}
export default NavBar