import Project1 from "./components/card/Project1"
import Project2 from "./components/card/Project2"
import Project3 from "./components/card/Project3"
import RevealSection from "@/components/RevealSection"

export default function Project() {
    return (
        <RevealSection id="project" className="text-white px-20 py-24">
            <div className="text-center mb-20">
                <p className="text-sm text-gray-300 mb-6 tracking-wide">
                    ✦ Selected Works
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide">
                    Featured Projects
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl mx-auto mb-16">
                <Project1 />
                <Project2 />
                <Project3 />
            </div>

            {/* <div className="flex justify-center">
                <a
                    href="/projects"
                    className="inline-block bg-white text-black px-7 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    View All Projects ↗
                </a>
            </div> */}

        </RevealSection>
    )
}