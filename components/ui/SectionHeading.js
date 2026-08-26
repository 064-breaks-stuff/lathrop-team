export default function SectionHeading({ eyebrow, title, body }) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {body && <p className="section-body">{body}</p>}
    </header>
  );
}