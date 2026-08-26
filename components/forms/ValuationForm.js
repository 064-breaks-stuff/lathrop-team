'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function ValuationForm() {
  const [status, setStatus] = useState({
    loading: false,
    message: null,
    error: false,
  });

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
      const response = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

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
      <fieldset className="form-fieldset">
        <legend className="form-legend">Your property</legend>

        <div className="form-row">
          <label className="form-label">
            Property address
            <input
              className="form-input"
              type="text"
              name="address"
              required
              autoComplete="street-address"
              placeholder="Street address"
            />
          </label>
        </div>

        <div className="form-row form-row--location">
          <label className="form-label">
            City
            <input
              className="form-input"
              type="text"
              name="city"
              required
              autoComplete="address-level2"
              placeholder="Appleton"
            />
          </label>

          <label className="form-label form-label--state">
            State
            <input
              className="form-input"
              type="text"
              name="state"
              required
              autoComplete="address-level1"
              maxLength="2"
              placeholder="WI"
            />
          </label>

          <label className="form-label form-label--zip">
            ZIP
            <input
              className="form-input"
              type="text"
              name="zip"
              required
              autoComplete="postal-code"
              inputMode="numeric"
              placeholder="54914"
            />
          </label>
        </div>

        <div className="form-row form-row--property-details">
          <label className="form-label">
            Beds
            <input
              className="form-input"
              type="number"
              name="beds"
              min="0"
              inputMode="numeric"
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
              step="0.5"
              inputMode="decimal"
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
              inputMode="numeric"
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
      </fieldset>

      <fieldset className="form-fieldset">
        <legend className="form-legend">Your contact details</legend>

        <div className="form-row">
          <label className="form-label">
            Name
            <input
              className="form-input"
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
        </div>

        <div className="form-row form-row--contact-details">
          <label className="form-label">
            Email
            <input
              className="form-input"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>

          <label className="form-label">
            Phone
            <input
              className="form-input"
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(920) 555-1234"
            />
          </label>
        </div>
      </fieldset>

      <div className="form-row form-actions form-actions--valuation">
        <Button disabled={status.loading}>
          {status.loading ? 'Sending…' : 'Get my valuation'}
        </Button>

        <p className="form-note">
          Your details are used only to prepare and follow up on your valuation.
        </p>
      </div>

      <div className="form-status-wrap" aria-live="polite">
        {status.message && (
          <p
            className={
              status.error ? 'form-status form-status--error' : 'form-status'
            }
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}