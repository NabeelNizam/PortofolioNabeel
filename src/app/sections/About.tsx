import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="text-white py-32 px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                <div>
                    <p className="text-sm text-gray-400 mb-4 tracking-wide">
                        ✦ About Me
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide mb-6">
                        Little Things About Me
                    </h1>


                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                        Saya adalah mahasiswa Teknik Informatika Semester 6 yang antusias terhadap dunia
                        pengembangan perangkat lunak, kecerdasan buatan, dan teknologi web modern.
                        Saya percaya bahwa teknologi adalah alat untuk menciptakan dampak nyata.
                        Setiap baris kode yang saya tulis adalah langkah kecil menuju solusi
                        yang lebih baik dan lebih manusiawi.
                    </p>


                    <a
                        href="#"
                        className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                    >
                        My Resume ↗
                    </a>
                </div>


                <div className="flex justify-center md:justify-end">
                    <div className="w-[300px] h-[380px] relative rounded-2xl overflow-hidden">
                        <Image
                            src="/img/FotoDiri.png"
                            alt="Foto Profil"
                            fill
                            className="object-cover"
                            sizes="300px"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}