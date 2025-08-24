import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaVk, FaPinterestP } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Header() {
  const newsList = [
    "Scientists Discover New Planet in Orbit Scientists Discover New Planet in Orbit – 2025 ",
    "AI Breakthrough: New Model Learns in Seconds AI Breakthrough: New Model Learns in Second",
    "Global Markets See Major Growth This Quarter Global Markets See Major Growth This Quarter",
    "New Vaccine Shows Promising Results New Vaccine Shows Promising Results",
    "Historic Peace Treaty Signed Between Nations Historic Peace Treaty Signed Between Nations"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true); // start animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % newsList.length);
        setIsFlipping(false); // reset animation
      }, 600); // same as animation duration
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="container-fluid bg-dark text-white py-2">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-1 text-center border-end fw-bold fs-5">
          Hot News
        </div>

        {/* News Section with Flip Effect */}
        <div className="col-7 ps-4 fs-6 ">
          <small className="text-warning me-2">15/08/2025</small>
          <span className={`flip-text ${isFlipping ? "flip" : ""}`}>
            {newsList[currentIndex]}
          </span>
        </div>

        {/* Social Icons */}
        <div className="col-4 d-flex gap-3 justify-content-end pe-5">
          <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-6 " style={{ width: "30px", height: "30px", borderRadius: "2px" }}>
            <FaFacebookF />
          </a>
          <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-6 " style={{ width: "30px", height: "30px", borderRadius: "2px" }}>
            <FaTwitter />
          </a>
          <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-6 " style={{ width: "30px", height: "30px", borderRadius: "2px" }}>
            <FaInstagram />
          </a>
          <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-6 " style={{ width: "30px", height: "30px", borderRadius: "2px" }}>
            <FaVk />
          </a>
          <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-6 " style={{ width: "30px", height: "30px", borderRadius: "2px" }}>
            <FaPinterestP />
          </a>
        </div>
      </div>
    </header>
  );
}
