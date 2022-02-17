import React, { useState } from "react";
import {
    Button,
    CloseButton,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
    Row,
    Toast,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <div className="nav">
            <Navbar
                style={{
                    // position: "fixed",
                    // background: "#002347",
                    width: "100%",
                    height: "70px",
                    // background: "transparent! important",
                    position: "absolute",
                    zIndex: "10",
                    backgroundColor: " transparent",
                    background: " transparent",
                }}
            >
                <Container>
                    <Navbar.Brand
                        href="#home"
                        style={{ color: "#fdc632", marginLeft: "90px" }}
                    >
                        Navbar
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{ color: "white" }}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#features" style={{ color: "white" }}>
                            Features
                        </Nav.Link>
                        <Nav.Link href="#pricing" style={{ color: "white" }}>
                            Pricing
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div class="cont">
                <img
                    src="https://static.cnews.fr/sites/default/files/dans_quel_ordre_regarder_naruto_-taille1200_605cb1caa419b.jpg"
                    alt="Notebook"
                    style={{ width: "100%", height: "500px" }}
                />
                <div class="content">
                    <h1 style={{ color: "#fdc632" }}>NARUTO</h1>
                    <h3>Welcom Naruto's Lovers </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;
