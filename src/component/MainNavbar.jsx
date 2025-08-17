import KarkaThamizha from "../assets/KarkaThamizha.svg";
import image from "../assets/image.png";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export function MainNavbar() {
    return (
        <nav className="navbar bg-light navbar-expand-md navbar-light mt-5">
            <div className="container-fluid">
                <div className="d-flex align-items-center ps-4">
                    <img src={KarkaThamizha} alt="" className="logo navbar-brand w-200" style={{ width: "300px", height: "auto" }}  />
                </div>

                <div className="d-flex align-items-center gap-3 ms-auto">
                    <img
                        src={image}
                        alt="image"
                        className="navbar-brand bg-light"
                        style={{ display: "block" }} />

                    <ul className="navbar-nav pe-4">
                        <li className="nav-item me-3">Home</li>
                        <li className="nav-item me-3">products</li>
                        <li className="nav-item me-3">Features</li>
                        <li className="nav-item me-3">about</li>
                        <li><FaSearch className="me-3 cursor-pointer" /></li>
                        <li><FaUser title="login" className="cursor-pointer" /></li>
                    </ul>
                </div>




                {/* <div className="search-box">
                    <input type="text" placeholder="search" className="form-control"/>
                </div> */}
            </div>
        </nav>
    );
}