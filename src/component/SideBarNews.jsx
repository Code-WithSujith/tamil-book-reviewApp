import KarkaThamizhaImage from "../assets/KarkaThamizhaImage.png";


export function SideBarNews() {
  return (
    <div>
            <div className="d-flex mb-4">
                <img src={KarkaThamizhaImage} alt="slidBar News" className="rounded me-3" style={{ width: "100px", height: "70px" }} />
                <div>
                    <h6 className="fw-bold mb-1">Innovations that bring aesthetic pleasure.</h6>
                    <small className="text-muted">25 oct 2025</small>
                </div>
            </div>
    </div>
  )
}

