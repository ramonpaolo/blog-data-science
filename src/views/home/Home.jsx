import React from "react";

import "./Home.css";

import logo from "../../assets/images/data_Science.jpg";
import python from "../../assets/images/Python.png";
import r from "../../assets/images/r.png";

class MyHomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Bem Vindo</h1>
        <hr color="red" />
        <div>
          <img
            className="img-fluid"
            src={logo}
            alt="Logo com linguagens de programação"
          />
          <div>
            <h2>Data Science</h2>
            <h6>
              <i>Ciência de Dados</i>
            </h6>
            <p style={{ paddingTop: "10px" }}>
              Esse é um Blog sobre Data Science para qualquer pessoa. Aqui nós
              ensinaremos e aprenderemos juntos, com dados reais.
            </p>
            <div className="row-cols-2">
              <img
                src={python}
                className="img-fluid"
                style={{ width: "100px" }}
                alt="Python"
              />
              <img
                src={r}
                className="img-fluid"
                style={{ width: "100px" }}
                alt="R"
              />
            </div>
          </div>
        </div>
        <div>
          <hr color="red" />
          <div>
            <div>
              <h3>Porque Python?</h3>
              <p>
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
          <hr color="red" />
          <div>
            <div>
              <h2>O que aprenderemos?</h2>
              <p>
                Nós começaremos com o básico mesmo, iniciando com Python e logo
                partiremos para Data Science, pegando dados públicos e do Banco
                de Dados nosso mesmo, do nosso próprio site. Utilizaremos a
                bibliotecas: <i>Pandas</i>,<i>csv</i>, <i>request</i>,
                <i>matplotlib</i>, <i>Pygal</i>, <i>JSON</i>,<i>Scikit-learn</i>
                , <i>Tensorflow</i>.
              </p>
              <p>
                Também aprenderemos a mexer com o <i>Jupyter</i>, mas
                especificamente com o <i>Jupyter-Notebook</i> para trabalharmos
                com Python e Data Science de uma forma mais fácil e rápido.
              </p>

              <p>
                Ensinaremos tanto a baixar, instalar e configurar a IDE para o
                desenvolvimento dos exercícios propostos. Qualquer dúvida ou
                sugestão será muito bem vinda em nosso{" "}
                <a
                  href="https://github.com/ramonpaolo/blog-data-science"
                  className="link"
                >
                  Github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyHomePage;
