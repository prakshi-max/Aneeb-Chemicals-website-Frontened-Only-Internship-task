"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, User, X } from "lucide-react";
import { company } from "@/lib/data/company";

interface EnquiryButtonProps {
  productName: string;
}

export default function EnquiryButton({ productName }: EnquiryButtonProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Reserved for future API/CRM integration.
    setSubmitted(true);
  }

  function close() {
    setOpen(false);
    setSubmitted(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-700 hover:shadow-card-hover active:scale-[0.98] sm:w-auto"
      >
        Send Enquiry for {productName}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white p-7 shadow-card-hover"
            >
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h3 className="font-display text-xl font-bold text-ink">Enquiry Received</h3>
                  <p className="text-sm text-ink-light">
                    Thank you for your interest in {productName}. Our technical sales team will
                    respond shortly. For an immediate response, call{" "}
                    <a href={`tel:${company.phoneRaw}`} className="font-semibold text-primary">
                      {company.phone}
                    </a>
                    .
                  </p>
                  <button
                    onClick={close}
                    className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-ink">
                      Enquire: {productName}
                    </h3>
                    <button onClick={close} aria-label="Close" className="rounded-full p-1.5 hover:bg-surface-section">
                      <X className="h-5 w-5 text-ink-faint" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
                      <input
                        required
                        type="text"
                        placeholder="Full name"
                        className="w-full rounded-xl border border-line bg-surface-section py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
                      <input
                        required
                        type="email"
                        placeholder="Email address"
                        className="w-full rounded-xl border border-line bg-surface-section py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
                      <input
                        required
                        type="tel"
                        placeholder="Phone number"
                        className="w-full rounded-xl border border-line bg-surface-section py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <textarea
                      placeholder="Quantity, application details or any specific requirement"
                      rows={3}
                      className="w-full rounded-xl border border-line bg-surface-section p-4 text-sm outline-none focus:border-primary"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
