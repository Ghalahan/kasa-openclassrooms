import './logement.css';
import Collapse from '../Components/collapse';

function Logement() {
    return (
      <div className="logement-container">

        <section className="banner">
          <img src="/images/background_logement.png" alt="Cozy Loft" className="background-image" />
        </section>

        <section class="listing">
    <div class="title-location">
        <h2>Cozy loft on the Canal Saint-Martin</h2>
        <h3>Paris, Île-de-France</h3>
    </div>

    <div class="tags">
        <span class="tag">Cozy</span>
        <span class="tag">Canal</span>
        <span class="tag">Paris 10</span>
    </div>

    <div class="author-rating">
        <span class="author">Alexandre Dumas</span>
        <div class="rating">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
        </div>
    </div>
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
