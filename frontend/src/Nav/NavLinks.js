import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavLinks() {

    return (
        <>
            <LinkContainer to="/web">
                <Nav.Link>Web</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/videos">
                <Nav.Link>Videos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/graphics">
                <Nav.Link>Graphics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/drawings">
                <Nav.Link>Drawings</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/animations">
                <Nav.Link>Animations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/writing">
                <Nav.Link>Writing</Nav.Link>
            </LinkContainer>
        </>
    );
}

export default NavLinks;
