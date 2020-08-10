import React from "react";
import logo from "../../assets/images/data_Science.jpg";
import "../../views/css/bootstrap.min.css";
import python from "../../assets/images/Python.png";
import r from "../../assets/images/r.png";

class MyHomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ paddingTop: "1.7em" }}>Bem Vindo</h1>
        <hr color="red"></hr>
        <div class="card">
          <img
            className="card-img-top"
            src={logo}
            alt="Logo com linguagens de programação"
          />
          <div classname="card-body">
            <h2 className="card-title">Data Science</h2>
            <h6 className="card-subtitle">
              <i>Ciência de Dados</i>
            </h6>
            <p className="card-text" style={{ paddingTop: "10px" }}>
              Esse é um Blog sobre Data Science para qualquer pessoa. Aqui nós
              ensinaremos e aprenderemos juntos, com dados reais.
            </p>
            <div className="row-cols-2">
              <img
                src={python}
                className="card-img"
                style={{ width: "100px" }}
                alt="Python"
              />
              <img
                src={r}
                className="card-img"
                style={{ width: "100px" }}
                alt="R"
              />
            </div>
          </div>
        </div>
        <div>
          <hr color="red" />
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Porque Python?</h3>
              <p className="card-text">
                Bom, o uso de Python para Data Science se justifica pois Python
                é muito rico em bibliotecas para Data Science.
              </p>
              <p>Há também outros fatores, entre eles são: </p>
              <div
                className="align-content-start align-items-lg-start"
                style={{
                  padding: "0px",
                  margin: "0px",
                  alignItems: "start",
                  alignContent: "start",
                }}
              >
                <ul className="list-inline-item">
                  <li>fácil entendimento da linguagem</li>
                  <li>Rico acervo de bibliotecas</li>
                  <li>Funciona em qualquer sistema operacional</li>
                  <li>Versatiblidade</li>
                </ul>
                <br />
                <p>
                  Mas Python não é uma <i>"bala de prata"</i>, assim como
                  qualquer coisa e como qualquer outra linguagem, tem seus
                  pontos negativos. Entre eles são:
                </p>
                <ul className="list-inline-item">
                  <li>Linguagem interpretada</li>
                  <li>Sintaxe diferente da maioria de outras linguagens</li>
                  <li>Tipagem fraca</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
                <div className="card-body">
                <h2 className="card-title">O que aprenderemos?</h2>
                <p>
                        Nós começaremos com o básico mesmo, iniciando com Python e logo partiremos
                        para Data Science, pegando dados públicos e do Banco de Dados
                </p>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyHomePage;
