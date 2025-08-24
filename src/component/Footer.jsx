import { FaFacebookF, FaTwitter, FaInstagram, FaVk, FaPinterestP } from "react-icons/fa";
import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";


export function Footer() {
  return (
    <div className="container-fluid bg-dark p-5 text-white">
      <div className="row">
        <div className="col-md-4 border-end">
          <h4 className="text-danger fw-bold">Contact Us</h4>
          <p>Mobile: 81 2288 5555 / 81 899 899 11</p>
          <p>EMail: karkathamizha@gmail.com</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolores id quaerat voluptatum non! Asperiores cum quidem sapiente minus earum.</p>
          
          <div className="pt-3">
            <h4 className="text-danger fw-bold">Social Icons</h4>
            <div className="d-flex gap-3 mt-3">
            <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-5 " style={{ width: "35px", height: "35px", borderRadius:"2px"}}>
              <FaFacebookF />
            </a>
            <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-5 " style={{ width: "35px", height: "35px", borderRadius:"2px" }}>
              <FaTwitter />
            </a>
            <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-5 " style={{ width: "35px", height: "35px", borderRadius:"2px" }}>
              <FaInstagram />
            </a>
            <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-5 " style={{ width: "35px", height: "35px", borderRadius:"2px" }}>
              <FaVk />
            </a>
            <a href="#" className="d-flex justify-content-center align-items-center bg-danger text-white fs-5 " style={{ width: "35px", height: "35px", borderRadius:"2px" }}>
              <FaPinterestP />
            </a>
          </div>
          </div>

        </div>

        <div className="col-md-4 border-end">

            <h4 className="text-danger fw-bold">Awards-2025</h4>
          <ul>
            <li>Best Novel of 2024</li>
            <li>Best Short Story Collection of 2024</li>
            <li>Best Poetry Collection of 2024</li>
            <li>Best Essay Collection of 2024</li>
            <li>Best Translation – Short Story (2024)</li>
            <li>Best Translation – Poetry (2024)</li>
            <li>Best Translation – Essay (2024)</li>

          </ul>

          <div className="mt-3">
            <h4 className="text-danger fw-bold">Witters</h4>
            <h6 className="ps-3">2025 Trustable Writters</h6>
          </div>
        </div>

        <div className="col-md-4">
          <h4 className="text-danger fw-bold">Recent Reviews</h4>
          <div className="d-flex mb-3 pb-3 border-bottom">
            <img src={cardBook_1} alt="cardBook!" className="image-fluid rounded me-3" style={{maxWidth:"60px",maxHeight:"50"}}/>
            <div>
              <span className="text-secondary">15/08/2025 09:23 pm</span>
              <h6>Another Beautiful Story</h6>
              <small> - By Sahul Hameed</small>
            </div>
          </div>
          <div className="d-flex mb-3 border-bottom pb-3">
            <img src={cardBook_2} alt="cardBook!" className="image-fluid rounded me-3" style={{maxWidth:"60px",height:"50"}}/>
            <div>
              <span className="text-secondary">15/08/2025 09:23 pm</span>
              <h6>Inspiring Life Journey</h6>
              <small> - By Sahul Hameed</small>
            </div>
          </div>
          <div className="d-flex">
            <img src={cardBook_3} alt="cardBook!" className="image-fluid rounded me-3" style={{maxWidth:"60px",height:"50"}}/>
            <div>
              <span className="text-secondary">15/08/2025 09:23 pm</span>
              <h6>Adventure of the Unknown</h6>
              <small> - By Sahul Hameed</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

