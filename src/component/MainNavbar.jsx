import { NavLink } from "react-router-dom";
import KarkaThamizha from "../assets/KarkaThamizha.svg";
import image from "../assets/image.png";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export function MainNavbar() {
    return (
        <nav className="navbar bg-light navbar-expand-md navbar-light">
            <div className="container-fluid">
                <div className="d-flex align-items-center ps-3">
                    <img src={KarkaThamizha} alt="" className="logo navbar-brand w-200" style={{ width: "300px", height: "auto" }}  />
                </div>

                <div className="d-flex align-items-center gap-2 ms-auto">
                    <img
                        src={image}
                        alt="image"
                        className="navbar-brand bg-light"
                        style={{ display: "block" }} />

                    <ul className="navbar-nav pe-4">
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
                            <NavLink to="#" className="nav-link"><FaSearch/></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link">
                                <FaUser title="login" />
                            </NavLink>
                        </li>
                    </ul>
                </div>




                {/* <div className="search-box">
                    <input type="text" placeholder="search" className="form-control"/>
                </div> */}
            </div>
        </nav>
    );
}