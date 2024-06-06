import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Menu from './components/Menu-items'
import Footer from './components/Footer'
import About from './components/About'
import BookSlot from './components/Bookslot'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Displayslots from './components/Displayslots'
import Menus from './components/Menu'
import Login from './components/Login'
import SignUp from './components/signup'
function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/Bookslot" element={<BookSlot/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/available-slots" element={<Displayslots/>} />
        <Route path="/menu" element={<Menus/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
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
