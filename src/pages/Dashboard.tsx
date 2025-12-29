
import { FileText, ArrowRight, TrendingUp, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            {/* Header / Welcome */}
            <div style={{ marginBottom: '1.25rem' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>Welcome back, John! 👋</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>You have a new assessment scheduled for tomorrow.</p>
            </div>

            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <StatCard
                    title="Scholarship Probability"
                    value="82%"
                    icon={<TrendingUp size={18} color="#10b981" />}
                    trend="+5% vs last month"
                    color="#10b981"
                />
                <StatCard
                    title="Global Skill Score"
                    value="845"
                    icon={<Target size={18} color="#8b5cf6" />}
                    trend="Top 5% of students"
                    color="#8b5cf6"
                />
                <StatCard
                    title="Accuracy Rate"
                    value="94%"
                    icon={<FileText size={18} color="#3b82f6" />}
                    trend="Consistent performance"
                    color="#3b82f6"
                />
                <div className="glass-panel" style={{ padding: '0.75rem 1rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#c7d2fe', marginBottom: '0.2rem', fontWeight: 600 }}>Current Batch Rank</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>#14</div>
                    <div style={{ fontSize: '0.7rem', color: '#c7d2fe', marginTop: '0.25rem' }}>Out of 1,240 students</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.75rem' }}>
                {/* Main Action Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {/* Assessment Call to Action */}
                    <div className="glass-panel" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                <div>
                                    <span style={{
                                        display: 'inline-block', padding: '0.2rem 0.5rem', borderRadius: '4px',
                                        background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444',
                                        fontSize: '0.65rem', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '0.05em'
                                    }}>
                                        UPCOMING • PRIORITY
                                    </span>
                                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem', lineHeight: 1.2 }}>Advanced Calculus & Analytical Reasoning</h2>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', maxWidth: '80%' }}>
                                        This test is crucial for your "Elite" scholarship eligibility.
                                    </p>
                                </div>
                                <div style={{
                                    padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '6px', textAlign: 'center', minWidth: '70px', border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700 }}>STARTS IN</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'monospace' }}>14:20:05</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} /> 90 Mins</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><FileText size={12} /> 45 Questions</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Target size={12} /> 100 Marks</span>
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <Link to="/app/assessment" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                                    View Syllabus <ArrowRight size={14} />
                                </Link>
                                <button style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                                    Remind Me
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Path */}
                    <div className="glass-panel" style={{ padding: '1rem' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Target size={14} color="#f59e0b" /> Recommended Preparation Path
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <PathItem title="Calculus Fundamentals" progress={80} color="#3b82f6" />
                            <PathItem title="Logical Reasoning Patterns" progress={45} color="#ec4899" />
                            <PathItem title="Physics: Kinematics" progress={30} color="#10b981" />
                        </div>
                    </div>
                </div>

                {/* Sidebar Activity */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="glass-panel" style={{ padding: '1rem', flex: 1 }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Recent Activity</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <ActivityItem
                                title="Physics Mock Test 2"
                                desc="Score: 88/100"
                                time="2h ago"
                                type="score"
                            />
                            <ActivityItem
                                title="Scholarship App Submitted"
                                desc="Under Review"
                                time="1d ago"
                                type="info"
                            />
                            <ActivityItem
                                title="New Learning Module"
                                desc="Matrices & Determinants"
                                time="2d ago"
                                type="module"
                            />
                        </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#fbbf24', fontWeight: 700, marginBottom: '0.4rem' }}>💡 Pro Tip</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                            Focusing on <strong>Weak Areas</strong> in the analytics tab can boost your score by ~15%.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, trend, color }: any) => (
    <div className="glass-panel" style={{ padding: '0.75rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
            <div style={{ padding: '0.3rem', borderRadius: '6px', background: `${color}15` }}>
                {icon}
            </div>
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.1rem', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>{title}</div>
        <div style={{ fontSize: '0.65rem', color: color, fontWeight: 500 }}>{trend}</div>
    </div>
);

const ActivityItem = ({ title, desc, time, type }: any) => (
    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{
            width: '6px', height: '6px', borderRadius: '50%', marginTop: '0.35rem',
            background: type === 'score' ? '#10b981' : type === 'info' ? '#3b82f6' : '#f59e0b'
        }}></div>
        <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{title}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{desc}</div>
        </div>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{time}</div>
    </div>
);

const PathItem = ({ title, progress, color }: any) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
            <span>{title}</span>
            <span style={{ fontWeight: 600 }}>{progress}%</span>
        </div>
        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: color, borderRadius: '2px' }}></div>
        </div>
    </div>
);

export default Dashboard;