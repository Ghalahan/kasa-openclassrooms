import './App.css';
import Home from './Pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APropos from './Pages/a-propos';
import Logement from './Pages/Logement';
import Header from './Components/header';
import Footer from './Components/footer';
import Error from './Pages/error';


//Header et Footer



function App() {
  return (
    <div className=''>
       <BrowserRouter>
       <Header />
      <main> 
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            {/*Exemple de Route pour Rental et Rental ID <Route path="/logement/:rentalId" element={<Rental />} /> */}
            <Route exact path="/Logement" element={<Logement />} />
            <Route exact path="/A-Propos" element={<APropos />} />
            <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

        
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
/*
<BrowserRouter>
<Header />
<main>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/logement/:rentalId" element={<Rental />} />
    <Route path="/a-propos" element={<AboutKasa />} />
    <Route path="/adresse-introuvable" element={<Error />} />
    <Route
      path="*"
      element={<Navigate to="/adresse-introuvable" replace />}
    />
  </Routes>
</main>
<Footer />
</BrowserRouter>
*/