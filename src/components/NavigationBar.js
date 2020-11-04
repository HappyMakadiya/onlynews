import React from "react";
import {Navbar} from "react-bootstrap/cjs";
import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
class NavigationBar extends React.Component{
    render() {
        return (
            <div>
                <Container>
                    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                            <Navbar.Brand>
                                <img
                                    src={logo}
                                    width="200"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>

                    </Navbar>
                </Container>

            </div>
        )
    }
}
export default NavigationBar