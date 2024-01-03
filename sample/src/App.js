
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./React-app/Home";
import Contact from './React-app/Components/Contact';
import About from './React-app/Components/About';
import Message from './React-app/Components/Message';
import Cart from "./React-app/Components/Cart";
import Services from './React-app/Components/Services';
import Picture1 from './React-app/Picture1';
import Picture2 from './React-app/Picture2';
import Picture3 from './React-app/Picture3';

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
      <Route path="/Picture1" element={<Picture1/>} />
      <Route path="/Picture2" element={<Picture2/>}/>
      <Route path="/Picture3" element={<Picture3/>}/>
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
