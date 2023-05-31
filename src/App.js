
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Landingpage/Home/index'

import Workflow from './Landingpage/Workflow/index'
import Team from './Landingpage/Team/index'
import Contact from './Landingpage/Contact/index'
import Navbar from './Landingpage/Navbar/navbar';
import Footer from './Landingpage/Footer/footer';
import Gallery from './Landingpage/Gallery';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sustainability" element={<Workflow/>}/>
      <Route path="/team" element={<Team/>}/>
       <Route path="/contact" element={<Contact/>}/>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/' element={<Footer/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
