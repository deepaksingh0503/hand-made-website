import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Home from './componets/Home/Home';
import ProductSection from './componets/ProductSection/ProductSection';
import {Footer} from './componets/Footer/Footer';
function App() {
  return (
   <>
   <div className="main_container">
    <div className="main_home">
   <Navbar/>
   <Home/>
    </div>
    <ProductSection/>
    <Footer/>
   </div>
   
    
   
   
   </>
  );
}

export default App;
