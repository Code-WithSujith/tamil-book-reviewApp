import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export function FollowUs() {
  return (
    <div className="col-md-4 ps-5">
      <h5 className="fw-bold">Follow Us</h5>
      <hr className="mt-1 mb-3 border-2 border-danger opacity-100" style={{ width: "100px" }} />

      <div className="row g-3">
        {/* Facebook */}
        <div className="col-6">
          <div className="d-flex align-items-center p-3 bg-light shadow-sm border">
            <FaFacebookF size={28} className="text-primary me-3" />
            <span className="fw-bold">Likes <span className="fw-bolder">2640</span></span>
          </div>
        </div>

        {/* Twitter */}
        <div className="col-6">
          <div className="d-flex align-items-center p-3 bg-light shadow-sm border">
            <FaTwitter size={28} className="text-info me-3" />
            <span className="fw-bold">Followers <span className="fw-bolder">1456</span></span>
          </div>
        </div>

        {/* YouTube */}
        <div className="col-6">
          <div className="d-flex align-items-center p-3 bg-light shadow-sm border">
            <FaYoutube size={28} className="text-danger me-3" />
            <span className="fw-bold">Followers <span className="fw-bolder">1456</span></span>
          </div>
        </div>

        {/* Instagram */}
        <div className="col-6">
          <div className="d-flex align-items-center p-3 bg-light shadow-sm border">
            <FaInstagram size={28} className="text-danger me-3" />
            <span className="fw-bold">Followers <span className="fw-bolder">1456</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
