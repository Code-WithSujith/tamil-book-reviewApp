// import { FaE } from "react-icons/fa6";
import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";
import { SideBarContent } from "./SideBarContent";
import { MainCardNews } from "./MainCard";
import { CategoryBar } from "./CategoryBar";



export function CardComponent() {
    // const tabs = ["Popular", "Recent", "Sports"]; 
    // const [activeTab, setActiveTab] = useState("Popular");
    return (
        <div className="container mt-5 mb-3">
            <div className="row">

                <div className="col-md-8 border-end">
                    <div className="card-title">
                        <div className="d-flex align-items-center justify-content-between">
                            <h3 className="fw-bold">Latest World News</h3>
                            <CategoryBar />
                        </div>
                        <p className="text-muted">Don't miss daily news</p>
                    </div>
                    <hr/>
                    <MainCardNews image={cardBook_1}
                        category={"kavithai"}
                        date={"10 July 2025"}
                        author={"Sahul Hameed"}
                        title={"Another Beautiful Story"} />
                    <MainCardNews image={cardBook_2}
                        category={"Novel"}
                        date={"15 Agust 2025"}
                        author={"Rajendhiran"}
                        title={"Inspiring Life Journey"} />
                    <MainCardNews image={cardBook_3}
                        category={"Poetry"}
                        date={"12 Sep 2025"}
                        author={"Mark antony"}
                        title={"Adventure of the Unknown"} />
                </div>


                {/* Side Bar Content */}
                    <SideBarContent />
            </div>
        </div>
    )
}

