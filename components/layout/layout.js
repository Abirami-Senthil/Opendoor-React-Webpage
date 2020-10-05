import Header from "../header/header"
import Footer from "../footer/footer"
import styles from './Layout.module.css'

function Layout({ children }) {
    return (
        <div>
            <div className={styles.margin}>{children}</div>
            <Footer />
        </div>)
}

export default Layout