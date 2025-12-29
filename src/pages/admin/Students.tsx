import { useState } from 'react';
import { Search, Filter, Mail, Trash2, Edit, CheckCircle, XCircle } from 'lucide-react';

const AdminStudents = () => {
    const [filter, setFilter] = useState('All');

    const students = [
        { id: 'ST-001', name: 'Alex Johnson', email: 'alex.j@example.com', batch: '2024 - CS', score: '92%', status: 'Active' },
        { id: 'ST-002', name: 'Sarah Williams', email: 'sarah.w@example.com', batch: '2024 - CS', score: '88%', status: 'Active' },
        { id: 'ST-003', name: 'Michael Brown', email: 'm.brown@example.com', batch: '2024 - EC', score: '74%', status: 'Inactive' },
        { id: 'ST-004', name: 'Emily Davis', email: 'emily.d@example.com', batch: '2025 - CS', score: '95%', status: 'Active' },
        { id: 'ST-005', name: 'James Wilson', email: 'j.wilson@example.com', batch: '2024 - ME', score: '68%', status: 'Active' },
        { id: 'ST-006', name: 'Linda Martinez', email: 'l.martinez@example.com', batch: '2025 - EC', score: '81%', status: 'Suspended' },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.4rem', marginBottom: '0.2rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Student Management</h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Manage student profiles, statuses, and performance.</p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.8rem', fontSize: '0.8rem' }}>
                    <span>+ Add Student</span>
                </button>
            </div>

            {/* Toolbar */}
            <div className="glass-panel" style={{ padding: '0.6rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{
                                padding: '0.4rem 0.8rem 0.4rem 2rem',
                                borderRadius: '6px',
                                border: '1px solid var(--color-border)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                width: '200px',
                                fontSize: '0.8rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                        {['All', 'Active', 'Inactive', 'Suspended'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '0.3rem 0.6rem',
                                    borderRadius: '6px',
                                    background: filter === f ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                                    color: filter === f ? '#818cf8' : 'var(--color-text-muted)',
                                    border: filter === f ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                                    fontSize: '0.75rem',
                                    fontWeight: 500
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid var(--color-border)', fontSize: '0.75rem', background: 'transparent' }}>
                    <Filter size={12} /> Filter
                </button>
            </div>

            {/* Table */}
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--color-border)' }}>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Student Info</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Batch</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Score</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', transition: 'background 0.2s' }} className="hover:bg-slate-800/50">
                                <td style={{ padding: '0.6rem 1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.75rem' }}>
                                            {student.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0' }}>{student.name}</div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{student.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '0.6rem 1rem', color: '#cbd5e1', fontSize: '0.8rem' }}>{student.batch}</td>
                                <td style={{ padding: '0.6rem 1rem', fontWeight: 600, fontSize: '0.85rem' }}>{student.score}</td>
                                <td style={{ padding: '0.6rem 1rem' }}>
                                    <span style={{
                                        padding: '0.15rem 0.5rem',
                                        borderRadius: '12px',
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        background: student.status === 'Active' ? 'rgba(16, 185, 129, 0.15)' : student.status === 'Inactive' ? 'rgba(148, 163, 184, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                                        color: student.status === 'Active' ? '#10b981' : student.status === 'Inactive' ? '#94a3b8' : '#ef4444',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        border: student.status === 'Active' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent'
                                    }}>
                                        {student.status === 'Active' ? <CheckCircle size={10} /> : <XCircle size={10} />}
                                        {student.status}
                                    </span>
                                </td>
                                <td style={{ padding: '0.6rem 1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'flex-end' }}>
                                        <button style={{ padding: '0.3rem', borderRadius: '4px', color: 'var(--color-text-muted)', border: '1px solid transparent', background: 'transparent' }} className="hover:bg-white/5"><Mail size={12} /></button>
                                        <button style={{ padding: '0.3rem', borderRadius: '4px', color: 'var(--color-text-muted)', border: '1px solid transparent', background: 'transparent' }} className="hover:bg-white/5"><Edit size={12} /></button>
                                        <button style={{ padding: '0.3rem', borderRadius: '4px', color: '#ef4444', border: '1px solid transparent', background: 'transparent' }} className="hover:bg-red-500/10"><Trash2 size={12} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '1rem' }}>
                <div>Showing 1-6 of 240 students</div>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                    <button style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'white' }}>Prev</button>
                    <button style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-primary)', color: 'white' }}>1</button>
                    <button style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'white' }}>2</button>
                    <button style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'white' }}>3</button>
                    <button style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'transparent', color: 'white' }}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default AdminStudents;
