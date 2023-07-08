import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <React.Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            <p>ProShop &copy; {currentYear}</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

