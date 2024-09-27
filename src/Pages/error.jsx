import './error.css';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="error-container">
            <section className="error">
                <div className="error_404">
                    <h1>404</h1>
                </div>
                <p className="error-message">Oups! La page que vous recherchez n'existe pas.</p>
                <Link to="/Home" className='home-link'>Retourner sur la page d'accueil</Link>
            </section>
        </div>
    );
}

export default Error;
