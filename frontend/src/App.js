import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNav from "./Nav/TopNav";
import NotFound from "./NotFound";
import Home from "./Home";
import Web from "./Views/Web";
import Grafx from "./Views/Grafx";
import Drawing from "./Views/Drawing";
import Writing from "./Views/Writing";
import Craft from "./Views/Craft";

function App() {
    return (
        <Container className="p-0" fluid>
            <TopNav />
            <Row id="main">
                <Col>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/web" element={<Web />} />
                        <Route path="/grafx" element={<Grafx />} />
                        <Route path="/drawing" element={<Drawing />} />
                        <Route path="/writing" element={<Writing />} />
                        <Route path="/craft" element={<Craft />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
}

export default App;