//shadril238

function Header(){
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent(){
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer(){
    return (
        <footer>
            <small>Copyright 2023 - shadril238</small>
        </footer>
    )
}

function Page(){
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root")
)  