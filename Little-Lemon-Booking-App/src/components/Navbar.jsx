import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "wheat" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/header.png" alt="Logo" width={200} />
        </a>
        <button
          className="navbar-toggler d-lg-none" // Show only on mobile devices
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <motion.div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{ color: 'Black' }} className="nav-link active" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: 'Black' }} className="nav-link active" to={'/aboutus'}>About us</Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: 'Black' }} className="nav-link active" to={'/menu'}>Menu</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'Black' }}>Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'Black' }}>Order Online</a>
            </li>
            <li className="nav-item">
            <Link style={{ color: 'Black' }} className="nav-link active" to={'/login'}>Login</Link>
            </li>
          </ul>
        </motion.div>
        <div className="navbar-collapse d-none d-lg-flex"> {/* Show only on larger screens */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{ color: 'Black' }} className="nav-link active" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: 'Black' }} className="nav-link active" to={'/aboutus'}>About us</Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: 'Black' }} className="nav-link active" to={'/menu'}>Menu</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'Black' }}>Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'Black' }}>Order Online</a>
            </li>
            <li className="nav-item">
            <Link style={{ color: 'Black' }} className="nav-link active" to={'/login'}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
