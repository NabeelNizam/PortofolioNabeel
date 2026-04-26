import "./globals.css"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
import Marquee from "./sections/Marquee"


export default function Home() {

  return (
    <main className="cursor-default">
        <Hero />
        <Marquee />
        <About />
        <Project />
        <Contact />
    </main>
  )

}