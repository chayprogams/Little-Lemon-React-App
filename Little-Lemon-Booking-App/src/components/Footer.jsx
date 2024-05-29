import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
        <div className="col-md-4">
           <img src='./header.png' width={250}></img>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
             <a href=''><li>Home</li></a>
             <a href=''><li>About</li></a>
             <a href=''><li>Menu</li></a>
             <a href=''><li>Reservations</li></a>
             <a href=''><li>Order Online</li></a>
             <a href=''><li>Login</li></a>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>Address: 220 N Green St, Chicago, IL 60607</li>
              <li>Phone: (312) 555-5555</li>
              <li>Email: contact@littlelemon.biz</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="text-light mx-2" /></a>
              <a href="https://x.com/?lang=en-in"><FontAwesomeIcon icon={faTwitter} className="text-light mx-2" /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="text-light mx-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
