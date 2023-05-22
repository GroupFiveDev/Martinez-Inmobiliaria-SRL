import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
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
import { useState } from 'react';
import NavBar2 from './components/navbar/NavBar2';
import NavBar3 from './components/navbar/NavBar3.';

function App() {
  const { openDrawer, closeDrawer, isOpen } = useDrawer()
  let [navBar, setnavBar] = useState(1)
  const { user } = useAuth()

  return (
    <>
      <Router>
        {
          navBar === 1 ? <NavBar /> : navBar === 2 ? <NavBar2 /> : navBar === 3 ? <NavBar3 /> : ""
        }
        <button name="drawer" onClick={() => navBar == 1 ? setnavBar(2) : navBar === 2 ? setnavBar(3) : setnavBar(1)} className={`${user ? "flex" : ""}hidden fixed top-20 left-0 bg-red-500 p-5 rounded-2xl z-[100]`}>navbar</button>
        <button name="drawer" onClick={openDrawer} className={`${user ? "flex" : ""}hidden fixed top-0 left-0 bg-red-500 p-5 rounded-2xl z-[100]`}>ADMIN</button>
        <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/card/:id" component={CardDetail} />
          <Route exact path="/Nosotros" component={About} />
          <Route exact path="/Contacto" component={Contact} />
          <Route exact path="/Archivados" component={Archives} />
          <Route exact path="/Proyectos" component={Proyects} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/create" component={CreateProperty} />
          <Route exact path="/Mapa" component={Map} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
