import { SideBarNews } from "./SideBarNews";

export function Interviews() {
    return (
        <div className="col-md-4">
            <div className="p-3 w-100">
            <button className="w-100 py-2 fw-bold bg-danger text-white border-0">
                <span>INTERVIEWS</span>
            </button>
            <div className="ps-3 py-3 border">
                <SideBarNews/>
                <SideBarNews/>
                <SideBarNews/>
                <SideBarNews/>

            </div>
        </div>
        </div>
    )
}

