import { Button, Row, Col, Container, Image, Card } from 'react-bootstrap'
import styles from './costDetails.module.css'

function CostDetails() {
    return (
        <Row md={2} className={styles.container}>
            <Col>
                <Container className={styles.title}>
                    <div><strong> Move smarter.</strong></div>
                    <div className={styles.save}><strong> Save more.</strong></div>
                </Container>
                <br />
                <Container className={styles.text}>
                    7% covers all the commissions you'd pay for both buying and selling. We'll
                    even cover your new home while you sell.
                </Container>
                <br />
            </Col>

            <Col>
                <p><Image className={styles.image1} src="/phone_check.webp" width="500" height="600" /></p>
                <Card className={styles.image2}>
                    <p className={styles.card1title2}>Traditionally</p>
                    <p className={styles.keys2}>Move as soon as</p>
                    <p className={styles.values2}>90 days</p>
                    <p className={styles.keys2}>Moving costs</p>
                    <p className={styles.values2}>$2500</p>
                    <p className={styles.keys2}>Double mortgages</p>
                    <p className={styles.values2}>3mo+</p>
                    <p color="gray">Pay 2 mortgages for 3 months on average</p>
                </Card>
                <Card bg="primary" className={styles.image3}>
                    <p className={styles.card1title}>Home Reserve</p>
                    <p className={styles.keys}>Move as soon as</p>
                    <p className={styles.values}>30 days</p>
                    <p className={styles.keys}>Moving costs</p>
                    <p className={styles.values}>$0</p>
                    <p className={styles.keys}>Double mortgages</p>
                    <p className={styles.values}>None</p>
                    <p>We'll cover your new mortgage for 3 months</p>
                </Card>
            </Col>
        </Row>
    )
}
export default CostDetails
