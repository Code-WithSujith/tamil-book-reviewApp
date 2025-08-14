
import './App.css';
import { Banner, Header, MainNavbar } from './component';
import AllRoutes from './routes/AllRoutes';

function App() {

  return (
    <div>
      <Header/>
      <MainNavbar/>
      <Banner/>
      <AllRoutes/>
    </div>
  )
}

export default App
