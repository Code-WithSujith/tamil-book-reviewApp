import { useState } from "react";

export function CategoryBar() {

    const [activeTab, setActiveTab]=useState("WORLD")
    const tabs = ["WORLD", "TECHNOLOGY", "BUSINESS", "SPORTS"];

    return (
        <div>
            {tabs.map((tab) =>(
                <button 
                key={tab}
                onClick={()=>{setActiveTab(tab)}} 
                className={`px-2 py-1 border ${activeTab == tab? "bg-danger text-white" : "bg-white text-black"}
                `}
                style={{border:"none"}}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

