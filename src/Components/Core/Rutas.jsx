import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import News from '../Pages/News';
import Roster from '../Pages/Roster';
import Video from '../Pages/Video';
import AboutUs from '../Pages/Aboutus';
import Shop from '../Pages/Shop';
import Landing from '../Pages/Landing';
import Footer from './Footer';
import PlayerDetail from '../Pages/PlayerDetail'; // Importa el componente PlayerDetail

const Rutas = ({ players }) => { // Recibe la lista de jugadores como una propiedad
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Video' element={<Video />} />
          <Route path='/Plantilla' element={<Roster players={players} />} /> {/* Pasa la lista de jugadores al componente Roster */}
          <Route path='/Noticias' element={<News />} />
          <Route path='/Tienda' element={<Shop />} />
          <Route path='/jugadores/:playerId' element={<PlayerDetail players={players} />} /> {/* Pasa la lista de jugadores al componente PlayerDetail */}
          <Route path='' element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Rutas;
