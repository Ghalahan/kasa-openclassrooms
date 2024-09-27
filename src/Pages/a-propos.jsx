import './a-propos.css';
import Collapse from '../Components/collapse';

function APropos() {
  return (
    <div className="apropos-container">
      
      <section className="banner">
        <img src="/images/backgroundapropos.png" alt="Background" className="background-image" />
      </section>

      
      <section className="collapse-section">
        
        <Collapse
          className="collapse"
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent
          une fiabilité totale. Les photos sont conformes aux 
          logements, et toutes les informations sont régulièrement 
          vérifiées par nos équipes."
        />

        <Collapse
          className="collapse"
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entrainera
          une exclusion de notre plateforme"
        />

        <Collapse
          className="collapse"
          title="Service"
          text="La qualité du service est au coeur de notre engagement chez Kasa.
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,
          soit empreinte de respect et de bienveillance"
        />

        <Collapse
          className="collapse"
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
          les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
          En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes de vérifier
          que les standards sont bien respectés. nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
        />
      </section>
    </div>
  );
}

export default APropos;
