import BookBanner_1 from "../assets/BookBanner_1.jpg";
import BookBanner_2 from "../assets/BookBanner_2.jpg";
import BookBanner_3 from "../assets/BookBanner_3.jpg";
import { CardComponent } from "./MainCardContent";

export function Banner() {
    return (
        <div>
            <div id='demo' className="carousel slide" data-bs-ride='carousel'>
            <div className="carousel-indicators">
                <button type="button" data-bs-target='#demo' data-bs-slide-to='0' className="active"></button>
                <button type="button" data-bs-target='#demo' data-bs-slide-to='1' ></button>
                <button type="button" data-bs-target='#demo' data-bs-slide-to='2' ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={BookBanner_1} alt="Book_1" className="d-block w-100" style={{ height: "calc(95vh - 164px)", objectFit: "cover" }}/>
                </div>
                <div className="carousel-item">
                    <img src={BookBanner_2} alt="Book_2" className="d-block w-100" style={{ height: "calc(95vh - 164px)", objectFit: "cover" }}/>
                </div>
                <div className="carousel-item">
                    <img src={BookBanner_3} alt="Book_2" className="d-block w-100" style={{ height: "calc(95vh - 164px)", objectFit: "cover" }}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
        <CardComponent/>
        </div>
    )
}

