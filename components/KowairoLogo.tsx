export function KowairoLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wave/squiggle emblem */}
        <path
          d="M6 28 C8 20, 14 16, 20 20 C26 24, 32 18, 38 14 C40 12, 42 10, 44 8"
          stroke="#4A90D9"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4 32 C8 24, 16 20, 24 24 C32 28, 36 22, 42 16"
          stroke="#4A90D9"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Small dot accent */}
        <circle cx="24" cy="10" r="2.5" fill="#4A90D9" opacity="0.6" />
      </svg>
      <span
        className="text-2xl font-black tracking-tight text-navy"
        style={{ fontFamily: "var(--font-noto), sans-serif", letterSpacing: "-0.02em" }}
      >
        kowairo
      </span>
    </div>
  );
}

export function KowairoLogoLight({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 28 C8 20, 14 16, 20 20 C26 24, 32 18, 38 14 C40 12, 42 10, 44 8"
          stroke="#6BAEE8"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4 32 C8 24, 16 20, 24 24 C32 28, 36 22, 42 16"
          stroke="#6BAEE8"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <circle cx="24" cy="10" r="2.5" fill="#6BAEE8" opacity="0.6" />
      </svg>
      <span
        className="text-2xl font-black tracking-tight text-white"
        style={{ fontFamily: "var(--font-noto), sans-serif", letterSpacing: "-0.02em" }}
      >
        kowairo
      </span>
    </div>
  );
}
