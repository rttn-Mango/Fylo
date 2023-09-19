import { HashLink as Link } from "react-router-hash-link";

export default function MobileNav(props){

    return(
        <>
            <button type="button" onClick={props.toggleNavChange} > <img src="src/assets/hamburger-opened.svg" alt="close nav" data-hidden="true"/> </button>
            <ul role="list">
                <li>
                    <Link to="#features" onClick={props.toggleNavChange}>
                        Features
                    </Link>
                </li>
                <li>
                    <Link to="#testimonies" onClick={props.toggleNavChange}>
                        Testimonies
                    </Link>
                </li>
                <li><a href="">Sign In</a></li>
            </ul>
        </>
    )
}