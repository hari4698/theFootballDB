import Link from 'next/link'
import styles from './navbar.module.css'
import Search from './search'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function MainNavBar() {
    return (<Navbar bg="navbar" expand="lg" variant="dark" sticky="top">
        <Link href="/" passHref>
            <Navbar.Brand href="/">theFootballDB</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mainBar">
                <Link href="/league" passHref>
                    <Nav.Link href="/league">Leagues</Nav.Link>
                </Link>
                <Link href="/team" passHref>
                    <Nav.Link href="/team">Teams</Nav.Link>
                </Link>
                <Link href="/player" passHref>
                    <Nav.Link href="/player">Players</Nav.Link>
                </Link>
            </Nav>
        </Navbar.Collapse>
        <Form inline>
            <FormControl type="text" placeholder="Search" />
            <Button variant="dark">Search</Button>
        </Form>
    </Navbar>
    )
}

export default MainNavBar;