import { Row, Col, Card, Image } from 'react-bootstrap'
import styles from './ReviewAndFeedback.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function ReviewAndFeedback() {
  return (
    <Row md={2} className={styles.container}>
      <Col>
        <Card bg="primary" className={styles.card1}>
          <Row>
            <div className={styles.icon}> <FontAwesomeIcon icon={faQuoteLeft} /> </div>
            <p className={styles.card1text}>Opendoor made it possible for us to move into our new home, then put our
            old house up for sale. You can't get that with a normal agent.
          </p>
          </Row>
          <Row>
            <Col md={5}>
              <p><Image className={styles.image} src="/customer.jpg" width="150" height="150" /></p>
            </Col>
            <Col>
              <p className={styles.contact}> The Botmas moved with</p>
              <p className={styles.contact}>Home Reserve in Phoenix, AZ</p>
              <p className={styles.link}>READ THEIR STORY</p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col>
        <Card className={styles.card2}>
          <p className={styles.card2title}>Real life examples</p>
          <hr color= "gray" />
          <Row>
            <Col md={8}>
              <p className={styles.title}>Listed</p>
            </Col>
            <Col>
              <p className={styles.price}>$299,000</p>
              <p className={styles.discountprice}>$209,000</p>
            </Col>
          </Row>
          <hr color= "gray" />

          <Row>
            <Col md={8}>
              <p className={styles.title}>Contract</p>
              <p className={styles.subtitle}>low appraisal so settled</p>
            </Col>
            <Col>
              <p className={styles.price}>$305,000</p>
              <p className={styles.discountprice}>$301,000</p>
            </Col>
          </Row>
          <hr color= "gray" />

          <Row>
            <Col md={8}>
              <p className={styles.title}>Concierge</p>
            </Col>
            <Col>
              <p className={styles.price}>$10,000</p>
            </Col>
          </Row>
          <hr color= "gray" />
        </Card>

      </Col>
    </Row>
  )
}
export default ReviewAndFeedback
