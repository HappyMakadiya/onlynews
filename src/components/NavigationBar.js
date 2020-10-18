import React from "react";
import {Navbar, Nav} from "react-bootstrap/cjs";
import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
class NavigationBar extends React.Component{
    render() {
        return (
            <div>
                <Container>
                    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="200"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" style={{color: '#17a2b8'}}>Instruction</Nav.Link>
                                <Nav.Link href="#" style={{color: '#17a2b8'}}>About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        
                    </Navbar>
                </Container>

            </div>
        )
    }
}
export default NavigationBar