import React from 'react'
import '../Styles/HeaderImage.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'

function HeaderImage() {
    return (
        <div className = "head">
            <div className = "head_social">
            <h1>IEEE KYAMBOGO UNIVERSITY STUDENT BRANCH</h1>
            <div className = "social">
                <Router>
                    <Link><i class='fab fa-twitter-square' style={{fontSize:'36px',color:'white',paddingBottom: '1rem'}}></i></Link>
                    <Link><i class='fab fa-facebook' style={{fontSize:'36px',color:'white'}}></i></Link>
                    
                </Router>
            </div>
            </div>
            <div className = "head__nav">
                <div className = "head__option">
                    <span className = "option2">
                    HOME
                    </span>
                </div>
                <div className = "head__option">
                <span className = "option2">
                    ABOUT US
                    </span>
                </div>
                <div className = "head__option">
                <span className = "option2">
                EVENTS 
                    </span>
                </div>
                <div className = "head__option">
                <span className = "option2">
                    EXECUTIVE COMMITTEE
                    </span>
                </div>
                <div className = "head__option">
                <span className = "option2">
                    CONTACT
                    </span>
                </div>

            </div>
        </div>
    )
}

export default HeaderImage
