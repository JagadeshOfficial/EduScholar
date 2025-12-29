import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Cpu, Zap, Terminal, Brain, Target, TrendingUp, Globe, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AreaChart, RadarChart } from '../components/AdminCharts';

const Landing = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [typedCode, setTypedCode] = useState('');
    const fullCode = `function optimizeAllocation(scores) {\n  const threshold = 95.5;\n  return scores.filter(s => s >= threshold);\n}`;

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullCode.length) {
                setTypedCode(prev => prev + fullCode.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

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
                    <a href="#proctoring" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500, transition: 'all 0.2s' }} className="hover:text-white">AI Proctoring</a>
                    <a href="#analytics" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500, transition: 'all 0.2s' }} className="hover:text-white">Smart Analytics</a>
                    <a href="#scholarships" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500, transition: 'all 0.2s' }} className="hover:text-white">Scholarships</a>
                    <Link to="/login" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Student Login</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ marginTop: '60px', padding: '5rem 1.5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Abstract Tech Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}></div>
                <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: '#6366f1', filter: 'blur(160px)', opacity: 0.15 }}></div>
                <div style={{ position: 'absolute', top: '40%', right: '10%', width: '300px', height: '300px', background: '#ec4899', filter: 'blur(140px)', opacity: 0.15 }}></div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '50px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#34d399', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.75rem' }}>
                        <Brain size={12} /> AI-Powered Assessment Engine 2.0 Live
                    </div>

                    <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1rem', fontWeight: 800, letterSpacing: '-1.5px' }}>
                        Quantify Your <br />
                        <span className="text-gradient">Engineering Potential</span>
                    </h1>

                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
                        The most advanced evaluation platform for fresh graduates. We use <strong style={{ color: 'white' }}>Headless Browser Testing</strong> and <strong style={{ color: 'white' }}>AI Proctoring</strong> to validate your coding skills for top scholarships.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
                        <Link to="/login" className="btn-primary" style={{ fontSize: '1rem', padding: '0.8rem 1.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem', borderRadius: '10px', boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}>
                            Take Demo Challenge <ArrowRight size={18} />
                        </Link>
                        <button style={{ padding: '0.8rem 1.8rem', borderRadius: '10px', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', fontSize: '1rem', fontWeight: 600, background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
                            Watch Demo
                        </button>
                    </div>

                    {/* Live Activity Indicator */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="animate-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                            <span style={{ fontWeight: 600, color: 'white' }}>1,240</span> Students Coding Now
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Globe size={14} />
                            <span style={{ fontWeight: 600, color: 'white' }}>12</span> Global Contests Live
                        </div>
                    </div>

                    {/* Animated Code Preview */}
                    <div className="glass-panel" style={{ textAlign: 'left', padding: '0', overflow: 'hidden', maxWidth: '700px', margin: '0 auto', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            <div style={{ marginLeft: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>algorithm_challenge_v2.ts</div>
                        </div>
                        <div style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#a5b4fc', lineHeight: '1.6', minHeight: '160px' }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{typedCode}<span className="animate-pulse">|</span></pre>
                        </div>
                        <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '20px' }}>
                            <CheckCircle size={10} /> AI Analysis: O(n) Optimal
                        </div>
                    </div>
                </div>
            </header>

            {/* Trusted By Strip */}
            <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.01)', padding: '1.5rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.5, filter: 'grayscale(100%)' }}>
                    {/* Placeholder Logos */}
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'serif' }}>HARVARD</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'sans-serif' }}>MIT</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'monospace' }}>STANFORD</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'system-ui' }}>BERKELEY</span>
                </div>
            </div>

            {/* Advanced Smart Analytics Section */}
            <section id="analytics" style={{ padding: '5rem 2rem', background: 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.05))' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Data Driven Insights</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Visualize Your Growth</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                            We provide institutional-grade analytics to every student. Understand where you stand globally.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
                        {/* Chart Card 1 */}
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <TrendingUp size={18} color="#f59e0b" /> Performance Velocity
                                    </h3>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Your improvement rate vs batch average</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#10b981' }}>+24%</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>This Month</div>
                                </div>
                            </div>
                            <AreaChart data={[30, 45, 40, 60, 55, 75, 80, 70, 90, 85, 100]} color="#f59e0b" height={180} />
                        </div>

                        {/* Chart Card 2 */}
                        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Target size={18} color="#ec4899" /> Skill Matrix
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', maxWidth: '180px' }}>
                                    Detailed breakdown of your technical strengths.
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><div style={{ width: 6, height: 6, background: '#10b981', borderRadius: '50%' }}></div> Strong: Algorithms</div>
                                    <div style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><div style={{ width: 6, height: 6, background: '#f59e0b', borderRadius: '50%' }}></div> Improving: System Design</div>
                                </div>
                            </div>
                            <RadarChart />
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Capabilities */}
            <section id="proctoring" style={{ padding: '5rem 2rem', position: 'relative' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                        <div>
                            <div style={{ display: 'inline-block', padding: '0.4rem 0.8rem', background: '#4f46e5', color: 'white', fontWeight: 600, fontSize: '0.7rem', borderRadius: '6px', marginBottom: '1rem' }}>ENTERPRISE GRADE</div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>AI-Driven Proctoring & Integrity</h2>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Our advanced proctoring suite ensures 100% fair play. We monitor browser focus, tab switching, and use webcam behavioral analysis to certify every result.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    <CheckCircle color="#10b981" size={18} /> Intelligent Tab-Switch Detection
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    <CheckCircle color="#10b981" size={18} /> Browser Fingerprinting & IP Locking
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    <CheckCircle color="#10b981" size={18} /> Real-time Plagiarism Check
                                </li>
                            </ul>
                            <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>View Security Specs</button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <CapabilityCard
                                icon={<Terminal size={20} color="#6366f1" />}
                                title="Integrated IDE"
                                desc="Full-featured code editor with syntax highlighting for 12+ languages."
                            />
                            <CapabilityCard
                                icon={<Cpu size={20} color="#ec4899" />}
                                title="Compile & Run"
                                desc="Server-side execution with custom test cases for logic verification."
                            />
                            <CapabilityCard
                                icon={<Target size={20} color="#f59e0b" />}
                                title="Adaptive Difficulty"
                                desc="Questions get harder as you answer correctly, measuring true potential."
                            />
                            <CapabilityCard
                                icon={<Zap size={20} color="#10b981" />}
                                title="Instant Rank"
                                desc="Live global leaderboards updated milliseconds after submission."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Leaderboard Ticker (New) */}
            <section style={{ borderTop: '1px solid var(--color-border)', padding: '1rem 0', background: 'rgba(15, 23, 42, 0.4)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Activity size={14} color="#f59e0b" /> Top Performers (Last Hr):</span>
                    <span style={{ color: 'white' }}>Rank #1: Sarah K. (985/1000)</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span style={{ color: 'white' }}>Rank #2: Mike R. (972/1000)</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span style={{ color: 'white' }}>Rank #3: Emily W. (968/1000)</span>
                </div>
            </section>

            {/* Scholarship Ticker */}
            <section id="scholarships" style={{ background: '#0f172a', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', overflow: 'hidden', padding: '1.5rem 0' }}>
                    <div style={{ minWidth: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--color-border)', paddingRight: '2rem' }}>
                        <span style={{ fontWeight: 700, color: '#f472b6', fontSize: '0.9rem' }}>LIVE GRANTS</span>
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

            {/* Interactive Tabs for Roles (Compacted) */}
            <section style={{ padding: '4rem 2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Designed for The Ecosystem</h2>

                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', padding: '0.4rem', borderRadius: '12px', marginBottom: '2.5rem' }}>
                        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)} icon={<Users size={16} />}>Students</TabButton>
                        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)} icon={<Award size={16} />}>Institutes</TabButton>
                        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)} icon={<Terminal size={16} />}>Recruiters</TabButton>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left', minHeight: '250px', display: 'flex', alignItems: 'center', gap: '3rem' }}>
                        {activeTab === 0 && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Prove Your Worth</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                        Don't let your college tier define you. Take our standardized technical assessments and get a certified global rank that speaks louder than your resume.
                                    </p>
                                    <Link to="/app" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Start Student Journey</Link>
                                </div>
                                <div style={{ width: '250px', height: '150px', background: 'var(--gradient-main)', opacity: 0.1, borderRadius: '1rem' }}></div>
                            </>
                        )}
                        {activeTab === 1 && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Identitfy Top Talent</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                        Automate your scholarship entrance exams. Save hundreds of faculty hours on manual checking and get analytics-driven insights into your batch's performance.
                                    </p>
                                    <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Request Institute Demo</button>
                                </div>
                                <div style={{ width: '250px', height: '150px', background: '#10b981', opacity: 0.1, borderRadius: '1rem' }}></div>
                            </>
                        )}
                        {activeTab === 2 && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Hire Pre-Assessed Grads</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                        Access a database of students who have already proven their coding skills in proctored environments. Skip the technical screening round.
                                    </p>
                                    <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Talent Pool</button>
                                </div>
                                <div style={{ width: '250px', height: '150px', background: '#f59e0b', opacity: 0.1, borderRadius: '1rem' }}></div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid var(--color-border)', padding: '3rem 2rem', background: 'var(--color-bg-card)', marginTop: 'auto' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                            <Award color="#6366f1" size={20} />
                            <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>EduScholar</span>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                            The #1 Platform for Technical Assessment and Scholarship distribution for educational institutes.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.2rem', fontSize: '0.9rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                            <a href="#">Online Exams</a>
                            <a href="#">Coding Sandbox</a>
                            <a href="#">Proctoring AI</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.2rem', fontSize: '0.9rem' }}>Resources</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                            <a href="#">Syllabus</a>
                            <a href="#">Sample Tests</a>
                            <a href="#">Student Guide</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.2rem', fontSize: '0.9rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Security</a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
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
        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>{time}</span>
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
