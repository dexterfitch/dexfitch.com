import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <Row>
                <Col md={12} className="p-0">
                <h1>Home.js</h1>
                <p>Welcome to the portfolio and project gallery of me, Dex!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;