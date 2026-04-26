import Image from "next/image"

const techStacks = [
    { type: "label", name: "My Tech Stack" },
    { type: "tech", name: "Next.js", file: "next" },
    { type: "tech", name: "Tailwind CSS", file: "tailwind" },
    { type: "tech", name: "Laravel", file: "laravel" },
    { type: "tech", name: "PHP", file: "php" },
    { type: "tech", name: "Figma", file: "figma" },
    { type: "tech", name: "HTML", file: "html" },
    { type: "tech", name: "CSS", file: "css" },
    { type: "tech", name: "Github", file: "github" },
    { type: "tech", name: "Git", file: "git" },
    { type: "tech", name: "Javascript", file: "js" },
    { type: "tech", name: "Postman", file: "postman" },
]

export default function Marquee() {
    return (
        <section className="w-full overflow-hidden py-4">
            <div className="flex w-max animate-marquee gap-4 items-center">

                {[...techStacks, ...techStacks].map((item, index) => (
                    item.type === "label" ? (
                        <span
                            key={index}
                            className="text-white font-semibold mx-4 whitespace-nowrap"
                        >
                            {item.name}
                        </span>
                    ) : (
                        <div
                            key={index}
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-white/10 text-gray-200 border border-white/10 shadow-[0_4px_0_rgba(255,255,255,0.08)]"
                        >
                            <Image
                                src={`/techstack/${item.file}.png`}
                                alt={item.name}
                                width={16}
                                height={16}
                                className="object-contain"
                            />
                            <span>{item.name}</span>
                        </div>
                    )
                ))}

            </div>
        </section>
    )
}