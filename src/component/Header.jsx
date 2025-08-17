import image from "../assets/image.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Header() {
  return (
    <header className="container-fluid bg-dark text-white py-2 fixed-top">
      <div className="row align-items-center">
        <div className="col-1 text-center border-end fw-bold fs-5">
          Hot News
        </div>

        <div className="col-7 ps-4 fs-6 ">
          <small className="text-warning me-2">15/08/2025</small>
          Scientists Discover New Planet in Orbit – 2025
        </div>
        <div className="col-4 d-flex gap-3 justify-content-end fs-4 pe-5">
          <FaFacebook />
          <FaInstagram/>
          <FaTwitter/>
          <FaYoutube/>
        </div>
      </div>
    </header>
  );
}
