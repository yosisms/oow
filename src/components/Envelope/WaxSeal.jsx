const WaxSeal = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
      {/* Outer circle - wax seal */}
      <circle cx="50" cy="50" r="45" fill="url(#goldGradient)" />

      {/* Inner circle for depth */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#a08040" strokeWidth="1" opacity="0.3" />

      {/* Initials O & O in Hebrew */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="#8b7355"
        fontFamily="serif"
      >
        ע&ע
      </text>

      {/* Gradient definition */}
      <defs>
        <radialGradient id="goldGradient">
          <stop offset="0%" stopColor="#d4af6a" />
          <stop offset="50%" stopColor="#c5a059" />
          <stop offset="100%" stopColor="#a08040" />
        </radialGradient>
      </defs>

      {/* Texture overlay for realism */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};

export default WaxSeal;
