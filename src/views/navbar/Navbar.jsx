import React from "react"
import "../css/bootstrap.min.css"
import "./Navbar.css"
import { Link } from "react-router-dom"

class NavBar extends React.Component {
        constructor(props) {
                super()
        }
        render() {
                return (
                        <div>
                                <nav className="navbar-expand background ">
                                        <div className="hidden">
                                                <ul className="navbar-expand navbar-nav text-center">
                                                        <Link to="/">
                                                                <li className="nav-item">
                                                                        <a href="https://youtube.com" className="nav-link active">{this.props.link1}</a>
                                                                </li>
                                                        </Link>
                                                        <Link to="/content">
                                                                <li className="nav-item">
                                                                        <a href="https://youtube.com" className="nav-link">{this.props.link2}</a>
                                                                </li>
                                                        </Link>
                                                        <Link to="/dados">
                                                                <li className="nav-item">
                                                                        <a href="https://youtube.com" className="nav-link">{this.props.link3}</a>
                                                                </li>
                                                        </Link>
                                                        <Link to="/codigo">
                                                                <li className="nav-item">
                                                                        <a href="https://youtube.com" className="nav-link">{this.props.link4}</a>
                                                                </li>
                                                        </Link>
                                                        <Link to="/ajuda">
                                                                <li className="nav-item">
                                                                        <a href="https://youtube.com" className="nav-link">{this.props.link5}</a>
                                                                </li>
                                                        </Link>


                                                </ul>

                                        </div>
                                        <button className="btn hidden-button" style={{ color: "white" }}>Toggle with</button>
                                </nav>

                        </div>
                )
        }
}

export default NavBar