import { Button, Row, Col, Image } from 'react-bootstrap'
import styles from './Procedure.module.css'

function Procedure() {
    return (
        <Row>

            <Col className={styles.margins}>
                <p className={styles.title}><strong>How it works</strong></p>
                <br />
                <Row>
                    <Col md={2}>
                        <span className={styles.number_circle}>1</span>
                    </Col>
                    <Col>
                        <div className={styles.p}>Buy your next home with our cash</div>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                    <span className={styles.number_circle}>2</span>
                    </Col>
                    <Col>
                    <div className={styles.p}>Move in on your timeline</div>
                    <p className={styles.ital}> - Even before you sell</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <span className={styles.number_circle}>3</span>
                    </Col>
                    <Col>
                    <div className={styles.p}>List after you move out and sell for more</div>
                    </Col>
                </Row>
                <p className={styles.spacing}></p>
                <Button variant="primary" size="lg" className={styles.button}>Chat with an expert</Button>{' '}
            </Col>

            <Col className={styles.margin} sm={6}>
                <p><Image className={styles.image} src="/opendoor3.jpg" /></p>
            </Col>
        </Row>
    )
}
export default Procedure