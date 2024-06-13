import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavLinks() {

    return (
        <>
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/web">
                <Nav.Link>Web Development</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/grafx">
                <Nav.Link>Graphic Design</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/drawing">
                <Nav.Link>Drawing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/writing">
                <Nav.Link>Writing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/craft">
                <Nav.Link>Craft</Nav.Link>
            </LinkContainer>
        </>
    );
}

export default NavLinks;
