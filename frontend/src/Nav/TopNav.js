import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from "./NavLinks";
import './TopNav.scss';

function TopNav() {
    return (
        <div id="top-nav-container">
            <Navbar expand="md" className="flex-column">
                <Container className="justify-content-center" fluid>
                    <Navbar.Brand className="mx-auto text-center" href="/">dex fitch | portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-nav" className="mx-auto" />
                </Container>
                <Container className="justify-content-center" fluid>
                    <Navbar.Collapse className="justify-content-center" id="main-nav">
                        <Nav className="mx-auto">
                            <NavLinks />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;
