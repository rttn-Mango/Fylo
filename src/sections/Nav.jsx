import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import MobileNav from '../components/MobileNav'

export default function Nav(){
    const [mobile, setMobile] = useState(false);

    const toggleNavChange = () => {
        setMobile(!mobile);
    }

    const handleMobileChanges = () => {
        if(mobile){
            document.body.classList.add("disabled");
        }else{
            document.body.classList.remove("disabled")
        }
    }

    useEffect(() => {
        handleMobileChanges()
    }, [handleMobileChanges])

    return(
        <header className="container">
            <nav>
                <a href=""><img src="/src/assets/logo.svg" alt="Fylo logo" draggable="false"/></a>
                <div className="links">                 
                    <ul role="list">
                        <li>
                            <Link to="#features">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="#testimonies">
                                Testimonies
                            </Link>
                        </li>
                        <li><a href="">Sign In</a></li>
                    </ul>                   
                </div>

                <div className={mobile ? "hamburger active" : "hamburger"}>
                    {
                        mobile ? <MobileNav toggleNavChange={toggleNavChange} /> 
                        : 
                        <button type="button" onClick={toggleNavChange}><img className="icon" src="src/assets/hamburger-closed.svg" alt="hamburger menu"/> </button>
                    }
                    

                </div>
            </nav>
        </header>
    )
}