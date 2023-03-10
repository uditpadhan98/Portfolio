import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/education" element={<Education/>} />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
