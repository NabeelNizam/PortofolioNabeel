"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type RevealSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export default function RevealSection({
  children,
  className = "",
  id,
}: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 70, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  )
}