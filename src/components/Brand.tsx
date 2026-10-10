export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand-compact" : ""}`}>
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3.5v7.2M16 21.3v7.2M3.5 16h7.2M21.3 16h7.2M7.16 7.16l5.08 5.08M19.76 19.76l5.08 5.08M24.84 7.16l-5.08 5.08M12.24 19.76l-5.08 5.08"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="2.1" fill="currentColor" />
        </svg>
      </span>
      <span className="brand-word">
        gami<span>FICATION</span>
        <i>.</i>
      </span>
    </span>
  );
}
