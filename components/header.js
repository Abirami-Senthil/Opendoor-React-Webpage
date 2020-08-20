import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div>
            <Navbar bg="light" variant="light">
            <Container>
                <Row>
                    <Col>
                        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    </Col>
                    <Col>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Sell</Nav.Link>
                            <Nav.Link href="#features">Buy</Nav.Link>
                            <Nav.Link href="#pricing">Trade in</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Navbar.Text href="#opendoor">Opendoor</Navbar.Text>
                    </Col>
                    <Col>
                        <Navbar.Text>Login</Navbar.Text>
                    </Col>
                </Row>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header