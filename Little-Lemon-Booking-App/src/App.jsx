import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Menu from './components/Menu-items'
import Booktable from './components/Booktable'
import Footer from './components/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/Booktable" element={<Booktable/>} />
        <Route path="/" element={
        <>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Menu/>
        <Footer/>
        </>
  }
     />
        {/* Add more routes as needed */}
    </Routes>
    </Router>
    </>
  )
}

export default App
