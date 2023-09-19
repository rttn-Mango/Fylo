export default function Cta(){
    return(
        <section className="cta">
            <div className="inner-layer">
                <p className="sub-heading">Get early access today</p>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form action="">
                    <div className="inputs">
                        <label htmlFor="email" className="hidden">Email Address</label>
                        <input type="email" placeholder="email@example.com" name="email" id="email"/>
                        <button type="submit">Get Started for Free</button>
                    </div>
                </form>
            </div>
        </section>
    )
}