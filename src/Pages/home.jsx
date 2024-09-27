import './home.css';


function Home() {
  return (
    <div className="home-container">
      

      <section className="banner">
        <img src="/images/backgroundhome.png" alt="Background" className="background-image" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>

      <section class="location-grid">
          <div class="location-card">
                  <div class="background_logement">
                      <a href='/logement'><img src="/images/background_logement.png" alt="Cozy Loft"></img></a>
                  </div>
              <h2 class="location-title">Titre de la location</h2>
          </div>
          <div class="location-card">
            <h2>Titre de la location</h2>
          </div>
          <div class="location-card">
            <h2>Titre de la location</h2>
          </div>
          <div class="location-card">
            <h2>Titre de la location</h2>
          </div>
          <div class="location-card">
            <h2>Titre de la location</h2>
          </div>
          <div class="location-card">
            <h2>Titre de la location</h2>
          </div>
        </section>

    </div>
  );
} 

export default Home;
