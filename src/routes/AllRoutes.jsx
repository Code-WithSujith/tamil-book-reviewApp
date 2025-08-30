import { Route, Routes } from "react-router-dom";
import { Home, CategorySection, TopReviews, Authorsection, BookDetails } from "../pages";


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Category" element={<CategorySection/>}/>
        <Route path="TopReview" element={<TopReviews/>}/>
        <Route path="Author" element={<Authorsection/>}/>
        <Route path="BookDetail" element={<BookDetails/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
