import { NavLink } from "react-router-dom";
import KarkaThamizha from "../assets/KarkaThamizha.svg";
import image from "../assets/image.png";
import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Login } from "./Login";

export function MainNavbar() {

    const [showLoginModal, setShowLoginModal] = useState(false);
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
                    <li className="nav-item dropdown me-2 custom-dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle custom-toggle" role="button">
                            Review
                        </NavLink>
                        <ul className="dropdown-menu custom-menu">
                            <li>
                                <NavLink to="/Review" className="dropdown-item custom-item">
                                    Writers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Review" className="dropdown-item custom-item">
                                    Readers
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown me-2 custom-dropdown">
                        <NavLink
                            to="#" className="nav-link dropdown-toggle custom-toggle" role="button">
                            Writers
                        </NavLink>
                        <ul className="dropdown-menu custom-menu">
                            <li>
                                <NavLink to="/writers" className="dropdown-item custom-item">
                                    Author List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/writers/series" className="dropdown-item custom-item">
                                    Series
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/writers/interviews" className="dropdown-item custom-item">
                                    Interviews
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown me-2 custom-dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle custom-toggle" role="button">
                            Release
                        </NavLink>
                        <ul className="dropdown-menu custom-menu">
                            <li>
                                <NavLink to="/Release" className="dropdown-item custom-item">
                                    Pre-Release Plan
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Release" className="dropdown-item custom-item">
                                    Special Discount
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item me-2 dropdown custom-dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle custom-toggle" role="button">
                            Events
                        </NavLink>
                        <ul className="dropdown-menu custom-menu">
                            <li>
                                <NavLink to="/BookFairs" className="dropdown-item custom-item">
                                    Book Fair
                                </NavLink>
                                <li>
                                <NavLink to="/Events" className="dropdown-item custom-item">
                                    Book Launch Ceremony
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Events" className="dropdown-item custom-item">
                                    Award Ceremony
                                </NavLink>
                            </li>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item me-2 dropdown custom-dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle custom-dropdown" role="button">
                            Others
                        </NavLink>
                        <ul className="dropdown-menu custom-menu"> 
                            <li>
                                <NavLink to="/Others" className="dropdown-item custom-item">
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Others" className="dropdown-item custom-item">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Others" className="dropdown-item custom-item">
                                    Your Opinion
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    {/* Icons */}
                    <li className="nav-item me-2 ">
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
