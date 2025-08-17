
import './App.css';
import { Banner, Footer, Header, MainNavbar } from './component';
import AllRoutes from './routes/AllRoutes';

function App() {

  return (
    <div>
      <Header/>
      <MainNavbar/>
      <Banner/>
      <Footer/>
      {/* <AllRoutes/> */}
    </div>
  )
}

export default App
