import React from 'react'
import '../Styles/HeaderImage.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function HeaderImage() {
    return (
        <div className = "head">
            <div className = "head_social">
            <h1>IEEE KYAMBOGO UNIVERSITY STUDENT BRANCH</h1>
            <div className = "social">
                <Router>
                    <Link><FacebookIcon style = {{color:'white',fontSize: '2rem'}}/></Link>
                    <Link><TwitterIcon style = {{color:'white',fontSize: '2rem'}}/></Link>
                    
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
