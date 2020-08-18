import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./views/style/navbar/Navbar";
import Content from "./views/content/Content";
import Footer from "./views/style/footer/Footer";
import Home from "./views/home/Home";
import Data from "./views/dados/Dados";
import Help from "./views/ajuda/Ajuda";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar link1="Home" link2="Conteudo" link3="Dados" link4="Ajuda" />

        <br />
        <br />
        <br />

        <Switch>
          <Route path="/blog-data-science" exact component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/data" component={Data} />
          <Route path="/help" component={Help} />
        </Switch>
      </Router>
      <Footer autor="Ramon Paolo Maran"/>
    </div>
  );
}

export default App;
