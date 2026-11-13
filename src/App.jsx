
import "./App.css";

const products = [
  {
    id: 1,
    name: "The Sovereign",
    category: "AUTOMATIC COLLECTION",
    price: "$12,800",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
  },
  {
    id: 2,
    name: "The Obsidian",
    category: "SIGNATURE COLLECTION",
    price: "$9,500",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
  },
  {
    id: 3,
    name: "The Heritage",
    category: "CLASSIC COLLECTION",
    price: "$15,200",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
  },
];

function App() {
  return (
    <div className="luxury-page">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          AURELION<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Homeeee</a>
          <a href="#collection">Collectionnnn</a>
          <a href="#story">Our Storyyyy</a>
          <a href="#contact">Contactttt</a>
        </div>

        <a href="#collection" className="nav-button">
          Explore <span>↗</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">
            THE ART OF TIMELESS LUXURY
          </p>

          <h1>
            TIMELESS
            <br />
            <span>ELEGANCE.</span>
          </h1>

          <p className="hero-description">
            Beyond time. Beyond trends.
            <br />
            Discover the art of exceptional craftsmanship.
          </p>

          <a href="#collection" className="gold-button">
            DISCOVER COLLECTION <span>↗</span>
          </a>
        </div>

        <div className="hero-bottom">
          <span>EST. MMXXVI</span>
          <span>CRAFTED FOR GENERATIONS</span>
          <span>01 — 03</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro">
        <p className="eyebrow">A LEGACY OF EXCELLENCE</p>

        <h2>
          Luxury is not about being noticed.
          <br />
          <span>It's about being remembered.</span>
        </h2>

        <p className="intro-text">
          Every detail tells a story. Every creation represents
          precision, passion and the pursuit of perfection.
          Welcome to a world where time becomes art.
        </p>
      </section>

      {/* Collection */}
      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURATED PERFECTION</p>
            <h2>THE COLLECTION</h2>
          </div>

          <a href="#contact" className="text-link">
            VIEW ALL PIECES ↗
          </a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-number">
                  0{product.id}
                </span>
              </div>

              <div className="product-info">
                <div>
                  <p className="product-category">
                    {product.category}
                  </p>
                  <h3>{product.name}</h3>
                </div>

                <p className="product-price">{product.price}</p>
              </div>

              <a href="#contact" className="product-link">
                DISCOVER PIECE <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="story" id="story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
            alt="Luxury craftsmanship"
          />
        </div>

        <div className="story-content">
          <p className="eyebrow">OUR PHILOSOPHY</p>

          <h2>
            Crafted with
            <br />
            <span>purpose.</span>
            <br />
            Defined by
            <br />
            <span>perfection.</span>
          </h2>

          <p>
            We believe true luxury lives in the details.
            From the first sketch to the final finish,
            every creation reflects an uncompromising
            commitment to quality.
          </p>

          <a href="#contact" className="gold-button">
            OUR STORY <span>↗</span>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="experience">
        <p className="eyebrow">THE AURELION EXPERIENCE</p>

        <h2>
          Not made for everyone.
          <br />
          <span>Made to last forever.</span>
        </h2>

        <a href="#collection" className="gold-button">
          EXPLORE THE WORLD OF AURELION ↗
        </a>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-top">
          <div>
            <a href="#home" className="logo">
              AURELION<span>.</span>
            </a>
            <p>TIMELESS BY DESIGN.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#collection">Collection</a>
            <a href="#story">Our Story</a>
            <a href="mailto:contact@aurelion.com">Email Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AURELION. ALL RIGHTS RESERVED.</p>
          <p>CRAFTED BEYOND TIME.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
