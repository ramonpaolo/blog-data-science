import React from "react"
import logo from "../../assets/images/logo.svg"
import "../css/bootstrap.min.css"
import "./Footer.css"

function Footer() {

        return (
                <div className="footer">
                        <div className="container footer">
                                <img src={logo} alt="Logo React" width="30%"></img>
                                <p style={{ color: "white" }}>Desenvolvido por: <i><b>Ramon Paolo Maran</b></i></p>
                                <p style={{ color: "white" }}>Utilizado o framework <i>React</i></p>
                                <hr color="white" />
                                <h5>Sobre o autor</h5>
                                <p style={{marginBottom: "0px", paddingBottom: "20px"}}>
                                        Ramon paolo Maran, estudou no Minas, escola técnica de Itapeva-SP,
                                        onde cursou Desenvolvimento de Sistemas e teve seu primeiro contato
                                        com o universo da programaçao.
                                </p>
                        </div>
                </div>
        )

}

export default Footer