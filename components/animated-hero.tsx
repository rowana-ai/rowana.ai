"use client"

import { useEffect, useState } from "react"
import { MatrixText } from "@/components/ui/matrix-text"

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black to-teal-900/20 animate-gradient"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease-in-out" }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            animation: "fadeIn 2s ease-out forwards",
          }}
        />
      </div>

      {/* Animated circles */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"
        style={{
          opacity: isVisible ? 0.3 : 0,
          transition: "opacity 1.5s ease-in-out, transform 10s ease-in-out infinite",
          animation: "pulse 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
        style={{
          opacity: isVisible ? 0.3 : 0,
          transition: "opacity 1.5s ease-in-out, transform 15s ease-in-out infinite",
          animation: "pulse 15s ease-in-out infinite alternate",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <div className="mb-6">
            <MatrixText
              text="control how ai sees your brand"
              color="#6D28D9" // Violet-600 color to match buttons
              initialDelay={500}
              letterAnimationDuration={1000}
              letterInterval={120}
              delayBetweenPasses={3000} // 3 second delay between passes
              className="h-auto"
            />
          </div>
          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            Tired of AI getting your startup wrong? Rowana automatically structures your content so LLMs like ChatGPT &
            Perplexity can <strong>find, understand, and accurately represent</strong> your innovation.
          </p>
        </div>
      </div>
    </div>
  )
}
