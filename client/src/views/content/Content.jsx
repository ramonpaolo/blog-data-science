import React, { Component } from "react";
import axios from "axios";

import Card from "../style/card/Card";
import "./Content.css";

class Content extends Component {
  state = {
    users: [],
  };
  pegar = () => {
    axios.get("/api/users").then((e) => {
      const users = e.data.users;
      this.setState({
        users,
      });
    });
  };

  mostrar = () => {
    return (
      <div>
        {this.state.users.map((a) => {
          return (
            <Card
              key={a.id}
              id={a.id}
              name_author={a.name}
              name_project={a.project_name}
              content={a.content}
              github={a.github}
              describe={a.describe}
              lenguages={a.lenguages}
              img1={a.img1}
              img2={a.img2}
              type_img1={a.type_img1}
              type_img2={a.type_img2}
              img_description1={a.img_description1}
              img_description2={a.img_description2}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="content">
        <h1>Projetos Data Science</h1>
        <p>
          Bem vindo a Data Science inc©. Sua plataforma para visualização de
          dados
        </p>
        <button className="btn btn-danger" onClick={this.pegar}>
          Mostrar mini-projetos
        </button>
        <hr color="red" />
        {this.mostrar()}
      </div>
    );
  }
}

export default Content;
