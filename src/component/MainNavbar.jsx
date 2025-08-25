import { NavLink } from "react-router-dom";
import KarkaThamizha from "../assets/KarkaThamizha.svg";
import image from "../assets/image.png";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



export function MainNavbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                
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

                <button 
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto pe-4">
                        <li className="nav-item me-2">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink to="Category" className="nav-link">Categories</NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink to="TopReview" className="nav-link">TopReviews</NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink to="Author" className="nav-link">Authors</NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink to="Contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink to="About" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink to="#" className="nav-link"><FaSearch /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link">
                                <FaUser title="login" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}