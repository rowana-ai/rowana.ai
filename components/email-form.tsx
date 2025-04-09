"use client"

import type React from "react"

import { useState } from "react"

export default function EmailForm({ buttonText = "get early access" }: { buttonText?: string }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Thanks! We'll be in touch soon.")
      setEmail("")
    }, 1000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
          required
          className="flex-grow px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 transform hover:scale-105"
        >
          {isSubmitting ? "submitting..." : buttonText}
        </button>
      </form>
      {message && <p className="mt-3 text-teal-400 animate-fade-in">{message}</p>}
    </div>
  )
}
