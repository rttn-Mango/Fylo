import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect, useCallback } from "react";
import MobileNav from '../components/MobileNav'
import Signin from "./Signin";
import { Route, Routes } from "react-router-dom";

export default function Nav(){
    const [mobile, setMobile] = useState(false);
    let isClicked = false;
    
    const toggleNavChange = () => {
        setMobile(!mobile);
    }

    const handleMobileChanges = useCallback(() => {
        if(mobile){
            document.body.classList.add("disabled");
        }else{
            document.body.classList.remove("disabled")
        }
    }, [mobile])

    useEffect(() => {
        handleMobileChanges()
    }, [handleMobileChanges])

    return(
        <header className="container">
            <nav>
                <a href=""><img src="/src/assets/logo.svg" alt="Fylo logo" draggable="false"/></a>
                {
                    mobile ? 
                    null
                    :
                    <button className="hamburger-icon" type="button" onClick={toggleNavChange}><img src="src/assets/hamburger-closed.svg" alt="hamburger menu"/> </button>
                }
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
                        <li>
                            <Link to="signin" onClick={() => {
                                isClicked = !isClicked;
                                toggleNavChange();
                            }}>Sign in</Link>
                        </li>
                    </ul>                    
                </div>

                <div className={mobile ? "hamburger active" : "hamburger"}>
                    <MobileNav toggleNavChange={toggleNavChange}/> 
                </div>
            </nav>

            {
                isClicked ? null :
                <Routes>
                    <Route path="/signin" element={<Signin toggleNavChange={toggleNavChange}/>}/>
                </Routes>
            }
        </header>
    )
}