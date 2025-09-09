import { FaStar, FaUniversity, FaClock, FaTag, FaComment, FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export function BookReview() {
  // const { title, author, image, reviews } = story;
  const location = useLocation();
  const { image, title, category, author, date } = location.state || {};

  return (
    <div className="container mt-4">
      {/* Story Title + Author */}
      <div className="mb-4 text-center">
        <h2 className="fw-bold">{title} <span className=" fs-5 ">— By {author}</span></h2>
      </div>

      {/* Reviews List */}

      <div className="border p-3 mb-4 rounded bg-light">
        {/* Reviewer Name */}
        <p className="fw-bold mb-2">Reviewed by: Sahul Hameed</p>

        <div className="d-flex">
          {/* Book Image */}
          <div className="col-md-2 border" style={{ overflow: "hidden" }}>
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 zoom-img"
              style={{ objectFit: "cover", height: "180px" }}
            />
          </div>

          {/* Review Content */}
          <div className="col-md-10 ps-3">
            {/* Star Rating */}
            <div className="mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 5 ? "text-warning" : "text-muted"} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-muted" style={{ maxHeight: "100px", overflow: "hidden" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam similique perferendis tenetur temporibus nisi praesentium quibusdam autem corporis accusamus! Distinctio reprehenderit rerum pariatur ipsam nesciunt repudiandae fugiat minima, quae aliquid inventore vel, qui quam. Incidunt, id. Veritatis, quibusdam veniam.
            </p>

            {/* Action Icons */}
            <div className="d-flex gap-3 mt-4">
              <FaUniversity className="text-danger" size={20} />
              <FaClock className="text-danger" size={20} />
              <FaTag className="text-danger" size={20} />
              <FaComment className="text-danger" size={20} />
              <FaHeart className="text-danger" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="border p-3 mb-4 rounded bg-light">
        {/* Reviewer Name */}
        <p className="fw-bold mb-2">Reviewed by: Rajendhiran</p>

        <div className="d-flex">
          {/* Book Image */}
          <div className="col-md-2 border" style={{ overflow: "hidden" }}>
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 zoom-img"
              style={{ objectFit: "cover", height: "180px" }}
            />
          </div>

          {/* Review Content */}
          <div className="col-md-10 ps-3">
            {/* Star Rating */}
            <div className="mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 3 ? "text-warning" : "text-muted"} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-muted" style={{ maxHeight: "100px", overflow: "hidden" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam similique perferendis tenetur temporibus nisi praesentium quibusdam autem corporis accusamus! Distinctio reprehenderit rerum pariatur ipsam nesciunt repudiandae fugiat minima, quae aliquid inventore vel, qui quam. Incidunt, id. Veritatis, quibusdam veniam.
            </p>

            {/* Action Icons */}
            <div className="d-flex gap-4 mt-4 align-items-center">
              {/* Views */}
              <div className="d-flex align-items-center gap-1">
                <FaUniversity className="text-danger" size={20} />
                <small>1.2k Views</small>
              </div>

              {/* Date / Time */}
              <div className="d-flex align-items-center gap-1">
                <FaClock className="text-danger" size={20} />
                <small>Aug 16, 2025</small>
              </div>

              {/* Category / Tag */}
              <div className="d-flex align-items-center gap-1">
                <FaTag className="text-danger" size={20} />
                <small>Fiction</small>
              </div>

              {/* Comments */}
              <div className="d-flex align-items-center gap-1">
                <FaComment className="text-danger" size={20} />
                <small>56 Comments</small>
              </div>

              {/* Likes */}
              <div className="d-flex align-items-center gap-1">
                <FaHeart className="text-danger" size={20} />
                <small>320 Likes</small>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="border p-3 mb-4 rounded bg-light">
        {/* Reviewer Name */}
        <p className="fw-bold mb-2">Reviewed by: Sahul Hameed</p>

        <div className="d-flex">
          {/* Book Image */}
          <div className="col-md-2 border" style={{ overflow: "hidden" }}>
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 zoom-img"
              style={{ objectFit: "cover", height: "180px" }}
            />
          </div>

          {/* Review Content */}
          <div className="col-md-10 ps-3">
            {/* Star Rating */}
            <div className="mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "text-warning" : "text-muted"} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-muted" style={{ maxHeight: "100px", overflow: "hidden" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam similique perferendis tenetur temporibus nisi praesentium quibusdam autem corporis accusamus! Distinctio reprehenderit rerum pariatur ipsam nesciunt repudiandae fugiat minima, quae aliquid inventore vel, qui quam. Incidunt, id. Veritatis, quibusdam veniam.
            </p>

            {/* Action Icons */}
            <div className="d-flex gap-1 mt-4">
              {/* Views */}
              <div className="icon-box">
                <FaUniversity size={20} />
                <div className="icon-value">1.2k Views</div>
              </div>

              {/* Date / Time */}
              <div className="icon-box">
                <FaClock size={20} />
                <div className="icon-value">15/06/2025 22:38:10</div>
              </div>

              {/* Tag */}
              <div className="icon-box">
                <FaTag size={20} />
                <div className="icon-value">Fiction</div>
              </div>

              {/* Comments */}
              <div className="icon-box">
                <FaComment size={20} />
                <div className="icon-value">56 Comments</div>
              </div>

              {/* Likes */}
              <div className="icon-box">
                <FaHeart size={20} />
                <div className="icon-value">320 Likes</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

