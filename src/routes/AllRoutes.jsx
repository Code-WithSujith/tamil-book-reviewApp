import { Route, Routes } from "react-router-dom";
import { Home, CategorySection, TopReviews, Authorsection, BookDetails, BookReview } from "../pages";
import { ScrollToTop } from "../component/ScrollToTop";


function AllRoutes() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Category" element={<CategorySection/>}/>
        <Route path="/TopReview" element={<TopReviews/>}/>
        <Route path="/Author" element={<Authorsection/>}/>
        <Route path="/BookDetail" element={<BookDetails/>}/>
        <Route path="/BookReview" element={<BookReview/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
