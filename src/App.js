import './App.css';
import './css/bootstrap.min.css';
import Home from "./componentes/home/home";
import Footer from "./componentes/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './componentes/contact/contact.js';
import Menu from './componentes/navbar/navbar.js'; 
import LogIn from './componentes/login/login.js'
import AboutUs from './componentes/aboutus/aboutus.js';
import Registrarme from './componentes/registrarme/registrarme.js';

<meta name="viewport" content="width=device-width, initial-scale=1"/>

function App() {
  return (
<div className='app'>
 
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route exact path='/' element={<Home  />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/register' element={<LogIn />} />
      <Route exact path='/aboutUs' element={<AboutUs/>} />
      <Route exact path='/registrarme' element={<Registrarme/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  ); 
}

export default App;