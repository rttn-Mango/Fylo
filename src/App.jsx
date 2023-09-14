import Nav from "./sections/Nav"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Info from "./sections/Info"
import Testimony from "./sections/Testimony"
import Cta from "./sections/Cta"

function App() {

  return (
    <>
      <Nav/>
      <main>
        <Hero />
        <Features />
        <Info />
        <Testimony />
        <Cta />
      </main>
      <Footer/>
    </>
  )
}

export default App
