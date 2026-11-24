'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accreditedInvestorDefinition } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type Errors = Partial<Record<string, string>>;

const timelines = ['Right away', '1–3 months', 'Within 6 months'];
const amounts = ['$50,000–$100,000', '$100,000–$250,000', 'More than $250,000'];

const fieldBase =
  'w-full border-b border-ink/20 bg-transparent pb-3 pt-6 text-[1rem] outline-none transition-colors duration-300 placeholder:text-ink-muted/60 focus:border-ink';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [accredited, setAccredited] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [consent, setConsent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      firstName: String(data.get('firstName') ?? '').trim(),
      lastName: String(data.get('lastName') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      accredited,
      timeline,
      amount,
      consent,
    };

    const next: Errors = {};
    if (!values.firstName) next.firstName = 'Required';
    if (!values.lastName) next.lastName = 'Required';
    if (!values.email) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) next.email = 'Enter a valid email address';
    if (values.phone && !/^[\d\s()+.-]{7,}$/.test(values.phone)) next.phone = 'Enter a valid phone number';
    if (!accredited) next.accredited = 'Please select one';
    if (!timeline) next.timeline = 'Please select one';
    if (!amount) next.amount = 'Please select one';
    if (!consent) next.consent = 'Please confirm to continue';

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      document.getElementById(`field-${firstKey}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
      setAccredited('');
      setTimeline('');
      setAmount('');
      setConsent(false);
    } catch {
      setStatus('error');
    }
  }

  const err = (key: string) =>
    errors[key] ? <span className="label mt-3 block text-clay">{errors[key]}</span> : null;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-ink/15 pt-10"
          >
            <p className="label text-bronze-deep">Thank you</p>
            <h3 className="display mt-6 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">
              Your enquiry has been <em className="italic">received</em>
            </h3>
            <p className="mt-6 max-w-md text-[1rem] leading-[1.75] text-ink/70">
              A member of the Rush Creek team will respond as soon as possible. If your enquiry concerns
              the current offering, you may also book an introductory meeting directly.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="label link-underline mt-8 inline-block"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <div id="field-firstName">
                <label htmlFor="firstName" className="label text-bronze-deep">
                  First name *
                </label>
                <input id="firstName" name="firstName" autoComplete="given-name" className={fieldBase} />
                {err('firstName')}
              </div>
              <div id="field-lastName">
                <label htmlFor="lastName" className="label text-bronze-deep">
                  Last name *
                </label>
                <input id="lastName" name="lastName" autoComplete="family-name" className={fieldBase} />
                {err('lastName')}
              </div>
              <div id="field-email">
                <label htmlFor="email" className="label text-bronze-deep">
                  Email *
                </label>
                <input id="email" name="email" type="email" autoComplete="email" className={fieldBase} />
                {err('email')}
              </div>
              <div id="field-phone">
                <label htmlFor="phone" className="label text-bronze-deep">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldBase} />
                {err('phone')}
              </div>
            </div>

            <fieldset id="field-accredited" className="border-t border-ink/15 pt-8">
              <legend className="label text-bronze-deep">Are you an accredited investor? *</legend>
              <div className="mt-6 flex gap-3">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAccredited(option)}
                    aria-pressed={accredited === option}
                    className={`label border px-7 py-4 transition-colors duration-300 ${
                      accredited === option
                        ? 'border-bronze bg-bronze text-ink-deep'
                        : 'border-ink/25 hover:border-bronze'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {err('accredited')}
              <p className="mt-6 max-w-2xl text-[0.78rem] leading-[1.7] text-ink-muted">
                {accreditedInvestorDefinition}
              </p>
            </fieldset>

            <fieldset id="field-timeline" className="border-t border-ink/15 pt-8">
              <legend className="label text-bronze-deep">When do you plan to invest? *</legend>
              <div className="mt-6 flex flex-wrap gap-3">
                {timelines.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTimeline(option)}
                    aria-pressed={timeline === option}
                    className={`label border px-7 py-4 transition-colors duration-300 ${
                      timeline === option ? 'border-bronze bg-bronze text-ink-deep' : 'border-ink/25 hover:border-bronze'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {err('timeline')}
            </fieldset>

            <fieldset id="field-amount" className="border-t border-ink/15 pt-8">
              <legend className="label text-bronze-deep">How much are you planning to invest? *</legend>
              <div className="mt-6 flex flex-wrap gap-3">
                {amounts.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAmount(option)}
                    aria-pressed={amount === option}
                    className={`label border px-7 py-4 transition-colors duration-300 ${
                      amount === option ? 'border-bronze bg-bronze text-ink-deep' : 'border-ink/25 hover:border-bronze'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {err('amount')}
            </fieldset>

            <div id="field-message" className="border-t border-ink/15 pt-8">
              <label htmlFor="message" className="label text-bronze-deep">
                Share a question or provide feedback
              </label>
              <textarea id="message" name="message" rows={4} className={`${fieldBase} resize-none`} />
            </div>

            <div id="field-consent">
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0A0A0A]"
                />
                <span className="text-[0.85rem] leading-[1.7] text-ink/70">
                  You consent to receive communications via email or SMS regarding updates to this offer,
                  and may unsubscribe at any time.
                </span>
              </label>
              {err('consent')}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="label border border-bronze bg-bronze px-12 py-5 text-ink-deep transition-colors duration-500 hover:bg-transparent hover:text-bronze-deep disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
              </button>
              {status === 'error' && (
                <span className="label text-clay">
                  Something went wrong. Please try again or book a call.
                </span>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
