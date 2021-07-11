import React from 'react'
import '../Styles/HeaderImage.css'

function HeaderImage() {
    return (
        <div className = "head">
            <h1>IEEE KYAMBOGO UNIVERSITY STUDENT BRANCH</h1>
            {/* <img src = "https://images.unsplash.com/photo-1508416163602-e4eb39645e86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHx0ZWNobm9sb2d5JTIwd2l0aCUyMGxpZ2h0c3xlbnwwfDB8MHxibHVlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt = "technology"></img> */}
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
