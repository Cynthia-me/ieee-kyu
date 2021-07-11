import React from 'react'
import '../Styles/Footer.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
function Footer() {
    return (
        <div className = "footer">
            <div className = "ft1">
            <Router>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/"}} target = "_blank" ><p>Home</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/sitemap.html"}} target = "_blank"><p>Sitemap</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/about/contact.html"}} target = "_blank"><p>Contact & Support</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/accessibility-statement.html"}} target = "_blank">
           <p>Accessibility</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/about/corporate/governance/p9-26.html"}} target = "_blank"><p>Nondiscrimination Policy</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://secure.ethicspoint.com/domain/media/en/gui/20410/index.html"}} target = "_blank"> <p>IEEE Ethics Reporting</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/security-privacy.html"}} target = "_blank"><p>IEEE Ethics Policy</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/about/help/site-terms-conditions.html"}} target = "_blank"><p>Terms</p></Link>
                <Link style = {{textDecoration: 'none',color: 'white'}} to = {{pathname:"https://www.ieee.org/about/feedback-ieee-site.html"}} target = "_blank">  <p>Feedback</p></Link>
            </Router>
           </div>
           <div className = "ft2">
               <p>© Copyright 2021 IEEE – All rights reserved. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
           </div>
        </div>
    )
}

export default Footer
