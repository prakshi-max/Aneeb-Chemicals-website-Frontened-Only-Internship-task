"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Reserved for future API/CRM integration.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-display text-xl font-bold text-ink">Message Sent</h3>
        <p className="text-sm text-ink-light">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-8 shadow-card"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-ink">
            Full Name
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-line bg-surface-section px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-semibold text-ink">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company name"
            className="rounded-xl border border-line bg-surface-section px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-ink">
            Email Address
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="you@company.com"
            className="rounded-xl border border-line bg-surface-section px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            required
            type="tel"
            placeholder="+91"
            className="rounded-xl border border-line bg-surface-section px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-ink">
          I&apos;m interested in
        </label>
        <select
          id="subject"
          className="rounded-xl border border-line bg-surface-section px-4 py-3 text-sm outline-none focus:border-primary"
        >
          <option>Waterproofing Solutions</option>
          <option>Internal Plastering Solutions</option>
          <option>Construction Chemical Solutions</option>
          <option>Tile Fixing Solutions</option>
          <option>Laminated Glass Solutions</option>
          <option>Distributorship / Dealership</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Tell us about your project or requirement"
          className="rounded-xl border border-line bg-surface-section px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-700 hover:shadow-card-hover active:scale-[0.98]"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
