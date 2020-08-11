import React from "react";
import "../../css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    mostrar: 0,
    class: "hidden"
  };
  menu = () => {
    if (this.state.mostrar === 0) {
      this.setState({
        mostrar: 1,
        class: ""
      });
    } else {
      this.setState({
        mostrar: 0,
        class: "hidden"
      });
    }
  };
  render() {
    return (
      <div>
        <nav className="navbar-expand background ">
          <div className={this.state.class}>
          <ul className="navbar-expand navbar-nav justify-between">
               <Link to="/">
                <li>
                  {this.props.link1}
                </li>
              </Link>
              <Link to="/content">
                <li>
                  {this.props.link2}
                </li>
              </Link>
              <Link to="/data">
                <li>
                  {this.props.link3}
                </li>
              </Link>
              <Link to="/help">
                <li>
                  {this.props.link4}
                </li>
              </Link>
            </ul>
          </div> 
          <button
            onClick={this.menu}
            className="hidden-button"
            style={{ color: "white" }}
          >
            Menu
          </button>
          
        </nav>
      </div>
    );
  }
}

export default NavBar;

{/*{this.state.mostrar === 1 ? <ul className="navbar-expand navbar-nav text-center">
               <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active">{this.props.link1}</a>
                </li>
              </Link>
              <Link to="/content">
                <li className="nav-item">
                  <a className="nav-link">{this.props.link2}</a>
                </li>
              </Link>
              <Link to="/data">
                <li className="nav-item">
                  <a className="nav-link">{this.props.link3}</a>
                </li>
              </Link>
              <Link to="/codigo">
                <li className="nav-item">
                  <a className="nav-link">{this.props.link4}</a>
                </li>
              </Link>
              <Link to="/ajuda">
                <li className="nav-item">
                  <a className="nav-link">{this.props.link5}</a>
                </li>
              </Link>
            </ul> : false} */ }