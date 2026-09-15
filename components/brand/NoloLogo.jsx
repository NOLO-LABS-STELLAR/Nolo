// Nolo brand marks — "Draw" identity.
//
// The mark is a prize ball: a solid tomato disc with a punched-out centre.
// The hole is painted with --nolo-bg so the mark sits correctly on both the
// light (cream) and dark (warm ink) themes without a separate asset.

const BALL = "#e4572e";

export function NoloMark({ size = 32, holeColor = "var(--nolo-bg)", className = "", title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <circle cx="60" cy="60" r="52" fill={BALL} />
      <ellipse
        cx="41"
        cy="35"
        rx="15"
        ry="9"
        fill="#ffffff"
        opacity="0.28"
        transform="rotate(-32 41 35)"
      />
      <circle cx="60" cy="60" r="25" fill={holeColor} />
    </svg>
  );
}

// Square app-icon lockup: the ball inside an ink tile, for favicons,
// avatars and anywhere the mark needs its own container.
export function NoloIcon({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="120" height="120" rx="28" fill="#2a1d17" />
      <circle cx="60" cy="60" r="34" fill={BALL} />
      <circle cx="60" cy="60" r="16" fill="#fff8ec" />
    </svg>
  );
}

// Horizontal lockup: mark + wordmark. `markSize` drives the whole thing so
// callers only pick one number.
export function NoloLogo({ markSize = 32, className = "", wordmarkClassName = "", title = "Nolo" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <NoloMark size={markSize} title={title} />
      <span
        className={`font-display font-extrabold leading-none tracking-tight text-vault-text ${wordmarkClassName}`}
        style={{ fontSize: Math.round(markSize * 0.95) }}
      >
        Nolo
      </span>
    </span>
  );
}

export default NoloLogo;
