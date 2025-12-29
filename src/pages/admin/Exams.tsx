
import { Plus, Clock, Edit2, MoreHorizontal } from 'lucide-react';

const AdminExams = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.4rem', marginBottom: '0.2rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Exam Controller</h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Create, schedule, and monitor institute assessments.</p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.8rem', fontSize: '0.8rem' }}>
                    <Plus size={14} />
                    <span>Create Exam</span>
                </button>
            </div>

            {/* Active Exams Grid */}
            <h2 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#10b981', fontWeight: 700 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                Live Now
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                <ExamCard
                    title="Annual Tech Assessment 2024"
                    batch="Batch 2024 - All Streams"
                    attendees={142}
                    total={200}
                    status="Live"
                    progress={71}
                    timeRemaining="45m 12s"
                />
                <ExamCard
                    title="Aptitude Round 1"
                    batch="Batch 2025 - CS Only"
                    attendees={45}
                    total={60}
                    status="Live"
                    progress={75}
                    timeRemaining="12m 30s"
                />
            </div>

            {/* Scheduled */}
            <h2 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Upcoming & Scheduled</h2>
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                {[1, 2, 3].map((_, i) => (
                    <div key={i} style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background 0.2s'
                    }} className="hover:bg-slate-800/50">
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{
                                padding: '0.4rem 0.6rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '6px',
                                textAlign: 'center',
                                minWidth: '50px'
                            }}>
                                <div style={{ fontSize: '0.65rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>DEC</div>
                                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{28 + i}</div>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.2rem' }}>Basic Coding Fundamentals</h3>
                                <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={10} /> 10:00 AM - 12:00 PM</span>
                                    <span>Duration: 120 mins</span>
                                    <span>Type: Technical</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{ padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                                <Edit2 size={12} /> Edit
                            </button>
                            <button style={{ padding: '0.3rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-muted)' }}>
                                <MoreHorizontal size={12} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ExamCard = ({ title, batch, attendees, total, progress, timeRemaining }: any) => (
    <div className="glass-panel" style={{ padding: '1rem', borderTop: '2px solid #10b981', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, maxWidth: '70%' }}>{title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 700 }}>
                <span className="animate-pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#10b981' }}></span>
                LIVE
            </div>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginBottom: '1rem' }}>{batch}</p>

        <div style={{ marginBottom: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.75rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Participation</span>
                <span style={{ fontWeight: 600 }}>{attendees}/{total}</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: '#10b981', borderRadius: '2px' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.65rem' }}>
                <span style={{ color: '#10b981' }}>98% Connected</span>
                <span style={{ color: '#ef4444' }}>2 Flags</span>
            </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Time Remaining</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'monospace' }}>{timeRemaining}</div>
            </div>
            <button style={{ padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#3b82f6', color: 'white', fontWeight: 600, border: 'none', fontSize: '0.75rem', boxShadow: '0 2px 10px rgba(59, 130, 246, 0.3)' }}>
                Live Monitor
            </button>
        </div>
    </div>
);

export default AdminExams;
