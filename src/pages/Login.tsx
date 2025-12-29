
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, User, Lock, Loader2, Award, Mail, Github } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState<'student' | 'institute' | 'admin'>('student');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            if (role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/app/dashboard');
            }
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#0f172a',
            fontFamily: "'Inter', sans-serif",
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Effects */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: '#6366f1', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: '#ec4899', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' }}></div>

            {/* Navbar (Simplified) */}
            <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                        <Award color="white" size={18} />
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>EduScholar</span>
                </Link>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
            </nav>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', zIndex: 5 }}>
                <div className="glass-panel" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white', letterSpacing: '-0.02em' }}>Welcome Back</h1>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Enter your credentials to access the portal</p>
                    </div>

                    {/* Role Tabs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.25rem', background: 'rgba(255,255,255,0.03)', padding: '0.3rem', borderRadius: '10px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {(['student', 'institute', 'admin'] as const).map((r) => (
                            <button
                                key={r}
                                onClick={() => setRole(r)}
                                style={{
                                    padding: '0.6rem',
                                    borderRadius: '8px',
                                    background: role === r ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                                    color: role === r ? '#818cf8' : 'var(--color-text-muted)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    textTransform: 'capitalize',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>
                                {role === 'student' ? 'Student ID' : 'Email Address'}
                            </label>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>
                                    {role === 'student' ? <User size={18} /> : <Mail size={18} />}
                                </div>
                                <input
                                    type={role === 'student' ? 'text' : 'email'}
                                    defaultValue={role === 'student' ? 'ST-20248821' : 'admin@eduscholar.com'}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem 0.8rem 3rem',
                                        background: 'rgba(15, 23, 42, 0.6)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        color: 'white',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    placeholder={role === 'student' ? 'Ex: ST-2024...' : 'name@company.com'}
                                />
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>Password</label>
                                <a href="#" style={{ fontSize: '0.8rem', color: '#818cf8', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    defaultValue="password123"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem 0.8rem 3rem',
                                        background: 'rgba(15, 23, 42, 0.6)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        color: 'white',
                                        fontSize: '0.95rem',
                                        outline: 'none'
                                    }}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isLoading}
                            style={{
                                marginTop: '0.5rem',
                                width: '100%',
                                padding: '0.9rem',
                                fontSize: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                borderRadius: '10px'
                            }}
                        >
                            {isLoading ? <Loader2 size={20} className="animate-spin" /> : 'Sign In'}
                            {!isLoading && <ArrowRight size={18} />}
                        </button>
                    </form>

                    {/* Divider */}
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2rem 0', gap: '1rem', color: 'rgba(255,255,255,0.2)' }}>
                        <div style={{ flex: 1, height: '1px', background: 'currentColor' }}></div>
                        <span style={{ fontSize: '0.8rem' }}>OR CONTINUE WITH</span>
                        <div style={{ flex: 1, height: '1px', background: 'currentColor' }}></div>
                    </div>

                    {/* Social Login */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <button style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                            padding: '0.7rem', borderRadius: '8px',
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white', fontSize: '0.9rem', cursor: 'pointer', transition: 'background 0.2s'
                        }}>
                            <Github size={18} /> GitHub
                        </button>
                        <button style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                            padding: '0.7rem', borderRadius: '8px',
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white', fontSize: '0.9rem', cursor: 'pointer', transition: 'background 0.2s'
                        }}>
                            <span style={{ fontWeight: 700 }}>G</span> Google
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        Don't have an account? <Link to="/signup" style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none' }}>Apply Now</Link>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ padding: '2rem', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', position: 'relative', zIndex: 10 }}>
                <p>© 2024 Institute Assessment System. Secured by 256-bit Encryption.</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.8rem' }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Help Center</a>
                </div>
            </footer>
        </div>
    );
};

export default Login;
