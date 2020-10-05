import { Button, Row, Col, Container, Image } from 'react-bootstrap'
import styles from './Savings.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

function Intro() {
    return (
        <Row className={styles.container}>
            <Col>
              <div className={styles.icon}> <FontAwesomeIcon icon={faCheckDouble} /> </div>
                <p className={styles.title}>Save time, money and effort.</p>
                <p className={styles.subtitle}>All for just one fee.</p>
                <p className={styles.text}>7% covers all the commissions you'd pay for both buying and selling. We'll
                    even cover your new home while you sell.</p>
            </Col>
        </Row>
    )
}
export default Intro
