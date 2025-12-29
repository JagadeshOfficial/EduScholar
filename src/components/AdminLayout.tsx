
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Award, Settings, Search, Bell, LogOut, ShieldCheck } from 'lucide-react';

const AdminLayout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', fontFamily: "'Inter', sans-serif" }}>
            {/* Sidebar */}
            <aside className="glass-panel" style={{
                width: '240px',
                position: 'fixed',
                height: 'calc(100vh - 1rem)',
                margin: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                zIndex: 50,
                background: 'rgba(30, 41, 59, 0.98)',
                border: '1px solid rgba(255,255,255,0.08)'
            }}>
                {/* Brand */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', paddingLeft: '0.25rem' }}>
                    <ShieldCheck size={28} color="#f59e0b" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.3))' }} />
                    <div>
                        <h1 style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.3px', marginBottom: 0, lineHeight: 1 }}>EduAdmin</h1>
                        <p style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Institute Control</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <NavItem to="/admin/dashboard" icon={<LayoutDashboard size={16} />} label="Overview" />
                    <NavItem to="/admin/students" icon={<Users size={16} />} label="Students" />
                    <NavItem to="/admin/exams" icon={<FileText size={16} />} label="Exam Controller" />
                    <NavItem to="/admin/scholarships" icon={<Award size={16} />} label="Scholarships" />
                    <div style={{ margin: '0.5rem 0', height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
                    <NavItem to="/admin/settings" icon={<Settings size={16} />} label="Settings" />
                </nav>

                {/* Admin Profile */}
                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem', borderRadius: '6px', background: 'rgba(255,255,255,0.03)' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'black' }}>
                            AD
                        </div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 600 }}>Admin User</p>
                            <p style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Super Admin</p>
                        </div>
                        <button style={{ color: 'var(--color-text-muted)', background: 'transparent', border: 'none', cursor: 'pointer' }}><LogOut size={14} /></button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ marginLeft: '260px', flex: 1, padding: '1.5rem', maxWidth: '1400px' }}>
                {/* Top Header */}
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>Dashboard</h2>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{
                                    padding: '0.4rem 0.8rem 0.4rem 2rem',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.03)',
                                    color: 'white',
                                    fontSize: '0.8rem',
                                    width: '200px'
                                }}
                            />
                        </div>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <Bell size={14} color="var(--color-text-muted)" />
                            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', border: '1px solid #0f172a' }}></span>
                        </button>
                    </div>
                </header>

                <Outlet />
            </main>
        </div>
    );
};

const NavItem = ({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `nav-item ${isActive ? 'active' : ''}`
        }
        style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            transition: 'all 0.2s ease',
            background: isActive ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
            color: isActive ? '#f59e0b' : 'var(--color-text-muted)',
            fontSize: '0.8rem',
            fontWeight: isActive ? 600 : 500,
            borderLeft: isActive ? '2px solid #f59e0b' : '2px solid transparent'
        })}
    >
        {icon}
        <span>{label}</span>
    </NavLink>
);

export default AdminLayout;
