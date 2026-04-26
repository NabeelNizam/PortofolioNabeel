"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
]

const basePath =
  process.env.NODE_ENV === "production" ? "/PortofolioNabeel" : ""

export default function Navbar() {
  const [active, setActive] = useState("hero")
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const updateIndicator = (id: string) => {
    const el = linkRefs.current[id]
    if (!el) return

    setIndicatorStyle({
      width: el.offsetWidth,
      height: el.offsetHeight,
      top: el.offsetTop,
      left: el.offsetLeft,
    })
  }

  useEffect(() => {
    updateIndicator(active)
  }, [active])

  useEffect(() => {
    const timeout = setTimeout(() => updateIndicator("hero"), 60)

    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  const handleClick = (id: string) => {
    setActive(id)
    updateIndicator(id)
  }

  return (
    <>
      <header className="w-full px-16 py-5 flex items-center justify-between relative">
        <a href="#hero">
          <Image
            src="/Logo_Nabeel.svg"
            alt="Logo"
            width={60}
            height={60}
            priority
            className="rounded-full z-60"
          />
        </a>

        <a
          href="#contact"
          className="
            relative bg-white text-black text-sm font-semibold tracking-wide
            px-6 py-2.5 z-50 rounded-full overflow-hidden
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
            active:scale-95
          "
        >
          Let's Talk
        </a>
      </header>

      <nav className="sticky top-4 z-40 flex justify-center -mt-20">
        <div
          ref={navRef}
          className="
            relative flex items-center gap-0.5
            bg-white/[0.06] backdrop-blur-2xl
            border border-white/10
            rounded-full px-1.5 py-1.5
            shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
          "
        >
  
          <span
            className="
              absolute bg-white rounded-full
              shadow-[0_2px_12px_rgba(0,0,0,0.3)]
              transition-all duration-[380ms] ease-[cubic-bezier(0.34,1.2,0.64,1)]
              pointer-events-none
            "
            style={indicatorStyle}
          />

          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => {
                linkRefs.current[id] = el
              }}
              onClick={() => handleClick(id)}
              className={`
                relative z-10 px-5 py-2 rounded-full text-sm font-medium tracking-wide
                transition-colors duration-200
                ${
                  active === id
                    ? "text-black"
                    : "text-white/40 hover:text-white/80"
                }
              `}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}