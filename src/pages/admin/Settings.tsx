import { Save, Lock, Bell, Globe } from 'lucide-react';

const AdminSettings = () => {
    return (
        <div style={{ maxWidth: '700px' }}>
            <h1 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>System Settings</h1>

            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', marginBottom: '1rem' }}>
                <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                    <h3 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>General Configuration</h3>
                </div>
                <div style={{ padding: '1rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Institute Name</label>
                        <input type="text" defaultValue="EduScholar Institute of Technology" style={inputStyle} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Support Email</label>
                            <input type="email" defaultValue="admin@eduscholar.com" style={inputStyle} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Contact Phone</label>
                            <input type="text" defaultValue="+1 (555) 123-4567" style={inputStyle} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.8rem', fontSize: '0.8rem' }}>
                            <Save size={14} /> Save Changes
                        </button>
                    </div>
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                    <h3 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>Security & Access</h3>
                </div>
                <div style={{ padding: '1rem' }}>
                    <SettingItem
                        icon={<Lock size={16} />}
                        title="Two-Factor Authentication"
                        desc="Require 2FA for all admin accounts."
                        enabled={true}
                    />
                    <SettingItem
                        icon={<Bell size={16} />}
                        title="System Alerts"
                        desc="Email notifications for suspicious login attempts."
                        enabled={true}
                    />
                    <SettingItem
                        icon={<Globe size={16} />}
                        title="Public API Access"
                        desc="Allow external tools to read scholarship data."
                        enabled={false}
                    />
                </div>
            </div>
        </div>
    );
};

const SettingItem = ({ icon, title, desc, enabled }: any) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: 'var(--color-text-muted)' }}>
                {icon}
            </div>
            <div>
                <div style={{ fontWeight: 600, marginBottom: '0.1rem', fontSize: '0.8rem' }}>{title}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{desc}</div>
            </div>
        </div>
        <div style={{
            width: '32px',
            height: '18px',
            background: enabled ? '#10b981' : 'rgba(255,255,255,0.1)',
            borderRadius: '9px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background 0.2s'
        }}>
            <div style={{
                width: '14px',
                height: '14px',
                background: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: enabled ? '16px' : '2px',
                transition: 'left 0.2s'
            }}></div>
        </div>
    </div>
);

const inputStyle = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
    background: 'rgba(255,255,255,0.03)',
    color: 'white',
    fontSize: '0.8rem'
};

export default AdminSettings;
