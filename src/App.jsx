import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./views/style/navbar/Navbar";
import Content from "./views/content/Content";
import Footer from "./views/style/footer/Footer";
import Home from "./views/home/Home";
import Data from "./views/datas/Data";
import Help from "./views/help/Help";
import Add_conteudo from "./views/add_conteudo/Add_conteudo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar
          link1="Home"
          link2="Conteudo"
          link3="Dados"
          link4="Ajuda"
          link5="Add Conteudo"
        />

        <br />
        <br />
        <br />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/data" component={Data} />
          <Route path="/add_content" component={Add_conteudo} />
          <Route path="/help" component={Help} />
        </Switch>
      </Router>
      <Footer autor="Ramon Paolo Maran" />
    </div>
  );
}

export default App;
