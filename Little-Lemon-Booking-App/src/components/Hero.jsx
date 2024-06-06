import { Link } from "react-router-dom";
const Hero = () => {
    return (
      <div className="hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="text-content">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes & served with a modern twist.</p>
                <Link to="/Bookslot" className="btn btn-warning">Reserve a table</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-content">
                <img src="/hero.jpg" alt="Little Lemon Restaurant - Food Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Hero;