import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import CardDetail from './components/card/CardDetail';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/card/:id" component={CardDetail} />
          <Route exact path="/nosotros" component={About} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
