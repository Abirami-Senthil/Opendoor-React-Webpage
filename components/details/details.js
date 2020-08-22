import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './Details.module.css'

function Details() {
    return (
        <Row md={2}>
            <Col>
                <span className={styles.circle}><div className={styles.icons}><FontAwesomeIcon icon={faEnvelopeOpenText} /></div></span>
                <p className={styles.padding}></p>
                <p><strong className={styles.strong}><span className={styles.span}>Make them an offer </span>
                    <span className={styles.text}>they can't refuse</span></strong></p>
                <p className={styles.p}>Sellers love the certainity of a cash offer. Use our cash to beat the competition and win the home.</p>

                <br />

                <span className={styles.circle}><div className={styles.icons}><FontAwesomeIcon icon={faFileInvoiceDollar} /></div></span>
                <p className={styles.padding}></p>
                <p><strong className={styles.strong} ><span className={styles.span}>Sell for the  </span>
                    <span className={styles.text}>best price</span></strong></p>
                <p className={styles.p}>Get a $10k advance to make high-return upgrades and list for the best offer.</p>
            </Col>

            <Col>
                <span className={styles.circle}><div className={styles.icons} ><FontAwesomeIcon icon={faFlag} /></div></span>
                <p className={styles.padding}></p>
                <p><strong className={styles.strong} ><span className={styles.span}>We'll cover </span>
                    <span className={styles.text}>your new home when you sell</span></strong></p>
                <p className={styles.p}>We'll pay the costs on your new home so you don't double-pay.</p>

                <br />

                <span className={styles.circle}><div className={styles.icons}><FontAwesomeIcon icon={faCalendarAlt} /></div></span>
                <p className={styles.padding}></p>
                <p><strong className={styles.strong}><span className={styles.span}>Safely move on </span>
                    <span className={styles.text}>your schedule</span></strong></p>
                <p className={styles.p}>Sell after you move in to your new home. Avoid showings with strangers.</p>
            </Col>
        </Row>
    )
}
export default Details

