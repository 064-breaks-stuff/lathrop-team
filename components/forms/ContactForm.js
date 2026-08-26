'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [status, setStatus] = useState({ loading: false, message: null, error: false });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, message: null, error: false });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      intent: formData.get('intent') || '',
      message: formData.get('message') || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus({
        loading: false,
        message: 'Thank you — we’ll be in touch shortly.',
        error: false,
      });
      form.reset();
    } catch (error) {
      setStatus({
        loading: false,
        message: 'Something went wrong. Please try again.',
        error: true,
      });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">
          Name
          <input
            className="form-input"
            type="text"
            name="name"
            required
            placeholder="Your name"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          Email
          <input
            className="form-input"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          Phone
          <input
            className="form-input"
            type="tel"
            name="phone"
            placeholder="(920) 555-1234"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          I’m looking to:
          <select className="form-input" name="intent" required defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            <option value="buy">Buy a home</option>
            <option value="sell">Sell a home</option>
            <option value="both">Buy and sell</option>
            <option value="just-curious">Just exploring options</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          Message
          <textarea
            className="form-input"
            name="message"
            rows={4}
            placeholder="Tell us a bit about your situation."
          />
        </label>
      </div>
      <div className="form-row form-actions">
        <Button disabled={status.loading}>
          {status.loading ? 'Sending…' : 'Submit'}
        </Button>
        {status.message && (
          <p className={status.error ? 'form-status form-status--error' : 'form-status'}>
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}