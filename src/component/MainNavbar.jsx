import { NavLink } from "react-router-dom";
import KarkaThamizha from "../assets/KarkaThamizha.svg";
import image from "../assets/image.png";
import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Login } from "./Login";

export function MainNavbar() {

    const [showLoginModal,setShowLoginModal] = useState(false);
    return (
        <nav className="navbar navbar-expand bg-light shadow-sm">
            <div className="container-fluid">
                {/* Brand Section */}
                <div className="d-flex align-items-center ps-3">
                    <img
                        src={KarkaThamizha}
                        alt="logo"
                        className="navbar-brand"
                        style={{ width: "250px", height: "auto" }}
                    />
                    <img
                        src={image}
                        alt="banner"
                        className="navbar-brand d-none d-md-block"
                        style={{ width: "580px", height: "auto" }}
                    />
                </div>

                {/* Navbar Links */}
                <ul className="navbar-nav ms-auto pe-4">
                    <li className="nav-item me-2">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink to="/Review" className="nav-link">
                            Review
                        </NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink to="/Writers" className="nav-link">
                            Writers
                        </NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink to="/Release" className="nav-link">
                            Release
                        </NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink to="/Events" className="nav-link">
                            Events
                        </NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink to="/Others" className="nav-link">
                            Others
                        </NavLink>
                    </li>

                    {/* Icons */}
                    <li className="nav-item me-2">
                        <NavLink to="#" className="nav-link">
                            <FaSearch />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setShowLoginModal(true)}>
                            <FaUser title="login" />
                        </button>

                        {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
