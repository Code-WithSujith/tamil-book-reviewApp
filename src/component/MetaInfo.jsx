import { FaHeart, FaEye, FaComment } from "react-icons/fa";

export function MetaInfo() {
    return (
        <div>
            {/* <div className="d-flex justify-content-between"> */}
                {/* <small className="fw-bold">by amir khan</small> */}
                <div className="d-flex align-items-center text-muted">
                    <FaHeart className="me-1 text-danger" />
                    <span className="me-1">570</span>
                    {/* <span className="mx-2">|</span> */}
                    <FaEye className="me-1 text-primary" />
                    <span className="me-1">2.53k</span>
                    {/* <span className="mx-2">|</span> */}
                    <FaComment className="me-1"/>
                    <span>200</span>
                </div>
            {/* </div> */}
        </div>
    )
}
