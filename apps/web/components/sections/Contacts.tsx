
"use client";

import { useState } from "react";
import { createLead } from "@/lib/api-client";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      await createLead({ name, email, message });
      setStatus("Message submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Message submit nahi hua. Backend check karo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-8 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold">
          Ready to Build with AI?
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Let&apos;s discuss your business needs and find the right AI
          solution, automation, or custom development approach.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-xl border border-gray-800 bg-[#121a2f] p-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Your Name
            </label>
            <input
              id="name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0b1020] px-4 py-3 text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={150}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0b1020] px-4 py-3 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              How can we help?
            </label>
            <textarea
              id="message"
              required
              maxLength={5000}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0b1020] px-4 py-3 text-white"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#6c63ff] px-6 py-3 font-semibold transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>

          {status && (
            <p role="status" aria-live="polite" className="text-sm text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
