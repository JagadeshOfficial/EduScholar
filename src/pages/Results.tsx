import { Calendar, ChevronRight, Download } from 'lucide-react';

export default function Results() {
    return (
        <div>
            <div style={{ marginBottom: '1.25rem' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>Performance History</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Deep dive into your assessment analytics and scores.</p>
            </div>

            {/* Overview Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Average Score</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>86.5%</div>
                    <div style={{ fontSize: '0.65rem', color: '#10b981' }}>+2.4% this month</div>
                </div>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Tests Taken</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>24</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Total Attempts</div>
                </div>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Global Rank</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b' }}>#142</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Top 5%</div>
                </div>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Scholarship Status</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6' }}>Elite</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Eligible</div>
                </div>
            </div>

            {/* Recent Results List */}
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Recent Assessments</h3>
                    <button style={{ fontSize: '0.75rem', color: 'var(--color-primary)', background: 'transparent', border: 'none', cursor: 'pointer' }}>Download Report</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <div key={index} className="hover:bg-slate-800/50" style={{
                            padding: '0.75rem 1rem',
                            borderBottom: '1px solid rgba(255,255,255,0.03)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'background 0.2s'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '8px',
                                    background: index === 0 ? '#10b981' : 'rgba(255,255,255,0.05)',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    color: index === 0 ? 'black' : 'var(--color-text-muted)'
                                }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1 }}>{90 - (index * 4)}</span>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.1rem', color: 'white' }}>
                                        {['Advanced Calculus Final', 'Physics: Mechanics V2', 'Verbal Reasoning Prep', 'Chemistry: Organic I', 'General Aptitude'][index]}
                                    </h4>
                                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={10} /> Nov {20 - index}, 2024</span>
                                        <span>Score: {90 - (index * 4)}/100</span>
                                        <span>Percentile: {(98 - (index * 2))}%</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{
                                    fontSize: '0.7rem', fontWeight: 600,
                                    color: (90 - (index * 4)) > 80 ? '#10b981' : '#f59e0b',
                                    padding: '0.2rem 0.5rem', borderRadius: '4px',
                                    background: (90 - (index * 4)) > 80 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)'
                                }}>
                                    {(90 - (index * 4)) > 80 ? 'Passed' : 'Needs Improv.'}
                                </span>
                                <button style={{ padding: '0.3rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--color-text-muted)' }}>
                                    <Download size={14} />
                                </button>
                                <button style={{ padding: '0.3rem', borderRadius: '4px', border: '1px solid transparent', background: 'transparent', color: 'var(--color-text-muted)' }}>
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
