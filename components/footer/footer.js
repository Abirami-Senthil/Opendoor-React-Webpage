import { Row, Col, Container, Image } from 'react-bootstrap'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className={styles.footer}>
            <Container className={styles.footerText}>
                <Row md={4}>
                    <Col>
                        <strong>SERVICE</strong>
                        <li>Sell your home</li>
                        <li>Buy a home</li>
                        <li>Trade-in</li>
                        <br />
                        <strong>CUSTOMERS</strong>
                        <li>Home seller</li>
                        <li>Home buyer</li>
                        <li>Real estate agents</li>
                        <li>Homebuilders</li>
                        <li>Agents</li>
                    </Col>

                    <Col>
                        <strong>ABOUT US</strong>
                        <li>Who are we</li>
                        <li>Contact us</li>
                        <li>Jobs</li>
                        <li>How it works</li>
                        <li>Press</li>
                        <li>Pricing</li>
                        <br />
                        <strong>RESOURCES</strong>
                        <li>Guides</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                    </Col>

                    <Col>
                        <strong>ABOUT US</strong>
                        <li>Who are we</li>
                        <li>Contact us</li>
                        <li>Jobs</li>
                        <li>How it works</li>
                        <li>Press</li>
                        <li>Pricing</li>
                        <br />
                        <strong>RESOURCES</strong>
                        <li>Guides</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                    </Col>

                    <Col>
                        <strong><p>GET THE APP</p></strong>
                        <p><Image src="/app_store.png" width="170" height="50" rounded /></p>
                        <p><Image src="/google_play.png" width="170" height="50" rounded /></p>
                    </Col>
                </Row>

                <br /><br />
                <Row md={3}>
                    <Col></Col>
                    <Col>
                        <span href="#home" className={styles.icons}><FontAwesomeIcon icon={faFacebookF} /></span>
                        <span href="#home" className={styles.icons}><FontAwesomeIcon icon={faTwitter} /></span>
                        <span href="#home" className={styles.icons}><FontAwesomeIcon icon={faLinkedinIn} /></span>
                    </Col></Row>
            </Container>
        </div>
    )
}


export default Footer