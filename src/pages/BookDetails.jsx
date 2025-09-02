import { useLocation } from "react-router-dom";
// import book_background from "../assets/book_background.webp";
import { FaStar, FaArrowUp } from "react-icons/fa";

export function BookDetails() {
  const location = useLocation();
  const { image, title, category, author, date } = location.state || {};

  return (
    <div>
      {/* Hero Section */}
      <div
        className="position-relative text-white"
        style={{
          // backgroundImage: `url(${book_background})`,
          backgroundImage: "url('https://picsum.photos/1200/400?blur')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "350px",
        }}
      >
        <div className="container d-flex align-items-center py-5">
          {/* Book Cover */}
          <img
            src={image}
            alt="Book cover"
            className="shadow rounded"
            style={{ width: "200px", height: "300px", objectFit: "cover" }}
          />

          {/* Book Info */}
          <div className="ms-4">
            <span className="badge bg-danger text-dark mb-2">
              FEATURED → {category}
            </span>
            <h2 className="fw-bold">The Kimoni Legacy: {title}</h2>
            <p className="mb-1">
              By <strong>{author}</strong>
            </p>
            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-light btn-sm">
                <FaArrowUp /> Upvote 61
              </button>
              <button className="btn btn-danger btn-sm">Buy it now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Review + Synopsis Section */}
      <div className="container my-5">
        <div className="row">
          {/* Left Column (Review + Synopsis) */}
          <div className="col-md-8">
            <div className="mb-4">
              <h5>
                Review{" "}
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </h5>
              <h4 className="fw-bold">Must read 🏆</h4>
              <p className="fst-italic text-muted">
                An exceptionally lush and detailed Epic Fantasy with overwhelming magical conflict
                and fully-rounded characters.
              </p>
            </div>

            <div className="p-3 bg-light rounded">
              <h6 className="fw-bold">Synopsis</h6>
              <p>
                Kamau Kimoni believed his future was set in stone: kill the Crowned Eagle, and return
                a man of the Kimoni clan. However, on the Kitwana Savanna, the future lies in the
                wind, not stone Kamau Kimoni believed his future was set in stone: kill the Crowned
                Eagle, and return a man of the Kimoni clan. However, on the Kitwana Savanna, the
                future lies in the wind, not stone
              </p>

              <br />

              <p>
                Kamau Kimoni believed his future was set in stone: kill the Crowned Eagle, and return
                a man of the Kimoni clan. However, on the Kitwana Savanna, the future lies in the
                wind, not stone Kamau Kimoni believed his future was set in stone: kill the Crowned
                Eagle, and return a man of the Kimoni clan. However, on the Kitwana Savanna, the
                future lies in the wind, not stone Kamau Kimoni believed his future was set in stone:
                kill the Crowned Eagle, and return a man of the Kimoni clan. However, on the Kitwana
                Savanna, the future lies in the wind, not stone...
              </p>
            </div>
          </div>

          {/* Right Column (About the Author) */}
          <div className="col-md-4">
            <div className="border p-3 rounded">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://picsum.photos/50"
                  alt="Author"
                  className="rounded-circle me-2"
                />
                <div>
                  <h6 className="fw-bold mb-0">{author}</h6>
                  <button className="btn btn-sm btn-outline-warning">Follow</button>
                </div>
              </div>
              <p className="small text-muted">
                Omari Richards is a debut novelist who specializes in Sword and Soul style epic
                fantasy.
              </p>
              <p className="small mb-0">
                <strong>Published:</strong> {date}
              </p>
              <p className="small mb-0">
                <strong>Words:</strong> 250,000
              </p>
              <span className="badge bg-warning text-dark mt-2">Epic Fantasy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
