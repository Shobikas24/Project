
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./React-app/Home";
import './React-app/Css/Section4.css';
import Contact from './React-app/Components/Contact';
import About from './React-app/Components/About';
import Message from './React-app/Components/Message';
import Services from './React-app/Components/Services';

import Cart from "./React-app/Components/Cart";
import Readmore from './React-app/Readmore';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/About" element={ <About/> } />
      <Route path="/Services" element={ <Services/> } />
      <Route path="/Contacts" element={ <Contact/> } />
      <Route path="/Cart" element={ <Cart/> } />
      <Route path="/Message" element={ <Message/> } />
      <Route path="/Readmore" element={<Readmore/>}/>
      
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
