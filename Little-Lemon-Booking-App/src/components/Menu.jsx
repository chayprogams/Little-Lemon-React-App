import Navbar from "./Navbar"
import Footer from "./Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dynamicitemsfetch from "./Dynamicitems";
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Menus = () => {
    const[data,setData] = useState(Dynamicitemsfetch);
    const [activeCategory, setActiveCategory] = useState('All');
    const starters = Dynamicitemsfetch.filter((item)=>item.category=='starters');
    const specials = Dynamicitemsfetch.filter((item)=>item.category=='specials');
    const mains = Dynamicitemsfetch.filter((item)=>item.category=='mains');
    const desserts = Dynamicitemsfetch.filter((item)=>item.category=='desserts');
    const handleCategoryClick = (category, items) => {
        setData(items);
        setActiveCategory(category);
      };
  return (
    <>
      <Navbar/>
      <ul className="category-nav">
        <li 
          className={`nav-item ${activeCategory === 'All' ? 'active' : ''}`} 
          onClick={() => handleCategoryClick('All', Dynamicitemsfetch)}
        >
          All
        </li>
        <li 
          className={`nav-item ${activeCategory === 'Starters' ? 'active' : ''}`} 
          onClick={() => handleCategoryClick('Starters', starters)}
        >
          Starters
        </li>
        <li 
          className={`nav-item ${activeCategory === 'Mains' ? 'active' : ''}`} 
          onClick={() => handleCategoryClick('Mains', mains)}
        >
          Mains
        </li>
        <li 
          className={`nav-item ${activeCategory === 'Specials' ? 'active' : ''}`} 
          onClick={() => handleCategoryClick('Specials', specials)}
        >
          Specials
        </li>
        <li 
          className={`nav-item ${activeCategory === 'Desserts' ? 'active' : ''}`} 
          onClick={() => handleCategoryClick('Desserts', desserts)}
        >
          Desserts
        </li>
      </ul>
      <div className="container my-5">
      <div className="row">
        {data.map((item, index) => {
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
      <Footer/>
    </>
  )
}

export default Menus
