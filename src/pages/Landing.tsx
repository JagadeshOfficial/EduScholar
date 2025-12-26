import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Code, Shield, Cpu, Zap, Terminal, Brain, Target, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Landing = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
            {/* Navbar */}
            <nav style={{ padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', width: '100%', top: 0, zIndex: 100, backdropFilter: 'blur(16px)', background: 'rgba(15, 23, 42, 0.8)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--gradient-main)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-glow)' }}>
                        <Award color="white" size={22} />
                    </div>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>EduScholar</span>
                </div>
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
                    <a href="#proctoring" style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 500, transition: 'all 0.2s' }} className="hover:text-white">AI Proctoring</a>
                    <a href="#analytics" style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 500, transition: 'all 0.2s' }} className="hover:text-white">Smart Analytics</a>
                    <a href="#scholarships" style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 500, transition: 'all 0.2s' }} className="hover:text-white">Scholarships</a>
                    <Link to="/app" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>Student Login</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ marginTop: '70px', padding: '6rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Abstract Tech Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}></div>
                <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: '#6366f1', filter: 'blur(160px)', opacity: 0.15 }}></div>
                <div style={{ position: 'absolute', top: '40%', right: '10%', width: '300px', height: '300px', background: '#ec4899', filter: 'blur(140px)', opacity: 0.15 }}></div>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.25rem', borderRadius: '50px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#34d399', fontWeight: 600, marginBottom: '2rem', fontSize: '0.85rem' }}>
                        <Brain size={14} /> AI-Powered Assessment Engine 2.0 Live
                    </div>

                    <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-1.5px' }}>
                        Quantify Your <br />
                        <span className="text-gradient">Engineering Potential</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3.5rem', maxWidth: '680px', margin: '0 auto 3.5rem', lineHeight: '1.6' }}>
                        The most advanced evaluation platform for fresh graduates. We use <strong style={{ color: 'white' }}>Headless Browser Testing</strong> and <strong style={{ color: 'white' }}>AI Proctoring</strong> to validate your coding skills for top scholarships.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '5rem' }}>
                        <Link to="/app" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px' }}>
                            Take Demo Challenge <ArrowRight size={20} />
                        </Link>
                        <button style={{ padding: '1rem 2.5rem', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', fontSize: '1.1rem', fontWeight: 600, background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
                            Watch How It Works
                        </button>
                    </div>

                    {/* Code Preview Mockup */}
                    <div className="glass-panel" style={{ textAlign: 'left', padding: '0', overflow: 'hidden', maxWidth: '800px', margin: '0 auto', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                            <div style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>algorithm_challenge_v2.ts</div>
                        </div>
                        <div style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#a5b4fc', lineHeight: '1.6' }}>
                            <div style={{ color: '#818cf8' }}>function <span style={{ color: '#fcd34d' }}>optimizeAllocation</span>(scores: number[]): <span style={{ color: '#34d399' }}>Scholarship[]</span> {'{'}</div>
                            <div style={{ paddingLeft: '1.5rem' }}>
                                <span style={{ color: '#ec4899' }}>const</span> threshold = <span style={{ color: '#f472b6' }}>95.5</span>;
                            </div>
                            <div style={{ paddingLeft: '1.5rem' }}>
                                <span style={{ color: '#ec4899' }}>return</span> scores.filter(s ={'>'} s {'>'}= threshold).map(qualify);
                            </div>
                            <div>{'}'}</div>
                            <div style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.3)' }}>// AI Analysis: Code efficiency O(n) - OPTIMAL</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Advanced Capabilities */}
            <section id="proctoring" style={{ padding: '6rem 2rem', position: 'relative' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        <div>
                            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#4f46e5', color: 'white', fontWeight: 600, fontSize: '0.8rem', borderRadius: '6px', marginBottom: '1.5rem' }}>ENTERPRISE GRADE</div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>AI-Driven Proctoring & Integrity</h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                                Our advanced proctoring suite ensures 100% fair play. We monitor browser focus, tab switching, and use webcam behavioral analysis to certify every result.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1' }}>
                                    <CheckCircle color="#10b981" size={20} /> Intelligent Tab-Switch Detection
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1' }}>
                                    <CheckCircle color="#10b981" size={20} /> Browser Fingerprinting & IP Locking
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1' }}>
                                    <CheckCircle color="#10b981" size={20} /> Real-time Plagiarism Check
                                </li>
                            </ul>
                            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>View Security Specs</button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <CapabilityCard
                                icon={<Terminal size={24} color="#6366f1" />}
                                title="Integrated IDE"
                                desc="Full-featured code editor with syntax highlighting for 12+ languages."
                            />
                            <CapabilityCard
                                icon={<Cpu size={24} color="#ec4899" />}
                                title="Compile & Run"
                                desc="Server-side execution with custom test cases for logic verification."
                            />
                            <CapabilityCard
                                icon={<Target size={24} color="#f59e0b" />}
                                title="Adaptive Difficulty"
                                desc="Questions get harder as you answer correctly, measuring true potential."
                            />
                            <CapabilityCard
                                icon={<Zap size={24} color="#10b981" />}
                                title="Instant Rank"
                                desc="Live global leaderboards updated milliseconds after submission."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship Ticker */}
            <section id="scholarships" style={{ background: '#0f172a', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', overflow: 'hidden', padding: '2rem 0' }}>
                    <div style={{ minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--color-border)', paddingRight: '2rem' }}>
                        <span style={{ fontWeight: 700, color: '#f472b6' }}>LIVE GRANTS</span>
                    </div>

                    <div style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', animation: 'scroll 20s linear infinite', paddingLeft: '2rem' }}>
                        <TickerItem name="Alex Johnson" award="100% Waiver" school="Tech Institute" time="2m ago" />
                        <TickerItem name="Priya Sharma" award="75% Waiver" school="City College" time="5m ago" />
                        <TickerItem name="David Wei" award="100% Waiver" school="State Univ" time="12m ago" />
                        <TickerItem name="Samantha Bloom" award="50% Waiver" school="Polytechnic" time="15m ago" />
                        <TickerItem name="Rahul Verma" award="75% Waiver" school="NIT Campus" time="18m ago" />
                    </div>
                </div>
            </section>

            {/* Interactive Tabs for Roles */}
            <section style={{ padding: '6rem 2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Designed for The Ecosystem</h2>

                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '12px', marginBottom: '3rem' }}>
                        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)} icon={<Users size={18} />}>Students</TabButton>
                        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)} icon={<Award size={18} />}>Institutes</TabButton>
                        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)} icon={<Terminal size={18} />}>Recruiters</TabButton>
                    </div>

                    <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', minHeight: '300px', display: 'flex', alignItems: 'center', gap: '3rem' }}>
                        {activeTab === 0 && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Prove Your Worth</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                        Don't let your college tier define you. Take our standardized technical assessments and get a certified global rank that speaks louder than your resume.
                                    </p>
                                    <Link to="/app" className="btn-primary">Start Student Journey</Link>
                                </div>
                                <div style={{ width: '300px', height: '200px', background: 'var(--gradient-main)', opacity: 0.1, borderRadius: '1rem' }}></div>
                            </>
                        )}
                        {activeTab === 1 && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Identitfy Top Talent</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                        Automate your scholarship entrance exams. Save hundreds of faculty hours on manual checking and get analytics-driven insights into your batch's performance.
                                    </p>
                                    <button className="btn-primary">Request Institute Demo</button>
                                </div>
                                <div style={{ width: '300px', height: '200px', background: '#10b981', opacity: 0.1, borderRadius: '1rem' }}></div>
                            </>
                        )}
                        {activeTab === 2 && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hire Pre-Assessed Grads</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                        Access a database of students who have already proven their coding skills in proctored environments. Skip the technical screening round.
                                    </p>
                                    <button className="btn-primary">View Talent Pool</button>
                                </div>
                                <div style={{ width: '300px', height: '200px', background: '#f59e0b', opacity: 0.1, borderRadius: '1rem' }}></div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid var(--color-border)', padding: '4rem 2rem', background: 'var(--color-bg-card)', marginTop: 'auto' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Award color="#6366f1" size={24} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>EduScholar</span>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                            The #1 Platform for Technical Assessment and Scholarship distribution for educational institutes.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <a href="#">Online Exams</a>
                            <a href="#">Coding Sandbox</a>
                            <a href="#">Proctoring AI</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Resources</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <a href="#">Syllabus</a>
                            <a href="#">Sample Tests</a>
                            <a href="#">Student Guide</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Security</a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    © 2024 Institute Assessment System. Built for Excellence.
                </div>
            </footer>
        </div>
    );
};

const CapabilityCard = ({ icon, title, desc }: any) => (
    <div className="glass-panel" style={{
        padding: '1.5rem',
        transition: 'transform 0.2s',
        cursor: 'default',
        background: 'rgba(30, 41, 59, 0.4)'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{desc}</p>
    </div>
);

const TickerItem = ({ name, award, school, time }: any) => (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50px' }}>
        <span style={{ fontWeight: 600, color: '#f8fafc' }}>{name}</span>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>from {school}</span>
        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', fontSize: '0.75rem', fontWeight: 700 }}>{award}</span>
    </div>
);

const TabButton = ({ children, active, onClick, icon }: any) => (
    <button
        onClick={onClick}
        style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 600,
            color: active ? 'white' : 'var(--color-text-muted)',
            background: active ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            border: active ? '1px solid rgba(99, 102, 241, 0.5)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s'
        }}
    >
        {icon} {children}
    </button>
);

export default Landing;
