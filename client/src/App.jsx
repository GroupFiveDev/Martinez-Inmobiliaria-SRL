import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import CardDetail from './components/card/CardDetail';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Archives from './components/archives/Archives';
import Proyects from './components/proyects/Proyects';
import Admin from './components/admin/Admin';
import CreateProperty from './components/createProperty/CreateProperty';
import Drawer from './components/drawer/Drawer';
import Map from './components/map/Map'
import { useDrawer } from './hooks/useDrawer';
import { useAuth } from './context/authContext';
import Navbar from './components/navbar/NavBar';
import ApiStatus from './components/apiStatus/ApiStatus';

function App() {
  const { openDrawer, closeDrawer, isOpen } = useDrawer()
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <ApiStatus />
      <button name="drawer" onClick={openDrawer} className={`${user ? "flex" : ""}hidden fixed top-0 left-0 bg-red-500 p-5 rounded-2xl z-[100]`}>ADMIN</button>
      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetail />} />
        <Route path="/Nosotros" element={<About />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="/Archivados" element={<Archives />} />
        <Route path="/Proyectos" element={<Proyects />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/create" element={<CreateProperty />} />
        <Route path="/Mapa" element={<Map />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
