import React from "react"
import "../css/bootstrap.min.css"
import covid_brasil from "../../assets/images/comparação_covid_brasil.svg"
import covid_itapeva from "../../assets/images/covid_itapeva.png"
import infectados_itapeva from "../../assets/images/infectados_itapeva.svg"
import python from "../../assets/images/Python.png"
import "./Content.css"

function Content() {

        return (
                <div className="container content">
                        <div>
                                <h1>Data Science</h1>
                                <p>Bem vindo a Data Science inc©. Sua plataforma para visualização de dados</p>
                                <hr color="red"></hr>
                                <figure className="figure">
                                        <img src={python} alt="Python" className="img-thumbnail figure-img"></img>
                                        <figcaption className="figure-caption">
                                                <p>Foi utilizado a linguagem Python para a amostra desses dados, junto com as bibliotecas
                                                        <i>Pandas, Matplotlib, Pygal, Pygal_maps_world, request</i>
                                                </p>
                                        </figcaption>
                                </figure>
                        </div>
                        <div>
                                <p>Esse gráfico dis respeito a comparação de números de infectados nas maiores cidades do Brasil.</p>
                                <hr className="text-break"></hr>
                                <figure className="figure">
                                        <embed type="image/svg+xml" src={covid_brasil} className="img-fluid"></embed>
                                        <figcaption className="figure-caption">
                                                <button className="btn btn-danger">Baixar SVG</button>
                                        </figcaption>
                                </figure>
                        </div>
                        <div>
                                <figure className="figure">
                                        <img className="figure-img" src={covid_itapeva} width="90%" alt="Gráfico COVID-19 em Itapeva"></img>
                                        <figcaption className="figure-caption">
                                                <button className="btn btn-danger">Baixar SVG</button>
                                        </figcaption>
                                </figure>
                        </div>
                        <div>
                                <figure className="figure">
                                        <embed type="image/svg+xml" src={infectados_itapeva} className="img-fluid"></embed>
                                        <figcaption className="figure-caption">
                                                <button className="btn btn-danger">Baixar SVG</button>
                                        </figcaption>
                                </figure>
                        </div>
                </div>
        )

}

export default Content