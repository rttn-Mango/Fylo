import { HashLink as Link } from "react-router-hash-link";
import PropTyes from 'prop-types'

export default function MobileNav({toggleNavChange}){

    return(
        <>
            <button type="button" onClick={toggleNavChange}> <img src="src/assets/hamburger-opened.svg" alt="close nav"/> </button>
            <ul role="list">
                <li>
                    <Link to="#features" onClick={toggleNavChange}>
                        Features
                    </Link>
                </li>
                <li>
                    <Link to="#testimonies" onClick={toggleNavChange}>
                        Testimonies
                    </Link>
                </li>
                <li><a href="">Sign In</a></li>
            </ul>
        </>
    )
}

MobileNav.propTypes ={
    toggleNavChange: PropTyes.func
}