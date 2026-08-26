'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function ValuationForm() {
  const [status, setStatus] = useState({ loading: false, message: null, error: false });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, message: null, error: false });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      address: formData.get('address') || '',
      city: formData.get('city') || '',
      state: formData.get('state') || '',
      zip: formData.get('zip') || '',
      beds: formData.get('beds') || '',
      baths: formData.get('baths') || '',
      sqft: formData.get('sqft') || '',
      timeframe: formData.get('timeframe') || '',
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
    };

    try {
      const res = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus({
        loading: false,
        message:
          'Thank you — we’ll review your details and follow up with a personalized valuation.',
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
    <form className="form form--valuation" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">
          Property address
          <input
            className="form-input"
            type="text"
            name="address"
            required
            placeholder="Street address"
          />
        </label>
      </div>
      <div className="form-row form-row--inline">
        <label className="form-label">
          City
          <input
            className="form-input"
            type="text"
            name="city"
            required
            placeholder="Appleton"
          />
        </label>
        <label className="form-label">
          State
          <input
            className="form-input"
            type="text"
            name="state"
            required
            placeholder="WI"
          />
        </label>
        <label className="form-label">
          ZIP
          <input
            className="form-input"
            type="text"
            name="zip"
            required
            placeholder="54914"
          />
        </label>
      </div>

      <div className="form-row form-row--inline">
        <label className="form-label">
          Beds
          <input
            className="form-input"
            type="number"
            name="beds"
            min="0"
            placeholder="3"
          />
        </label>
        <label className="form-label">
          Baths
          <input
            className="form-input"
            type="number"
            name="baths"
            min="0"
            placeholder="2"
          />
        </label>
        <label className="form-label">
          Approx. square feet
          <input
            className="form-input"
            type="number"
            name="sqft"
            min="0"
            placeholder="1800"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          When are you thinking of selling?
          <select className="form-input" name="timeframe" defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            <option value="0-3">Within 0–3 months</option>
            <option value="3-6">Within 3–6 months</option>
            <option value="6-12">Within 6–12 months</option>
            <option value="12+">12+ months / just curious</option>
          </select>
        </label>
      </div>

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

      <div className="form-row form-row--inline">
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

      <div className="form-row form-actions">
        <Button disabled={status.loading}>
          {status.loading ? 'Sending…' : 'Get my valuation'}
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