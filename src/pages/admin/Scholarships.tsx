import { useState } from 'react';
import { Check, Settings, Shield } from 'lucide-react';

const AdminScholarships = () => {
    const [activeTab, setActiveTab] = useState('Configuration');

    return (
        <div>
            <div style={{ marginBottom: '1.25rem' }}>
                <h1 style={{ fontSize: '1.4rem', marginBottom: '0.2rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Scholarship Manager</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Configure award rules and approve candidate grants.</p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-border)' }}>
                {['Configuration', 'Candidates', 'Awarded History'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '0.5rem 0',
                            color: activeTab === tab ? '#f59e0b' : 'var(--color-text-muted)',
                            borderBottom: activeTab === tab ? '2px solid #f59e0b' : '2px solid transparent',
                            background: 'transparent',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div className="glass-panel" style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Active Ruleset: Academic Year 2024-25</h3>
                        <button style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'transparent', border: 'none', fontSize: '0.75rem', cursor: 'pointer' }}>
                            <Settings size={12} /> Edit Rules
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <RuleCard
                            rank="Top 0.1% - 5%"
                            waiver="100% Fee Waiver"
                            badge="Elite"
                            color="#f59e0b"
                            criteria={['Score > 850', 'No Disciplinary Records', '90% Attendance']}
                        />
                        <RuleCard
                            rank="Top 6% - 15%"
                            waiver="75% Fee Waiver"
                            badge="Premier"
                            color="#ec4899"
                            criteria={['Score > 750', 'No Disciplinary Records']}
                        />
                        <RuleCard
                            rank="Top 16% - 30%"
                            waiver="50% Fee Waiver"
                            badge="Select"
                            color="#3b82f6"
                            criteria={['Score > 600']}
                        />
                    </div>
                </div>

                {/* Automation Status */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
                        <Shield size={32} color="#10b981" style={{ margin: '0 auto 0.75rem', opacity: 0.8 }} />
                        <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Auto-Approve Enabled</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                            System automatically verifies candidates against the "Elite" criteria upon result publication.
                        </p>
                        <button style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--color-border)', background: 'transparent', fontSize: '0.75rem', color: 'var(--color-text-main)', fontWeight: 500, cursor: 'pointer' }}>
                            Configure Automation
                        </button>
                    </div>

                    <div className="glass-panel" style={{ padding: '1rem' }}>
                        <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>Quick Stats</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Budget Utilized</span>
                            <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>$142,000</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Students Benefited</span>
                            <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>48</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Pending Approvals</span>
                            <span style={{ fontWeight: 600, color: '#f59e0b', fontSize: '0.8rem' }}>12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RuleCard = ({ rank, waiver, badge, color, criteria }: any) => (
    <div style={{
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px',
        padding: '1rem',
        position: 'relative',
        background: 'rgba(255,255,255,0.02)'
    }}>
        <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.15rem 0.5rem',
            background: `${color}15`,
            color: color,
            borderRadius: '10px',
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase'
        }}>
            {badge} Tier
        </div>

        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.1rem' }}>{rank}</h4>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: color, marginBottom: '0.5rem' }}>{waiver}</div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {criteria.map((c: string) => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    <Check size={10} color="#10b981" /> {c}
                </div>
            ))}
        </div>
    </div>
);

export default AdminScholarships;

