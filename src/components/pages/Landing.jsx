import { Outlet } from "react-router-dom"
import { Header } from "../common/Header"
import { Footer } from "../common/Footer"
import ScrollToTopButton from "../common/ScrollToTopButton"

export const Landing = () => {
    return <section className="website">
        <Header />
        <Outlet />
        <Footer />
        <ScrollToTopButton />
    </section>
}