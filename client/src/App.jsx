import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import CardDetail from './components/card/CardDetail';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/card/:id" component={CardDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
