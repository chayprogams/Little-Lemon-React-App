const Navbar = () => {
    return (
      <>
        <nav className="d-flex justify-content-between align-items-center p-2" style={{backgroundColor:"wheat"}}>
          <div className="d-flex align-items-center">
            <img src="/header.png" alt="Logo" width={200} />
          </div>
          <ul className="nav justify-content-end mb-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'Black' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'Black' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'Black' }}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'Black' }}>Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'Black' }}>Order Online</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'Black' }}>Login</a>
            </li>
          </ul>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  