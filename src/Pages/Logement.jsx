import { useParams, Navigate } from 'react-router-dom';
import rentalList from '../Data/logements.json';
import Collapse from '../Components/collapse';
import './logement.css';
import { useState } from 'react';
import expandArrowBack from '../Assets/arrow_back.png';
import expandArrowForward from '../Assets/arrow_forward.png';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lastItem =  pictures.length;

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  

  return (
    <div className="carousel-container">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      <div className='numerotation'> {currentIndex + 1}/ {lastItem}</div>

      {pictures.length > 1 && (
        <>
          <button onClick={previousSlide} className="left-arrow">
            <img src={expandArrowBack} alt="Previous Slide" />
          </button>
          <button onClick={nextSlide} className="right-arrow">
            <img src={expandArrowForward} alt="Next Slide" />
          </button>
        </>
      )}


    </div>
  );
}

function Logement() {
  const { rentalId } = useParams(); 
  const rental = rentalList.find(rental => rental.id === rentalId);

  // Si l'ID est introuvable, redirige vers la page d'erreur
  if (!rental) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="logement-container">
      <section className="banner">
        {/* Remplacer l'image statique par le carrousel */}
        <Carousel pictures={rental.pictures} />
      </section>

      <section className="listing">
  <div className="title-location-tags-rating">
    
    <div className="title-author">
      <div className="title-location">
        <h2>{rental.title}</h2>
        <h3>{rental.location}</h3>
      </div>

      <div className="tags-rating">
        <div className="tags">
          {rental.tags.map((tag, index) => (
            <span className="tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="rating-author">
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rental.rating ? 'filled' : ''}`}>★</span>
        ))}
      </div>

      <div className="author-info">
        <span className="author">
          {rental.host.name.split(' ')[0]}<br />
          {rental.host.name.split(' ')[1]}
        </span>
        <img className="host-picture" src={rental.host.picture} alt={rental.host.name} />
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


//text transform: uppercase