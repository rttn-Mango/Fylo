export default function Footer() {
    return (
        <footer>
            <a href=""><img src="/src/assets/logo.svg" alt="Fylo logo" /></a>
            <div className="group">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, asperiores! Accusantium at sint sed eos hic delectus sapiente optio, voluptas, eum tempore atque rerum quisquam fugiat molestiae sequi neque perspiciatis?</p>
                <div className="group__contact">
                    <p>+1-543-123-4567</p>
                    <p>example@fylo.com</p>
                </div>
                <nav>
                    <ul role="list">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Press</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy</a></li>
                    </ul>
                </nav>
                <div className="group__socials">
                    <p>Fb</p>
                    <p>Twitter</p>
                    <p>Ig</p>
                </div>
            </div>        
        </footer>
    )
}