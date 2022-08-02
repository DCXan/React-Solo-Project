import React from "react"
import Navbar from "./Navbar/Navbar"

function BaseLayout (props) {
    
    return (
        <div className="base">
            <Navbar/>
            <div className="main-display">
                {props.children}
            </div>
        </div>
    )
}

export default BaseLayout