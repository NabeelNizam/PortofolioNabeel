import Image from "next/image"

export default function ProjectCard() {
    return (
        <div className="p-8 rounded-3xl w-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

            <div className="w-full h-64 relative mb-6 rounded-xl overflow-hidden">
                <Image 
                    src="/img/Project3.png"
                    alt="Project Thumbnail"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>

            <div className="flex items-center justify-between mb-3">
                <p className="text-xl font-semibold tracking-wide">
                    Yayasan Masjid Al-Muhajirin
                </p>
                <span className="text-xs px-3 py-1 rounded-full border border-blue-400 text-blue-400 bg-blue-400/10">
                    On Going
                </span>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Website Profil Yayasan Masjid Al - Muhajirin
            </p>

            <div className="border-t border-white/10"></div>

        </div>
    )
}