import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi';
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="sub-container | container">
                <a href=""><img src="/src/assets/logo.svg" alt="Fylo logo" /></a>
                <div className="group">
                    <div className="group__info">
                        <div className="group__location">
                            <span><FaLocationDot/></span>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, asperiores! Accusantium at sint sed eos hic delectus sapiente optio, voluptas, eum tempore atque rerum quisquam fugiat molestiae sequi neque perspiciatis?</p>
                        </div>
                        <div>
                            <div className="group__contact">
                                <span><BiSolidPhoneCall/></span>
                                <p> +1-543-123-4567</p>
                            </div>
                            <div className="group__email">
                                <span><GrMail/></span>
                                <p> example@fylo.com</p>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul role="list">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>

                        <ul role='list'>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Terms</a></li>
                            <li><a href="">Privacy</a></li>
                        </ul>
                    </nav>
                    <div className="group__socials">
                        <p><FaFacebook/></p>
                        <p><FaXTwitter/></p>
                        <p><FiInstagram/></p>
                    </div>
                </div>
            </div>        
        </footer>
    )
}