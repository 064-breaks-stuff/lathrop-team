'use client';

import stats from '../../data/stats';
import { useStatCounter } from '../../anim/useStatCounter';

export default function TrustStrip() {
  const experience = useStatCounter(stats.experienceYears);
  const volume = useStatCounter(stats.teamVolume2024);
  const sides = useStatCounter(stats.teamSides2024);
  const reviews = useStatCounter(stats.reviewCount);

  return (
    <section className="trust-strip" aria-label="Lathrop Team statistics">
      <div className="trust-strip-intro">
        <span className="section-eyebrow">A proven record</span>
        <span className="trust-strip-intro-line" />
      </div>

      <div className="trust-strip-stats">
        <div className="trust-stat" ref={experience.ref}>
          <span className="trust-stat-value">{experience.value}+</span>
          <span className="trust-stat-label">Years of experience</span>
        </div>

        <div className="trust-stat" ref={volume.ref}>
          <span className="trust-stat-value">
            ${Number(volume.value).toFixed(2)}M
          </span>
          <span className="trust-stat-label">Volume in 2024</span>
        </div>

        <div className="trust-stat" ref={sides.ref}>
          <span className="trust-stat-value">{sides.value}</span>
          <span className="trust-stat-label">Transaction sides in 2024</span>
        </div>

        <div className="trust-stat" ref={reviews.ref}>
          <span className="trust-stat-value">{reviews.value}+</span>
          <span className="trust-stat-label">Five-star reviews</span>
        </div>
      </div>
    </section>
  );
}