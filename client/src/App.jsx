import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import CardDetail from './components/card/CardDetail';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Drawer from './components/drawer/Drawer';
import Archives from './components/archives/Archives';
import { useDrawer } from './hooks/useDrawer';
import Proyects from './components/proyects/Proyects';
import Admin from './components/admin/Admin';
import { AuthProvider } from './context/authContext.jsx'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/card/:id" component={CardDetail} />
            <Route exact path="/Nosotros" component={About} />
            <Route exact path="/Contacto" component={Contact} />
            <Route exact path="/Archivados" component={Archives} />
            <Route exact path="/Proyectos" component={Proyects} />
            <Route exact path="/Admin" component={Admin} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider >
    </>
  )
}

export default App
