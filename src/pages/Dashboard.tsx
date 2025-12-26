
import { FileText, ArrowRight, TrendingUp, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    Welcome back, <span className="text-gradient">Student</span>
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                    You are on track for the National Merit Scholarship. Keep it up!
                </p>
            </header>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <StatCard
                    icon={<TrendingUp size={24} color="#6366f1" />}
                    label="Scholarship Probability"
                    value="87%"
                    trend="+2.4% from last week"
                />
                <StatCard
                    icon={<Clock size={24} color="#ec4899" />}
                    label="Next Assessment"
                    value="Physics II"
                    sub="Tomorrow, 10:00 AM"
                />
                <StatCard
                    icon={<Target size={24} color="#10b981" />}
                    label="Global Rank"
                    value="#142"
                    trend="Top 5% of students"
                />
            </div>

            {/* Main Action Area */}
            <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Ready for your next challenge?</h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        Take the <strong>Advanced Mathematics Assessment</strong> to unlock Tier-1 scholarship opportunities.
                        This test covers Calculus, Algebra, and Logical Reasoning.
                    </p>
                    <Link to="/app/assessment" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Start Assessment Now <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Decorative Background for Card */}
                <div style={{
                    position: 'absolute',
                    right: '-50px',
                    top: '-50px',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}></div>
            </div>

            {/* Recent Activity */}
            <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Activity</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <ActivityItem
                        title="Completed Chemistry Assessment"
                        date="2 days ago"
                        score="92/100"
                        status="Excellent"
                    />
                    <ActivityItem
                        title="Scholarship Application Draft"
                        date="4 days ago"
                        score="In Progress"
                        status="Pending"
                    />
                    <ActivityItem
                        title="General Knowledge Quiz"
                        date="1 week ago"
                        score="78/100"
                        status="Good"
                    />
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value, trend, sub }: any) => (
    <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                {icon}
            </div>
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>{label}</span>
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{value}</div>
        {trend && <div style={{ fontSize: '0.9rem', color: '#10b981' }}>{trend}</div>}
        {sub && <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{sub}</div>}
    </div>
);

const ActivityItem = ({ title, date, score, status }: any) => (
    <div className="glass-panel" style={{
        padding: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'transform 0.2s',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(99, 102, 241, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
            }}>
                <FileText size={20} />
            </div>
            <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{date}</p>
            </div>
        </div>
        <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{score}</div>
            <div style={{ fontSize: '0.85rem', color: status === 'Excellent' ? '#10b981' : status === 'Pending' ? '#f59e0b' : '#94a3b8' }}>
                {status}
            </div>
        </div>
    </div>
);

export default Dashboard;
