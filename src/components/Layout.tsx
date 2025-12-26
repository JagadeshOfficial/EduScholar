import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Award, BarChart3, Settings, LogOut } from 'lucide-react';

const Layout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside className="glass-panel" style={{
                width: '280px',
                position: 'fixed',
                height: 'calc(100vh - 2rem)',
                margin: '1rem',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                zIndex: 50
            }}>
                {/* Logo */}
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--gradient-main)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <Award color="white" size={28} />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '1.25rem', letterSpacing: '-0.5px' }}>EduScholar</h1>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Assessment Portal</p>
                    </div>
                </div>

                {/* Nav */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <NavItem to="/app/dashboard" icon={<LayoutDashboard size={22} />} label="Dashboard" />
                    <NavItem to="/app/assessment" icon={<FileText size={22} />} label="Take Assessment" />
                    <NavItem to="/app/results" icon={<BarChart3 size={22} />} label="My Results" />
                    <NavItem to="/app/scholarships" icon={<Award size={22} />} label="Scholarships" />
                </nav>

                {/* Bottom Actions */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <NavItem to="/settings" icon={<Settings size={22} />} label="Settings" />

                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.03)' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'linear-gradient(to right, #4776E6, #8E54E9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>S</div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Student User</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Class 12 - Sci</p>
                            </div>
                            <button style={{ color: 'var(--color-text-muted)' }}><LogOut size={18} /></button>
                        </div>
                    </div>
                </div>
            </aside>

            <main style={{ marginLeft: '312px', flex: 1, padding: '2rem 3rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

// Start Helper Component
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
                gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease',
                background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent',
                fontWeight: isActive ? 600 : 500
            })}
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
};

export default Layout;
