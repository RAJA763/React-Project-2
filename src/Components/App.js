import { Routes, Route } from 'react-router-dom';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home/Home';
import About from '../Pages/About';
import Mobile from '../Pages/Mobile/Mobile';
import Contact from '../Pages/Contact/Contact';
import Laptop from '../Pages/Laptop/Laptop';
import Tab from '../Pages/Tab/Tab';
import Watch from '../Pages/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/tab' element={<Tab/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
