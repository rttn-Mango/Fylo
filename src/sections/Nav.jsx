import { HashLink as Link } from "react-router-hash-link"

export default function Nav(){
    return(
        <header className="container">
            <nav>
                <a href=""><img src="/src/assets/logo.svg" alt="Fylo logo" draggable="false"/></a>
                <div>
                    <ul role="list">
                        <Link to="#features">
                            Features
                        </Link>
                        <Link to="#testimonies">
                            Testimonies
                        </Link>
                        <li><a href="">Sign In</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}