import Home from "./components/pagesComps/Home";
import HowItWorks from './components/pagesComps/HowItWorks'
import Donate from './components/pagesComps/Donate'
import About from './components/pagesComps/About'
import Contact from './components/pagesComps/Contact'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/"  element={<Home /> } />
          <Route path="/howitworks" element={<HowItWorks /> } />
          <Route path="/donate" element={<Donate /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
