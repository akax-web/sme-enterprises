/**
 * "SME" mark used consistently across the header, footer and any
 * logo area. Kept as an inline SVG so it scales cleanly at any size.
 */
function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Subramani Enterprises logo"
      style={{ flexShrink: 0 }}
    >
      <rect width="64" height="64" rx="14" fill="#121b31" stroke="#f5b544" strokeWidth="1.5" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontWeight="800"
        fontSize="19"
        fill="#f5b544"
        letterSpacing="1"
      >
        SME
      </text>
    </svg>
  );
}

export default Logo;
