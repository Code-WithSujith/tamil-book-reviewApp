import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";
import { Interviews } from "./Interviews";
import { MetaInfo } from "./MetaInfo";
import { SideBarNews } from "./SideBarNews";

export function TopNewsContent() {
  return (
    <div className="container ">
      <div className="row pb-3">
        <div className="col-md-4">
          <div className="d-flex pt-3 border-bottom pb-2 border-end border-top">
            <img src={cardBook_1} alt="book1" className="img-fluid rounded me-3" style={{ height: "100px", width: "70px" }} />
            <div>
              <span className="badge bg-primary mb-2">Story</span>
              <h6 className="fw-bold">Another Beautiful Story Another Beautiful Story</h6>
              <MetaInfo />
            </div>
          </div>

          <div className="d-flex pt-3 border-bottom pb-2 border-end border-top">
            <img src={cardBook_3} alt="book1" className="img-fluid rounded me-3" style={{ height: "100px", width: "70px" }} />
            <div>
              <span className="badge bg-primary mb-2">Poetry</span>
              <h6 className="fw-bold">Inspiring Life Journey Inspiring Life Journey</h6>
              <MetaInfo />
            </div>
          </div>

          <div className="d-flex pt-3 border-bottom pb-2 border-end border-top">
            <img src={cardBook_2} alt="book1" className="img-fluid rounded me-3" style={{ height: "100px", width: "70px" }} />
            <div>
              <span className="badge bg-primary mb-2">Novel</span>
              <h6 className="fw-bold">Adventure of the Unknown Adventure of the Unknown</h6>
              <MetaInfo />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex pt-3 border-bottom pb-2 border-end border-top">
            <img src={cardBook_3} alt="book1" className="img-fluid rounded me-3" style={{ height: "100px", width: "70px" }} />
            <div>
              <span className="badge bg-primary mb-2">Novel</span>
              <h6 className="fw-bold">Adventure of the Unknown Adventure of the Unknown</h6>
              <MetaInfo />
            </div>
          </div>

          <div className="d-flex pt-3 border-bottom pb-2 border-end border-top">
            <img src={cardBook_2} alt="book1" className="img-fluid rounded me-3" style={{ height: "100px", width: "70px" }} />
            <div>
              <span className="badge bg-primary mb-2">Poetry</span>
              <h6 className="fw-bold">Another Beautiful Story Another Beautiful Story</h6>
              <MetaInfo />
            </div>
          </div>

          <div className="d-flex pt-3 border-bottom pb-2 border-end border-top">
            <img src={cardBook_1} alt="book1" className="img-fluid rounded me-3" style={{ height: "100px", width: "70px" }} />
            <div>
              <span className="badge bg-primary mb-2">story</span>
              <h6 className="fw-bold">Inspiring Life Journey Inspiring Life Journey</h6>
              <MetaInfo />
            </div>
          </div>
        </div>
        {/* Interveiws Part */}
          <Interviews/> 
      </div>
    </div>
  )
}

