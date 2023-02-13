//shadril238
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page(){
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))  