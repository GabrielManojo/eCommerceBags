import "./Style/home.css";
import reactLogo from "./assets/react.svg";
import bagImage from "./assets/bag.jpg";
import bagImage1 from "./assets/bag1.webp";
import bagImage2 from "./assets/bag2.webp";
import bagImage3 from "./assets/bag3.webp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/checkout";

function Home() {
  const featuredBags = [
    {
      id: 1,
      name: "Classic Leather Tote",
      price: 89.0,
      image: bagImage,
    },
    {
      id: 2,
      name: "Urban Backpack",
      price: 74.5,
      image: bagImage1,
    },
    {
      id: 3,
      name: "Mini Crossbody",
      price: 59.0,
      image: bagImage2,
    },
    {
      id: 4,
      name: "Elegant Shoulder Bag",
      price: 99.0,
      image: bagImage3,
    },
  ];

  return (
    <div className="home-page">
      <header className="home-header">
        <img src={reactLogo} alt="React Logo" />
        <h1>My Bag Store</h1>
        <p>Stylish bags for everyday life</p>
      </header>

      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <h2>Find the perfect bag for every day</h2>
          <p>
            Shop trendy, practical, and stylish bags for work, travel, and daily
            use.
          </p>
          <Link
            to="/checkout"
            state={{ product: featuredBags[0] }}
            className="buy-btn"
          >
            Buy Now
          </Link>
        </div>

        <div className="hero-image">
          <img src={bagImage} alt="Bag" />
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Bags</h2>
        <div className="featured-grid">
          {featuredBags.map((bag) => (
            <div key={bag.id} className="featured-card">
              <img src={bag.image} alt={bag.name} />
              <h3>{bag.name}</h3>
              <p>${bag.price}</p>
              <Link to="/checkout" state={{ product: bag }} className="buy-btn">
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
