import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Thanh Duy Web</Navbar.Brand>
                <NavLink to="/" className='navbar-brand'>Thanh Duy Web</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="user" className='nav-link'>User</NavLink>
                        <NavLink to="admin" className='nav-link'>Admin</NavLink>
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="users">User</Nav.Link>
                        <Nav.Link href="admin">Admin</Nav.Link> */}

                    </Nav>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item>Log in</NavDropdown.Item>
                        <NavDropdown.Item>Log out</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>


                    </NavDropdown>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;