const Hero = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h5>Chicago</h5>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes & served with a modern twist.</p>
          <button>Reserve a table</button>
        </div>
        <div className="image-content">
          <img src="/hero.jpg" alt="Food" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
