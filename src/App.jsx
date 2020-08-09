import React from 'react';
import './App.css';
import NavBar from './views/navbar/Navbar';
import Content from './views/content/Content';
import Footer from './views/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MyHomePage from './views/home/Home';
import Ajuda from "./views/ajuda/Ajuda"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar arrow=">" link1="Home" link2="Conteudo" link3="Dados" link4="Código" link5="Ajuda" />
        <Switch>
          <Route path="/" exact component={MyHomePage} />
          <Route path="/content" component={Content} />
          <Route path="/ajuda" component={Ajuda} />
        </Switch>
        <Footer></Footer>
      </div>

    </Router>

  );
}

export default App;