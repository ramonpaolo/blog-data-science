import React from "react";
import "../../css/bootstrap.min.css";
import "./Footer.css";
import Arrow from "../../../assets/images/arrow.svg";

function voltar_topo() {
  window.scroll(0, 0);
}

function Footer(props) {
  return (
    <div className="footer">
      <div className="container footer">
        <button onClick={voltar_topo} className="btn voltar-topo">
          <img src={Arrow} alt="Seta" />
        </button>
        <p style={{ color: "white" }}>
          Desenvolvido por:
          <i>
            <b> {props.autor}</b>
          </i>
        </p>
        <p style={{ color: "white" }}>
          Utilizado o framework <i>React</i>
          <img
            width="40px"
            alt="React"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
          ></img>
        </p>
        <hr />
        <div className="text-left max-width">
          <p>
            Acesse o perfil de <strong>{props.autor}</strong> no
            <strong>
              <a href="https://github.com/ramonpaolo"> Github</a>
            </strong>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/github-169-1174970.png"
              color="white"
              width="30px"
              alt="imagem Github"
            />
            para ficar mais ligado em seus projetos.
          </p>
          <p>
            Já pensou em ajudar o site a crescer e ao mesmo tempo a gente ajudar
            a você a crescer? Você pode conseguir isso, simples, nos ajudando na
            construção e melhorias do nosso site no Github. Basta entrar nesse
            link do
            <strong>
              <a href="https://github.com/ramonpaolo/blog-data-science">
                {" "}
                Github
              </a>
            </strong>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/github-169-1174970.png"
              color="white"
              width="30px"
              alt="imagem Github"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
