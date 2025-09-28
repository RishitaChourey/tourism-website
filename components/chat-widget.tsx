"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

const LANGUAGES = [
  "English",
  "Hindi",
  "Bengali",
  "Odia",
  "Marathi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Gujarati",
  "Punjabi",
  "Urdu",
  "French",
  "German",
  "Spanish",
  "Chinese",
  "Japanese",
]

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState("English")
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Namaste! I am your Jharkhand Tourism assistant. How can I help you today?",
    },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          messages: nextMessages.slice(-12), // keep context small
        }),
      })
      if (!res.ok) {
        throw new Error("Failed to get response")
      }
      const data = await res.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.text }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I’m having trouble responding right now. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          className="bg-accent text-accent-foreground shadow-lg"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="jh-chat-panel"
        >
          {open ? "Close Chat" : "Chat Support"}
        </Button>
      </div>

      {/* Panel */}
      <div
        id="jh-chat-panel"
        className={cn(
          "fixed bottom-20 right-4 z-40 w-full max-w-sm transition-all",
          open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2",
        )}
        role="dialog"
        aria-label="Jharkhand Tourism Support Chat"
      >
        <Card className="bg-card text-card-foreground shadow-xl border">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <h2 className="font-semibold text-pretty">Tourism Support</h2>
              <p className="text-xs text-muted-foreground">
                Multilingual assistant for bookings, payments, marketplace, and app
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="lang" className="text-xs text-muted-foreground">
                Language
              </label>
              <select
                id="lang"
                className="bg-background text-foreground border rounded px-2 py-1 text-xs"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Select language"
              >
                {LANGUAGES.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Messages */}
          <div className="px-3 py-3 max-h-80 overflow-y-auto space-y-2">
            {messages.map((m, idx) => {
              const isUser = m.role === "user"
              return (
                <div key={idx} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm leading-relaxed max-w-[80%]",
                      isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    )}
                    aria-live="polite"
                  >
                    {m.content}
                  </div>
                </div>
              )
            })}
            {loading && <div className="text-xs text-muted-foreground px-1">Typing…</div>}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <form onSubmit={onSend} className="px-3 pb-3">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 rounded border bg-background text-foreground px-3 py-2 text-sm"
                placeholder="Type your message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Message"
                disabled={loading}
              />
              <Button type="submit" className="bg-primary text-primary-foreground" disabled={loading || !input.trim()}>
                Send
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  )
}

export default ChatWidget
