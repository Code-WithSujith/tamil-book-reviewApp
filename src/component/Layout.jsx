import { MainNavbar } from "./MainNavbar";
import { Header } from "./Header";
import AllRoutes from "../routes/AllRoutes";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";


export function Layout() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80); // scroll threshold
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {!isScrolled && <Header />}

            <div className={isScrolled ? "fixed-top shadow-sm" : ""}>
                <MainNavbar />
            </div>

            <div style={{ marginTop: isScrolled ? "10px" : "10px" }}>
                <AllRoutes />
            </div>

            <Footer />

        </>
    )
}

