import { Users, FileText, CheckCircle, AlertTriangle, Activity, Database, Server, TrendingUp, BarChart2 } from 'lucide-react';
import { AreaChart, RadarChart } from '../components/AdminCharts';

const AdminDashboard = () => {
    // Mock Data for Charts
    const trafficData = [20, 45, 30, 80, 65, 90, 70, 100, 85, 120, 95];

    return (
        <div>
            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <AdminStatCard title="Total Students" value="2,450" icon={<Users size={16} />} color="#3b82f6" trend="+12% this week" />
                <AdminStatCard title="Active Exams" value="8" icon={<FileText size={16} />} color="#f59e0b" trend="3 ending soon" />
                <AdminStatCard title="Completed Tests" value="142" icon={<CheckCircle size={16} />} color="#10b981" trend="Last 24 hours" />
                <AdminStatCard title="Scholarships" value="12" icon={<AlertTriangle size={16} />} color="#ec4899" trend="Pending review" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.75rem' }}>

                {/* Main Content Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                    {/* Advanced Analytics Panel (New) */}
                    <div className="glass-panel" style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <TrendingUp size={16} color="#8b5cf6" /> Live System Traffic
                            </h3>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', cursor: 'pointer' }}>1H</span>
                                <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', background: '#8b5cf6', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>24H</span>
                                <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', cursor: 'pointer' }}>7D</span>
                            </div>
                        </div>
                        <AreaChart data={trafficData} color="#8b5cf6" height={150} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                            <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span>
                        </div>
                    </div>

                    {/* Recent Submissions */}
                    <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Recent Exam Submissions</h3>
                            <button style={{ fontSize: '0.75rem', color: 'var(--color-primary)', background: 'transparent', border: 'none', cursor: 'pointer' }}>View All</button>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,255,255,0.02)', textAlign: 'left' }}>
                                    <th style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Student</th>
                                    <th style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Exam</th>
                                    <th style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Score</th>
                                    <th style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                                        <td style={{ padding: '0.6rem 1rem' }}>S. Student {i}</td>
                                        <td style={{ padding: '0.6rem 1rem', color: 'var(--color-text-muted)' }}>Physics Final</td>
                                        <td style={{ padding: '0.6rem 1rem', fontWeight: 600 }}>8{i}%</td>
                                        <td style={{ padding: '0.6rem 1rem' }}>
                                            <span style={{
                                                padding: '0.15rem 0.5rem', borderRadius: '10px', fontSize: '0.7rem',
                                                background: i === 2 ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                                                color: i === 2 ? '#ef4444' : '#10b981'
                                            }}>
                                                {i === 2 ? 'Flagged' : 'Evaluated'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                    {/* Performance Radar */}
                    <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <BarChart2 size={14} /> Batch Proficiency
                        </h3>
                        <div style={{ marginBottom: '1rem' }}>
                            <RadarChart />
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                            Strong in Coding (+15%)
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Vs National Average</div>
                    </div>

                    {/* System Health */}
                    <div className="glass-panel" style={{ padding: '1rem' }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Activity size={14} color="#f59e0b" /> System Health
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <HealthItem label="Server Load" value="24%" icon={<Server size={14} />} status="good" />
                            <HealthItem label="DB Connection" value="Stable" icon={<Database size={14} />} status="good" />
                        </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '1rem', flex: 1 }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>Quick Actions</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            <button className="btn-secondary" style={{ fontSize: '0.75rem', padding: '0.5rem' }}>Create Exam</button>
                            <button className="btn-secondary" style={{ fontSize: '0.75rem', padding: '0.5rem' }}>Publish Results</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AdminStatCard = ({ title, value, icon, color, trend }: any) => (
    <div className="glass-panel" style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
            <div style={{ padding: '0.3rem', borderRadius: '6px', background: `${color}15`, color: color }}>
                {icon}
            </div>
            <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{trend}</span>
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.1rem' }}>{value}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{title}</div>
    </div>
);

const HealthItem = ({ label, value, icon, status }: any) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
            {icon} {label}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: status === 'good' ? '#10b981' : '#ef4444' }}></span>
            {value}
        </div>
    </div>
);

export default AdminDashboard;
