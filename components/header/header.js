import { Navbar, Nav, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

function Header() {
    return (
        <Navbar bg="white" variant="light">
            <Col sm={1}>
                <Navbar.Brand href="#menu"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
            </Col>
            <Col sm={4}>
                <Nav>
                    <Nav.Link href="#sell" className={styles.head}>Sell</Nav.Link>
                    <Nav.Link href="#buy" className={styles.head}><span className={styles.text}>Buy</span></Nav.Link>
                    <Nav.Link href="#trade" className={styles.head}>Trade in</Nav.Link>
                </Nav>
            </Col>
            <Col md={6}>
                <Nav.Link href="#home" className={styles.title} ><strong>Opendoor</strong></Nav.Link>
            </Col>
            <Col sm={1}>
                <Nav.Link href="#login" className={styles.head}>Login</Nav.Link>
            </Col>
            <p className={styles.p}></p>
        </Navbar>
        
    )
}

export default Header