import Header from "./header/header"
import Footer from "./footer/footer"

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>)
}

export default Layout