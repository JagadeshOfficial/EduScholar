import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, BarChart3, Award, Settings, LogOut, Bell } from 'lucide-react';

const Layout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', fontFamily: "'Inter', sans-serif" }}>
            {/* Sidebar */}
            <aside className="glass-panel" style={{
                width: '220px',
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
                {/* Logo */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '0.25rem' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 12px rgba(99, 102, 241, 0.3)'
                    }}>
                        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>E</span>
                    </div>
                    <div>
                        <h1 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 0, lineHeight: 1 }}>EduScholar</h1>
                        <p style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Student Portal</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <NavItem to="/app/dashboard" icon={<LayoutDashboard size={16} />} label="Dashboard" />
                    <NavItem to="/app/assessment" icon={<FileText size={16} />} label="Assessments" />
                    <NavItem to="/app/results" icon={<BarChart3 size={16} />} label="My Results" />
                    <NavItem to="/app/scholarships" icon={<Award size={16} />} label="Scholarships" />
                </nav>

                {/* User Profile (Bottom) */}
                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem', borderRadius: '6px', background: 'rgba(255,255,255,0.03)' }}>
                        <div style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to right, #6366f1, #a855f7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700
                        }}>JS</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>John Smith</p>
                            <p style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Student ID: 2024001</p>
                        </div>
                        <button style={{ color: 'var(--color-text-muted)', cursor: 'pointer', background: 'transparent', border: 'none', padding: 0 }}><LogOut size={14} /></button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main style={{ marginLeft: '240px', flex: 1, padding: '1.5rem', maxWidth: '1400px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <button style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px', padding: '0.3rem 0.7rem', fontSize: '0.75rem', color: 'var(--color-text-muted)'
                        }}>
                            <Settings size={14} /> Settings
                        </button>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <Bell size={14} color="var(--color-text-muted)" />
                            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', border: '1px solid #0f172a' }}></span>
                        </button>
                    </div>
                </div>
                <Outlet />
            </main>
        </div>
    );
};

const NavItem = ({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) => {
    return (
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
                background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: isActive ? '#818cf8' : 'var(--color-text-muted)',
                fontSize: '0.8rem',
                fontWeight: isActive ? 600 : 500,
                letterSpacing: '0.01em',
                borderLeft: isActive ? '2px solid #818cf8' : '2px solid transparent'
            })}
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
};

export default Layout;
