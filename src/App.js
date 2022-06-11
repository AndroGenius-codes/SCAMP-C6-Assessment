import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { Images } from "./components/Images";
import Main from './components/Main'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
     <Router>
       <Navbar />
       <Routes>
         <Route path='/' />
       </Routes>

     </Router>
     <Carousel slides={Images} />
     <Main />
   </>
  );
}

export default App;
