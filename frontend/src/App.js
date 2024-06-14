import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBuffer from "./Utilities/TopBuffer";
import TopNav from "./Nav/TopNav";
import NotFound from "./NotFound";
import Home from "./Home";
import Web from "./Views/Web";
import Graphics from "./Views/Graphics";
import Drawings from "./Views/Drawings";
import Writing from "./Views/Writing";
import Videos from "./Views/Videos";
import Animations from "./Views/Animations";

function App() {
    return (
        <Container className="p-0" fluid>
            <TopBuffer />
            <TopNav />
            <Row className="py-4" id="main">
                <Col>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/web" element={<Web />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/graphics" element={<Graphics />} />
                        <Route path="/drawings" element={<Drawings />} />
                        <Route path="/animations" element={<Animations />} />
                        <Route path="/writing" element={<Writing />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
}

export default App;