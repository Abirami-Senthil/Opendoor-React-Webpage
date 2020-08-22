import Header from "../header/header"
import Footer from "../footer/footer"
import styles from './Layout.module.css'

function Layout({ children }) {
    return (
        <div>
            <Header />
            <p className={styles.margin}>
                <div>{children}</div>
                <Footer />
            </p>
        </div>)
}

export default Layout