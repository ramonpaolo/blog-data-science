import React from "react";
import "./Data.css";

export default (props) => {
  return (
    <div className="data">
      <h1>Dados</h1>
      <h4>Bem vindo a parte mais comum de um Cientista de Dados</h4>
      <h5>Buscar Dados</h5>
      <div>
        <p>
          <strong>
            Nós iremos te mostrar <i>como</i>, <i>onde</i> e <i>quando</i>{" "}
            buscar os dados.
          </strong>
        </p>
        <p>
          Como nós estamos no Brasil, irei focar pegar dados sobre o nosso país
          e sobre a nossa população. Um ótimo lugar para pegar dados referentes
          a dados que "somente" o governo tem, é no próprio site do governo:{" "}
          <a href="http://dados.gov.br/">dados.gov.br</a> . Esse é o site
          oficial do governo brasileiro para acesso a dados de diferentes
          categorias: Educação(ENEM, ENCEJA, Ensino Médio), Saúde(COVID-19,
          Número de pacientes com cancêr), Economia(Importação, Exportação)...
        </p>
        <p>
          Existe um outro site, que é o que eu gosto mais{" "}
          <a href="https://brasil.io/home/">brasil.io</a> . Esse site seria uma
          versão melhorada do site oficial de dados do governo. O{" "}
          <i>brasil.io</i> tem os dados mais recentes de cada parte do
          ministério e tem datasets de outras instituições e de terceiros
          também, ou seja, é um site que facilita muito a obtenção de
          dados(datasets) para nossos algoritmos.
        </p>
        <p>
          Á também o novo site do governo: <a href="https://gov.br">gov.br</a> .
          Você encontrára(de uma forma não muito fácil) diversos dados do
          governo e também suporte a qualquer dado que você queria trabalhar e
          que tenha relação com o poder público. No site você também encontrará
          sobre a <i>LAI</i> que é a <i>Lei do Acesso a Informação</i> que
          garante que todas as ações(com exceção aquelas protegidas por lei
          federal) do poder público na sua frente e prontas para sem baixadas.
          Caso você queria algum dado que não esteja presente no site, basta
          entrar em contato com a "ajuda" sobre o dado que você precisa e eles
          disponibilizarão no site. Um PDF para saber um pouco mais sobre a LAI:{" "}
          <a href="https://www.gov.br/acessoainformacao/pt-br/lai-para-sic/politica-monitoramento/documentos/edicoes-anteriores/informe-semanal_lai_2020-05-15.pdf">
            PDF
          </a>
        </p>
      </div>
    </div>
  );
};
