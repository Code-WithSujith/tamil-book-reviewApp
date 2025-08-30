import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";
import { MetaInfo } from "./MetaInfo";

export function BottomCard() {
    return (
        <>
            <div className="row">
                <div className="col-md-2 border" style={{ overflow: "hidden" }}>
                    <img
                        src={cardBook_1}
                        alt="book1"
                        className="img-fluid rounded w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-2 border">
                    <img
                        src={cardBook_1}
                        alt="book1"
                        className="img-fluid rounded w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-4">
                    <div className="d-flex pt-3 border-bottom border-end border-top pb-2">
                        <img
                            src={cardBook_1}
                            alt="book1"
                            className="img-fluid rounded me-3"
                            style={{ height: "100px", width: "70px" }}
                        />
                        <div>
                            <span className="badge bg-primary mb-2">Story</span>
                            <h6 className="fw-bold">
                                Another Beautiful Story Another Beautiful Story
                            </h6>
                            <MetaInfo />
                        </div>
                    </div>

                    <div className="d-flex pt-3 border-bottom border-end pb-2">
                        <img
                            src={cardBook_2}
                            alt="book2"
                            className="img-fluid rounded me-3"
                            style={{ height: "100px", width: "70px" }}
                        />
                        <div>
                            <span className="badge bg-success mb-2">Adventure</span>
                            <h6 className="fw-bold">
                                Exciting Adventure Awaits
                            </h6>
                            <MetaInfo />
                        </div>
                    </div>
                </div>

            </div>
            <div className="row pb-3">
                <div className="col-md-2 border" style={{ overflow: "hidden" }}>
                    <img
                        src={cardBook_1}
                        alt="book1"
                        className="img-fluid rounded w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-2 border" style={{ overflow: "hidden" }}>
                    <img
                        src={cardBook_1}
                        alt="book1"
                        className="img-fluid rounded w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-4">
                    <div className="d-flex pt-3 border-bottom border-end border-top pb-2">
                        <img
                            src={cardBook_1}
                            alt="book1"
                            className="img-fluid rounded me-3"
                            style={{ height: "100px", width: "70px" }}
                        />
                        <div>
                            <span className="badge bg-primary mb-2">Story</span>
                            <h6 className="fw-bold">
                                Another Beautiful Story Another Beautiful Story
                            </h6>
                            <MetaInfo />
                        </div>
                    </div>

                    <div className="d-flex pt-3 border-bottom border-end pb-2">
                        <img
                            src={cardBook_2}
                            alt="book2"
                            className="img-fluid rounded me-3"
                            style={{ height: "100px", width: "70px" }}
                        />
                        <div>
                            <span className="badge bg-success mb-2">Adventure</span>
                            <h6 className="fw-bold">
                                Exciting Adventure Awaits
                            </h6>
                            <MetaInfo />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
