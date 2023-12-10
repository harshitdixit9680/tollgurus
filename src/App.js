import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
// 
// import About from './component/About';
import Toll from './component/Toll';
import { Class } from 'leaflet';


function App() {
  // app.use(cors())
  return (
    <>
   <Navbar/>
      <Routes >
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/clone" element={<Class />} />
          {/* <Route exact path="/" element={<Toll />} /> */}
         
         
          {/* <Route path="tollGuru/*" element={<Home />} /> */}
        </Routes>
    </>
    );
}

export default App;
