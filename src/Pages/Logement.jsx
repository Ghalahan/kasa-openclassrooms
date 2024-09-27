import './logement.css';
import Collapse from '../Components/collapse';

function Logement() {
    return (
      <div className="logement-container">

        <section className="banner">
          <img src="/images/background_logement.png" alt="Cozy Loft" className="background-image" />
        </section>

        <section>
            <h2>Cozy Loft on the Canal Saint Martin</h2>
            <h3>Paris, Île de France</h3>
        </section>
        
        <section className="logement-section">

        <Collapse
          className="collapse_logement"
          title="Description"
          text="Contenu sur la fiabilité..."
        />

        <Collapse
          className="collapse_logement"
          title="Équipement"
          text="Contenu sur le respect..."
        />

      </section>
      </div>
    );
}

export default Logement;
