import { Button, Row, Col, Container, Image } from 'react-bootstrap'
import styles from './Intro.module.css'

function Intro() {
    return (
        <Row md={2}>
            <Col>
                <p><Image className={styles.image} src="/opendoor.jpg" width="500" height="500" /></p>
            </Col>

            <Col>
                <Container className={styles.container}>
                    <div><strong> Buy with confidence.</strong></div>
                    <div><strong> Sell without pressure.</strong></div>
                </Container>
                <br />
                <Container className={styles.text}>
                    We'll buy your next home for you. Then we'll help you list your
                    current home for the best offer.
                </Container>
                <br />
                <Button variant="primary" size="lg" className={styles.button}>Chat with an expert</Button>{' '}
            </Col>
        </Row>
    )
}
export default Intro
