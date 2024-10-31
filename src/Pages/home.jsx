import './home.css';
import rentalList from '../Data/logements.json'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      

      <section className="banner">
        <img src="/images/backgroundhome.png" alt="Background" className="background-image" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>

      <section className="location-grid">

      {rentalList.map((rental) => (
          <Link to={`/Logement/${rental.id}`} key={rental.id}>
            <div className="location-card" style={{backgroundImage: `url(${rental.cover})`}}>
              <h2 className="location-title">{rental.title}</h2>
            </div>
          </Link>
      ))}
          
        </section>

    </div>
  );
} 

export default Home;
