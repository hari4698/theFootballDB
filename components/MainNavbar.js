import Link from 'next/link'
import styles from './navbar.module.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function MainNavBar() {
    return (<Navbar bg="navbar" expand="lg" variant="dark" sticky="top">
        <Link href="/" passHref>
            <Navbar.Brand href="/">theFootballDB</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mainBar">
                <Link href="/leagues/pl" passHref>
                    <Nav.Link href="/leagues/pl">Leagues</Nav.Link>
                </Link>
                <Link href="/teams/arsenal" passHref>
                    <Nav.Link href="/teams/arsenal">Teams</Nav.Link>
                </Link>
                <Link href="/players/ozil" passHref>
                    <Nav.Link href="/players/ozil">Players</Nav.Link>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default MainNavBar;