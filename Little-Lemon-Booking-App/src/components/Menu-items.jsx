import Dynamiccardfetch from "./Dynamiccardfetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {Dynamiccardfetch.map((item, index) => {
          const { image, Title, description, link,price } = item;
          return (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100" style={{ width: '80%' }}>
                <img src={image} className="card-img-top" alt={Title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between tpc"> 
                        <h5 className="card-title">{Title}</h5>
                        <h5 className="price">{price}</h5>
                    </div>
                 
                  <p className="card-text">{description}</p>
                  <div className="d-flex justify-content-between align-items-center">
  <a href="#" className="btn btn-primary mt-auto">{link}</a>
  <span>
    <FontAwesomeIcon icon={faTruck} />  {/* Delivery Truck Icon */}
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
