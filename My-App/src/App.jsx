import './App.css'
import About from './About'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import Navbar from './Navbar'
import './CSS/Navbar.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About names="Hari Dharsaun" age={18} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
