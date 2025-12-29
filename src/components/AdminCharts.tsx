


// A "Best" Area Chart Component using pure SVG for maximum performance and control
export const AreaChart = ({ data, color, height = 120 }: { data: number[], color: string, height?: number }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    // Correct format for <polyline>
    const polyPoints = data.map((val, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((val - min) / range) * 80; // keep it within 80% height to avoid clipping
        return `${x},${y}`;
    }).join(' ');

    return (
        <div style={{ width: '100%', height: `${height}px`, position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                    <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                        <stop offset="100%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <polygon points={`0,100 ${polyPoints} 100,100`} fill={`url(#grad-${color})`} />
                <polyline points={polyPoints} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
        </div>
    );
};

// Skill Radar / Spider Chart simulation with pure CSS/SVG
export const RadarChart = () => (
    <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto' }}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
            {/* Background Grid (Pentagon) */}
            <path d="M50 0 L100 38 L82 100 L18 100 L0 38 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" transform="scale(0.8) translate(12.5, 12.5)" />
            <path d="M50 0 L100 38 L82 100 L18 100 L0 38 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" transform="scale(0.5) translate(50, 50)" />

            {/* Data Shape */}
            <path d="M50 10 L90 40 L70 90 L30 80 L10 30 Z" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        {/* Labels positioned absolutely */}
        <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Logic</span>
        <span style={{ position: 'absolute', top: '35%', right: '-30px', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Coding</span>
        <span style={{ position: 'absolute', bottom: '10px', right: '-10px', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Opt</span>
        <span style={{ position: 'absolute', bottom: '10px', left: '-10px', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Math</span>
        <span style={{ position: 'absolute', top: '35%', left: '-30px', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Verbal</span>
    </div>
);
