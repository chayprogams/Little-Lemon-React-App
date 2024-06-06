import Dynamicitemsfetch from './Dynamicitems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {Dynamicitemsfetch.slice(0,3).map((item, index) => {
          const { image, Title, description, link, price } = item;
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <img src={image} className="card-img-top" alt={Title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">{Title}</h5>
                    <h5 className="price mb-0">{price}</h5>
                  </div>
                  <p className="card-text">{description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-primary">{link}</a>
                    <span>
                      <FontAwesomeIcon icon={faTruck} /> {/* Delivery Truck Icon */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
