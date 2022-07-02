import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
