import './App.css';
function App() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2>AWS Demo</h2>
        <span>My First Deployment</span>
      </nav>

      <section className="hero">
        <h1>Welcome to My Website</h1>

        <p>
          This website is built using React and deployed
          on AWS through a CI/CD pipeline.
        </p>

        <button>Explore More</button>
      </section>

      <section className="features">
        <div className="card">
          <h2>React</h2>
          <p>Frontend development using React.</p>
        </div>

        <div className="card">
          <h2>GitHub</h2>
          <p>Version control and source code management.</p>
        </div>

        <div className="card">
          <h2>AWS</h2>
          <p>Cloud hosting and automatic deployment.</p>
        </div>
      </section>

      <footer>
        <p>My First AWS CI/CD Project © 2026</p>
      </footer>
    </div>
  );
}

export default App;
