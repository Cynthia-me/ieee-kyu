import React from 'react';
import { FaAlignRight} from 'react-icons/fa';
import {BrowserRouter as Router,Link} from 'react-router-dom'

import '../Styles/Navbar.css'
import photo from '../Styles/Images/IEEE logo.png'

 export default class Navbar extends React.Component {
    
        state = {
            toggle:false
        }
        Toggle = () => {
            this.setState({toggle:!this.state.toggle})
        }
        render() {
            return (
              <>
                  <div className="navBar">
                      <img src = {photo} alt = "ieee logo"></img>
                        <button className = "toggle-btn" onClick={this.Toggle}>
                            <FaAlignRight />
                        </button>
                        <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                            <Router>
                            <Link style= {{ textDecoration: 'none',color: 'white'}} to={{ pathname: "https://ieeexplore.ieee.org/Xplore/home.jsp" }} target="_blank"><li>IEEE Xplore Digital Library</li></Link>
                            <Link style= {{ textDecoration: 'none',color: 'white'}} to={{ pathname: "http://standards.ieee.org/?_ga=2.11286772.1597595975.1625826250-1460094201.1625556161" }} target="_blank"> <li>IEEE Standards</li></Link>
                            <Link style= {{ textDecoration: 'none',color: 'white'}} to={{ pathname: "http://spectrum.ieee.org/?_ga=2.11286772.1597595975.1625826250-1460094201.1625556161" }} target="_blank"><li>IEEE Spectrum</li></Link>
                            <Link style= {{ textDecoration: 'none',color: 'white'}} to={{ pathname: "https://www.ieee.org/sitemap.html" }} target="_blank"><li href = "#">More Sites</li></Link>
                            </Router>
                            
                        </ul>
                  </div>
              </>
            );
        }
   
}