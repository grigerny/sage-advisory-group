export function SectionHeading({
  eyebrow,
  title,
  body,
  center = false
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="lead">{body}</p>}
    </div>
  );
}
