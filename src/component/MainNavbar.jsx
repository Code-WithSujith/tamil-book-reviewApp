import KarkaThamizha from "../assets/KarkaThamizha.svg";
export function MainNavbar (){
    return(
        <nav className="navbar bg-light navbar-expand-md navbar-light ">
            <div className="container-fluid">
                <img src={KarkaThamizha} alt="" className="logo navbar-brand"/>
                {/* <a href="#" className="navbar-brand">This is Brand</a> */}
                <ul className="navbar-nav">
                    <li className="nav-item me-3">Home</li>
                    <li className="nav-item me-3">products</li>
                    <li className="nav-item me-3">Features</li>
                    <li className="nav-item me-3">about</li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="search" className="form-control"/>
                </div>
            </div>
        </nav>
    );
}