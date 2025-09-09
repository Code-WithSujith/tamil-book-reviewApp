import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";
import { MetaInfo } from "./MetaInfo";

export function BottomCard() {
    return (
        <>
            <div className="col-md-2">
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
                <div className="card zoom-img" style={{ overflow: "hidden", position: "relative" }}>
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
                        Sports
                    </span>
                </div>
            </div>
            <div className="col-md-2">
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
                <div className="card zoom-img" style={{ overflow: "hidden", position: "relative" }}>
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
                        Sports
                    </span>
                </div>
            </div>


            <div className="col-md-4  border-end">
                <div className="d-flex pt-3 border-bottom pb-2">
                    <img
                        src={cardBook_1}
                        alt="book1"
                        className="img-fluid rounded me-3"
                        style={{ height: "100px", width: "70px" }}
                    />
                    <div>
                        <span className="badge bg-primary mb-2 sharp-badge">Story</span>
                        <h6 className="fw-bold">
                            Another Beautiful Story Another Beautiful Story
                        </h6>
                        <MetaInfo />
                    </div>
                </div>

                <div className="d-flex pt-3 border-bottom  pb-2">
                    <img
                        src={cardBook_2}
                        alt="book2"
                        className="img-fluid rounded me-3"
                        style={{ height: "100px", width: "70px" }}
                    />
                    <div>
                        <span className="badge bg-success mb-2 sharp-badge">Adventure</span>
                        <h6 className="fw-bold">
                            Exciting Adventure Awaits
                        </h6>
                        <MetaInfo />
                    </div>
                </div>
                <div className="d-flex pt-3 border-bottom pb-2">
                    <img
                        src={cardBook_1}
                        alt="book1"
                        className="img-fluid rounded me-3"
                        style={{ height: "100px", width: "70px" }}
                    />
                    <div>
                        <span className="badge bg-primary mb-2 sharp-badge">Story</span>
                        <h6 className="fw-bold">
                            Another Beautiful Story Another Beautiful Story
                        </h6>
                        <MetaInfo />
                    </div>
                </div>

                <div className="d-flex pt-3 border-bottom  pb-2">
                    <img
                        src={cardBook_2}
                        alt="book2"
                        className="img-fluid rounded me-3"
                        style={{ height: "100px", width: "70px" }}
                    />
                    <div>
                        <span className="badge bg-success mb-2 sharp-badge">Adventure</span>
                        <h6 className="fw-bold">
                            Exciting Adventure Awaits
                        </h6>
                        <MetaInfo />
                    </div>
                </div>
            </div>
        </>
    );
}
