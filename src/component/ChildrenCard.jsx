import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";
import { MetaInfo } from "./MetaInfo";

export function ChildrenCard() {
  return (
    <>
      <div className="col-md-2 mt-5">
        <div className="card zoom-img mb-2" style={{ overflow: "hidden", position: "relative" }}>
          <img
            src={cardBook_2}
            alt="book1"
            className="card-img-top"
            style={{ height: "230px", objectFit: "cover" }}
          />

          {/* Badge over the image bottom */}
          <span
            className="badge bg-danger sharp-badge w-100 text-center"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              borderRadius: "0"
            }}
          >
            Advanture
          </span>
        </div>
      </div>
      <div className="col-md-2 mt-5">
        <div className="card zoom-img mb-2" style={{ overflow: "hidden", position: "relative" }}>
          <img
            src={cardBook_1}
            alt="book1"
            className="card-img-top"
            style={{ height: "230px", objectFit: "cover" }}
          />

          {/* Badge over the image bottom */}
          <span
            className="badge bg-danger sharp-badge w-100 text-center"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              borderRadius: "0"
            }}
          >
            Advanture
          </span>
        </div>
      </div>
      <div className="col-md-2 mt-5">
        <div className="card zoom-img mb-2" style={{ overflow: "hidden", position: "relative" }}>
          <img
            src={cardBook_3}
            alt="book1"
            className="card-img-top"
            style={{ height: "230px", objectFit: "cover" }}
          />

          {/* Badge over the image bottom */}
          <span
            className="badge bg-danger sharp-badge w-100 text-center"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              borderRadius: "0"
            }}
          >
            Advanture
          </span>
        </div>
      </div>
      <div className="col-md-2 border-end mt-5">
        <div className="card zoom-img mb-2" style={{ overflow: "hidden", position: "relative" }}>
          <img
            src={cardBook_2}
            alt="book1"
            className="card-img-top"
            style={{ height: "230px", objectFit: "cover" }}
          />

          {/* Badge over the image bottom */}
          <span
            className="badge bg-danger sharp-badge w-100 text-center"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              borderRadius: "0"
            }}
          >
            Advanture
          </span>
        </div>
      </div>
    </>
  )
}

