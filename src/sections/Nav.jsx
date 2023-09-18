export default function Nav(){
    return(
        <header className="container">
            <nav>
                <a href=""><img src="/src/assets/logo.svg" alt="Fylo logo" draggable="false"/></a>
                <div>
                    <ul role="list">
                        <li><a href="">Features</a></li>
                        <li><a href="">Testimonies</a></li>
                        <li><a href="">Sign In</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}