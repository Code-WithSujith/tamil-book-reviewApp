import { Route, Routes } from "react-router-dom";
import { Home, BookDetails, BookReview, Review, Writers, Release, Events, Others } from "../pages";
import { ScrollToTop } from "../component/ScrollToTop";
import { Login } from "../component";


function AllRoutes() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Writers" element={<Writers />} />
        <Route path="/Release" element={<Release />} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Others" element={<Others/>} />
        <Route path="BookDetail" element={<BookDetails />} />
        <Route path="BookReview" element={<BookReview />} />
        {/* <Route path="Login" element={<Login/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
