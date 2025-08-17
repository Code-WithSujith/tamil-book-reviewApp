import { MetaInfo } from "./MetaInfo"


export function MainCardNews({image, date, title, category}) {
  return (
    <div>
      <div className="d-flex mb-4 border-end pe-4 border-bottom pb-3">
        <img src={image} alt="firstNews" style={{ maxWidth: "600px", height: "200px", minWidth: "160px" }} className="img-fluid rounded me-3" />
        <div>
          <span className="badge bg-danger mb-2">{category}</span>
          <h3 className="fw-bold">{title}</h3>
          <small className="text-muted">{date}</small>
          <p className="text-muted mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quasi dolores omnis velit numquam distinctio aperiam voluptate iure quo consectetur.</p>
          <MetaInfo />
        </div>
      </div>
    </div>
  )
}

