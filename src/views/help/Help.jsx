import React from "react";
import "./Ajuda.css";

export default (props) => {
  return (
    <div className="container">
      <h1>Precisa de ajuda em algo ?</h1>
      <p>
        Por Favor, caso esteja tendo algum tipo de dificuldade em nosso site,
        busque alguma resposta pronta abaixo.
      </p>
      <div className="perguntas-respostas">
        <ul>
          <li>
            <strong>O site está instável:</strong>
          </li>
          <li>
            <i>
              O site pode ficar instável algumas vezes por se tratar de um
              serviço gratuito de hospedagem.
            </i>
          </li>
        </ul>

        <ul>
          <li>
            <strong>Os dados sumiram</strong>
          </li>
          <li>
            <i>
              A lentidão do servidor pode ter causado isso. Caso esse problema
              persista por mais de 1 hora, entre em contato:
              <a href="gmail.com/ramonpaolomaran12@gmail.com"> Gmail</a>.
            </i>
          </li>
        </ul>

        <ul>
          <li>
            <strong>Os dados demoram baixar: </strong>
          </li>
          <li>
            <i>
              Nós usamos dados que pertecem a nós e dados de terceiros no qual
              não temos como informar sobre tal lentidão, mas caso seja o nosso
              site, pode ficar lento algumas vezes por se tratar de um serviço
              gratuito de hospedagem. Caso o problema demore ser resolvido, pode
              entrar no repositório no
              <a href="https://github.com/ramonpaolo/blog-data-science">
                {" "}
                Github
              </a>{" "}
              e dentro da pasta "dados" encontrara os dados nossos :)
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};
