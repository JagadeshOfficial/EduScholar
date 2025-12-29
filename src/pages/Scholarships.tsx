import { Award, Check } from 'lucide-react';

export default function Scholarships() {
    return (
        <div>
            <div style={{ marginBottom: '1.25rem' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>Scholarship Opportunities</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Track your eligibility for fee waivers and financial grants.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>

                {/* Available Schemes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <ScholarshipCard
                        title="Elite Merit Scholarship"
                        type="Merit-Based"
                        amount="100% Tuition Waiver"
                        deadline="Dec 31, 2024"
                        eligibility={['Top 1% Rank', '> 95% Attendance', 'No Disciplinary Records']}
                        color="#f59e0b"
                        status="Applied"
                    />
                    <ScholarshipCard
                        title="Premier Academic Grant"
                        type="Grant"
                        amount="50% Tuition Waiver"
                        deadline="Jan 15, 2025"
                        eligibility={['Top 10% Rank', '> 90% Attendance']}
                        color="#ec4899"
                        status="Eligible"
                    />
                    <ScholarshipCard
                        title="Sports Excellence Award"
                        type="Extracurricular"
                        amount="$2,000 / Year"
                        deadline="Feb 01, 2025"
                        eligibility={['National/State Player']}
                        color="#3b82f6"
                        status="Not Eligible"
                        locked
                    />
                </div>

                {/* Status Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="glass-panel" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(0,0,0,0))', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Award size={20} color="black" />
                            </div>
                            <span style={{ fontSize: '0.7rem', fontWeight: 700, background: 'black', padding: '0.2rem 0.6rem', borderRadius: '12px', color: '#f59e0b' }}>PREMIUM</span>
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>You are "Elite" Eligible!</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                            Congratulations! Your current rank #142 qualifies you for the 100% Tuition Waiver scheme.
                        </p>
                        <button className="btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>Claim Scholarship</button>
                    </div>

                    <div className="glass-panel" style={{ padding: '1.25rem' }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>Application Track</h3>
                        <Step label="Application Submitted" date="Nov 24" completed />
                        <Step label="Document Verification" date="Nov 26" completed />
                        <Step label="Committee Review" date="In Progress" active />
                        <Step label="Final Approval" date="Pending" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const ScholarshipCard = ({ title, type, amount, deadline, eligibility, color, status, locked }: any) => {
    return (
        <div className="glass-panel" style={{ padding: '1.25rem', position: 'relative', opacity: locked ? 0.6 : 1, filter: locked ? 'grayscale(0.8)' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <div>
                    <span style={{ fontSize: '0.65rem', color: color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{type}</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginTop: '0.2rem' }}>{title}</h3>
                </div>
                <span style={{
                    fontSize: '0.7rem', fontWeight: 600,
                    padding: '0.2rem 0.6rem', borderRadius: '6px',
                    background: status === 'Applied' ? 'rgba(59, 130, 246, 0.2)' : status === 'Eligible' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.05)',
                    color: status === 'Applied' ? '#3b82f6' : status === 'Eligible' ? '#10b981' : 'var(--color-text-muted)'
                }}>
                    {status}
                </span>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: color, marginBottom: '0.3rem' }}>{amount}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Deadline: {deadline}</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>Criteria</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {eligibility.map((c: string) => (
                        <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                            <Check size={12} color={color} /> {c}
                        </div>
                    ))}
                </div>
            </div>

            {!locked && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button style={{
                        fontSize: '0.8rem', padding: '0.5rem 1rem', borderRadius: '6px',
                        background: status === 'Eligible' ? color : 'transparent',
                        border: status === 'Eligible' ? 'none' : '1px solid var(--color-border)',
                        color: status === 'Eligible' ? 'black' : 'var(--color-text-muted)',
                        fontWeight: 600
                    }}>
                        {status === 'Applied' ? 'View Application' : 'Apply Now'}
                    </button>
                    <button style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', background: 'transparent', border: 'none' }}>Details</button>
                </div>
            )}
        </div>
    )
}

const Step = ({ label, date, completed, active }: any) => (
    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', position: 'relative' }}>
        <div style={{
            width: '16px', height: '16px', borderRadius: '50%',
            background: completed ? '#10b981' : active ? '#f59e0b' : 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2,
            marginTop: '2px'
        }}>
            {completed && <Check size={10} color="black" />}
        </div>
        {/* Line */}
        <div style={{
            position: 'absolute', top: '18px', left: '7.5px', width: '1px', height: '100%',
            background: completed ? '#10b981' : 'rgba(255,255,255,0.1)',
            display: 'none' // Hidden for last item, CSS would do better but inline styles limitation
        }}></div>

        <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: completed || active ? 'white' : 'var(--color-text-muted)' }}>{label}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{date}</div>
        </div>
    </div>
)
