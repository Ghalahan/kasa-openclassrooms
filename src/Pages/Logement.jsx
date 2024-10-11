import { useParams } from 'react-router-dom';
import rentalList from '../Data/logements.json';
import Collapse from '../Components/collapse';
import './logement.css';

function Logement() {

  const { rentalId } = useParams(); 


  const rental = rentalList.find(rental => rental.id === rentalId);

  if (!rental) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement-container">
      <section className="banner">
        <img src={rental.cover} alt={rental.title} className="background-image" />
      </section>

      <section className="listing">
  <div className="title-location-tags-rating">
    <div className="title-author">
      <div className="title-location">
        <h2>{rental.title}</h2>
        <h3>{rental.location}</h3>
      </div>

      <div className="author-info">
  <span className="author">
    {rental.host.name.split(' ')[0]}<br />
    {rental.host.name.split(' ')[1]}
  </span>
  <img className="host-picture" src={rental.host.picture} alt={rental.host.name} />
</div>
</div>
    <div className="tags-rating">
      <div className="tags">
        {rental.tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
        ))}
      </div>

      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rental.rating ? 'filled' : ''}`}>★</span>
        ))}
      </div>
    </div>
  </div>
</section>



<section className="logement-section">
  <Collapse className="collapse" title="Description" text={rental.description} />

  <Collapse className="collapse" title="Équipement" text={rental.equipments.join(', ')} />
</section>

    </div>
  );
}

export default Logement;



// Comment rediriger vers la page d'erreur 404 pour les Logements?