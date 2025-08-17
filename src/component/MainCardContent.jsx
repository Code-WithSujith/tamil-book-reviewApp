import { FaE } from "react-icons/fa6";
import cardBook_1 from "../assets/cardBook_1.jpg";
import cardBook_2 from "../assets/cardBook_2.jpg";
import cardBook_3 from "../assets/cardBook_3.jpg";
import { MetaInfo } from "./MetaInfo";
import { SideBarNews } from "./SideBarNews";
import { MainCardNews } from "./MainCard";
import { CategoryBar } from "./CategoryBar";
import { useState } from "react";



export function CardComponent() {
    const tabs = ["Popular", "Recent", "Sports"];
    const [activeTab, setActiveTab] = useState("Popular");
    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-md-8">
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
                        title={"Another Beautiful Story"} />
                    <MainCardNews image={cardBook_2}
                        category={"Novel"}
                        date={"15 Agust 2025"}
                        title={"Inspiring Life Journey"} />
                    <MainCardNews image={cardBook_3}
                        category={"Po"}
                        date={"12 Sep 2025"}
                        title={"Adventure of the Unknown"} />
                </div>


                <div className="col-md-4 border">
                    <ul className="nav nav-tabs mb-3 justify-content-around">
                        {tabs.map((tab) => (
                            <li key={tab} className="nav-item">
                                <button
                                    className={`nav-link fw-bold ${activeTab === tab ? "bg-danger text-white" : "bg-black text-white"}`}
                                    onClick={() => setActiveTab(tab)}
                                    style={{ border: "none" }}
                                >
                                    {tab} News
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* <ul className="nav nav-tabs mb-5 d-flex">
                    {tabs.map((tab) =>(
                        <li key={tab} className="nav-item">
                            <button className="nav-link"> 
                                {tab} NEWS
                            </button>
                        </li>
                    ))}
                     </ul> */}

                    {/* <li className="nav-item bg-danger">
                        <a className="nav-link fw-bold text-light " href="#">popular News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold " href="#">Recent News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold " href="#">Sport News</a>
                    </li> */}

                    <SideBarNews />
                    <SideBarNews />
                    <SideBarNews />
                    <SideBarNews />
                    <SideBarNews />
                    <SideBarNews />
                </div>
            </div>

        </div>
    )
}

