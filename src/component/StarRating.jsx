import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";

export function StarRating({ rating, votes }) {
  const [showPopup, setShowPopup] = useState(false);
  const [hover, setHover] = useState(0);
  const [selected, setSelected] = useState(rating);

  return (
    <div>
      {/* Summary rating below title */}
      <div className="d-flex align-items-center gap-2">
        <FaStar className="text-warning" />
        <span className="fw-bold">{rating.toFixed(1)}</span>
        <small className="text-muted">({votes} votes)</small>
        <span
          className="text-primary ms-2"
          style={{ cursor: "pointer" }}
          onClick={() => setShowPopup(true)}
        >
          Rate
        </span>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 9999 }}
        >
          <div
            className="bg-black text-white p-4 rounded shadow-lg text-center position-relative"
            style={{ width: "400px" }}
          >
            {/* Close Icon */}
            <FaTimes
              className="position-absolute top-0 end-0 m-3 text-white"
              size={22}
              style={{ cursor: "pointer" }}
              onClick={() => setShowPopup(false)}
            />

            <h6 className="text-warning">RATE THIS</h6>
            <h5 className="mb-3">Inspiring Life Journey</h5>

            {/* 10 Stars */}
            <div className="d-flex justify-content-center mb-3">
              {[...Array(10)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <FaStar
                    key={starValue}
                    size={hover === starValue || selected >= starValue ? 32 : 28}
                    className={`mx-1 ${
                      starValue <= (hover || selected) ? "text-primary" : "text-secondary"
                    }`}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setSelected(starValue)}
                    style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                  />
                );
              })}
            </div>

            {/* Selected Number */}
            {selected > 0 && (
              <div className="mb-2">
                <span className="fs-4 fw-bold">{selected}</span> / 10
              </div>
            )}

            {/* Close / Confirm */}
            <button
              className="btn btn-danger w-100 fw-bold"
              onClick={() => setShowPopup(false)}
            >
              Rate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
