import Navbar from './Navbar';
import Footer from './Footer';
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-us py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="image-content text-center">
                <img src="/littlelemonabout.png" alt="About-us - Little Lemon Restaurant" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 description">
              <div className="text-content">
                <article className="about-description">
                  <p>
                    <strong>Welcome to Little Lemon,</strong>
                    where traditional Mediterranean cuisine meets a modern twist! We are a family-owned restaurant located in the heart of Chicago, Illinois, serving up delicious dishes inspired by Italian, Greek, and Turkish culture. Our restaurant is owned by two Italian brothers,
                    <strong> Mario and Adrian,</strong>
                    who share a passion for food and hospitality. Mario, our head chef, brings his experience cooking in Italy and family recipes to our menu. Adrian, our marketing guru, led the effort to expand our menu beyond classic Italian dishes and incorporate other Mediterranean cuisines. Whether youre looking for a quick bite or a leisurely meal,
                    <strong> Little Lemon is the perfect destination for you.</strong>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
