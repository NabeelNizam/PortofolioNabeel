export default function Hero() {
    return (
        <section id="hero" className="min-h-screen px-20 py-24 pt-45 flex flex-col justify-between text-white">

            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <p className="text-sm tracking-wide uppercase text-gray-300">
                        Hello, I'm Nabeel Nizam
                    </p>
                </div>

                <h1 className="font-climate text-6xl leading-[1.1] max-w-3xl mb-6">
                    Building solutions, <br /> not just visuals.
                </h1>
                <p className="max-w-2xl text-gray-300 text-base leading-relaxed">
                    Passionate dalam menciptakan solusi digital yang tidak hanya fungsional,
                    tetapi juga estetik. Dari backend yang kuat hingga interface yang intuitif,
                    saya fokus menghadirkan pengalaman yang efektif melalui kode.
                </p>
            </div>

            <div>
                <div className="border-t border-white/20 my-10" />

                <div className="flex items-center justify-between">
                    {/* social links */}
                    <div className="flex gap-8 text-sm text-gray-300">
                        <a href="https://www.linkedin.com/in/nabeel-nizam-pol/" className="hover:text-white transition">LINKEDIN ↗</a>
                        <a href="https://github.com/NabeelNizam" className="hover:text-white transition">GITHUB ↗</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abee237@gmail.com" target="_blank" className="hover:text-white transition">EMAIL ↗</a>
                        <a href="https://www.instagram.com/izamnbl/" className="hover:text-white transition">INSTAGRAM ↗</a>
                    </div>

                    <a
                        href="#"
                        className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium 
            hover:bg-gray-200 transition"
                    >
                        Explore More ↓
                    </a>
                </div>
            </div>

        </section>
    )
}