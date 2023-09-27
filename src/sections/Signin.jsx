import { Link } from "react-router-dom";
import PropTyes from 'prop-types'

export default function Signin({toggleNavChange}){
    return(
        <dialog open className="modal">
                <h2>Get Started.</h2>
                <p>Let's get you started by setting up your Account.</p>
                <form action="" className="modal__form">
                    <div className="modal__form--contents">
                        <div className="modal__form--group">
                            <label htmlFor="name" className="hidden">Name</label>
                            <input type="text" name="name" id="name" required placeholder="Name"/>
                        </div>
                        <div className="modal__form--group">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" required placeholder="sample@email.com"/>
                        </div>
                        <div className="modal__form--group">
                            <label htmlFor="pass" className="hidden">Password</label>
                            <input type="password" name="pass" id="pass" required placeholder="Password"/>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">
                                I agree to the <span>Terms & Conditions</span>.
                            </label>
                        </div>
                        
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p className="exit">Already have an Account? <Link to="/" onClick={toggleNavChange}>Go back</Link></p>
        </dialog>
    )
}

Signin.propTypes = {
    toggleNavChange: PropTyes.func
}
