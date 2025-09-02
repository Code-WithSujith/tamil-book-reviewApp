import { useState } from "react";
import { SideBarNews } from "./SideBarNews";


export function SideBarContent() {
    const tabs = ["Popular", "Recent", "Sports"];
    const [activeTab, setActiveTab] = useState("Popular");

    return (
        <div className="col-md-4 ps-5">
            <div className="d-flex">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`flex-fill fw-bold py-2 border-0 ${activeTab === tab ? "bg-danger text-white" : "bg-dark text-white"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        <small>{tab.toUpperCase()} NEWS</small>
                    </button>
                ))}
            </div>
            <div className="pt-3 ps-3 border">
                <SideBarNews />
                <SideBarNews />
                <SideBarNews />
                <SideBarNews />
                <SideBarNews />
                <SideBarNews />
                <SideBarNews />
            </div>
            {/* <hr /> */}
        </div>
    )
}

