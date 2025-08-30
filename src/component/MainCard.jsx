import { MetaInfo } from "./MetaInfo";
import { StarRating } from "./StarRating";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";


export function MainCardNews({image, date, title, category, author}) {
  return (
    <div>
      <div className="d-flex border-end pe-4 border-bottom pb-3 mt-3 stretched-link">
        <Link to="BookDetail"><img src={image} alt="firstNews" style={{ maxWidth: "600px", height: "200px", minWidth: "160px" }} className="img-fluid rounded me-3" /></Link>
        <div>
          <span className="badge bg-danger mb-2">{category}</span>
          <h3 className="fw-bold">{title}</h3>
          <div className="d-flex justify-content-between">
            <StarRating rating={8.9} votes={"1.2M"}/>
            <MetaInfo />
          </div>
          <p className="text-muted mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quasi dolores omnis velit numquam distinctio aperiam voluptate iure quo consectetur.</p>
          <div className="d-flex justify-content-between">
            <small className="fw-bold">By - {author}</small>
            <span className="text-muted align-items-center"><FaRegClock className="me-1 text-danger"/>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

