import { Nav, Navbar, Container } from "react-bootstrap";

const ResolverNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Resolver</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/publics/pcfl">PCFL</Nav.Link>
                    <Nav.Link>About_Creator</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default ResolverNavbar;