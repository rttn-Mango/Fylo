export default function Hero(){
    return(
        <section className="hero">
            <div className="sub-container | container">
                <img className="hero__illustration" src="src/assets/illustration-intro.png" alt="Folder image" />
                <div className="hero__group">
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                    <button>Get Started</button>
                </div>
            </div>
            <picture>
                <source media="(max-width: 600px)" srcSet="src/assets/bg-curvy-mobile.svg"/>
                <img className="wave" src="src/assets/bg-curvy-desktop.svg" alt="" />
            </picture>
        </section>
    )
}