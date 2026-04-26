"use client"

import { useState, ChangeEvent, FormEvent } from "react"

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                alert("Message sent successfully!")
                setForm({ name: "", email: "", message: "" })
            } else {
                alert("Failed to send message")
            }
        } catch {
            alert("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="text-white py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-sm text-gray-400 mb-4 tracking-wide">
                        ✦ Get In Touch
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide mb-6">
                        Let&apos;s start a project together.
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base">
                        Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold tracking-widest text-gray-400 mb-3">
                            FULL NAME
                        </label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            required
                            placeholder="ex: John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold tracking-widest text-gray-400 mb-3">
                            EMAIL ADDRESS
                        </label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            required
                            placeholder="ex: john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold tracking-widest text-gray-400 mb-3">
                            MESSAGE
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={6}
                            required
                            placeholder="Tell me about your project goals..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 transition resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gray-200 transition disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message ↗"}
                    </button>
                </form>
            </div>
        </section>
    )
}