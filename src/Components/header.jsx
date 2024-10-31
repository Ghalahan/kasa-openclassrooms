import { Link,NavLink } from 'react-router-dom';

function Header() {
  return (

      <header className="header">
        <img src="/images/logo.png" alt="Kasa Logo" className="logo" />
        <nav className="nav">

        <NavLink
            to="/Home"
            key= "Accueil"
            className={({ isActive }) => {
              return isActive ? 'active-link' : ''
            }}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            key= "APropos"
            className={({ isActive }) => {
              return isActive ? 'active-link apropos-link' : 'apropos-link'
            }}
          >
            A Propos
          </NavLink>
        </nav>
      </header>
      )}

export default Header;
