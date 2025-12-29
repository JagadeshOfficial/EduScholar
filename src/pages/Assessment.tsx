
import { Clock, CheckCircle, ArrowRight, BarChart } from 'lucide-react';

const Assessment = () => {
    return (
        <div>
            <div style={{ marginBottom: '1.25rem' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>Assessments</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>View and attend your scheduled examinations.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <AssessmentCard
                    title="Advanced Calculus & Analytical Reasoning"
                    code="MATH-401"
                    duration="90 mins"
                    questions="50 Q"
                    difficulty="Hard"
                    deadline="Ends in 14h 20m"
                    status="Live"
                    tags={['Calculus', 'Algebra', 'Trig']}
                />
                <AssessmentCard
                    title="Physics Fundamentals: Mechanics"
                    code="PHY-102"
                    duration="60 mins"
                    questions="40 Q"
                    difficulty="Medium"
                    deadline="Starts Tomorrow, 10 AM"
                    status="Upcoming"
                    tags={['Mechanics', 'Thermodynamics']}
                />
                <AssessmentCard
                    title="Verbal Reasoning & Logic"
                    code="APT-101"
                    duration="45 mins"
                    questions="60 Q"
                    difficulty="Easy"
                    deadline="Always Available"
                    status="Open"
                    tags={['Vocabulary', 'Logic', 'Patterns']}
                />
                <AssessmentCard
                    title="Computer Science Principles"
                    code="CS-202"
                    duration="120 mins"
                    questions="75 Q"
                    difficulty="Medium"
                    deadline="Closed"
                    status="Missed"
                    tags={['Data Structures', 'Algorithms']}
                />
            </div>
        </div>
    );
};

const AssessmentCard = ({ title, code, duration, questions, difficulty, deadline, status, tags }: any) => {
    const isLive = status === 'Live';
    const isMissed = status === 'Missed';

    return (
        <div className="glass-panel" style={{
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderLeft: isLive ? '3px solid #10b981' : isMissed ? '3px solid #ef4444' : '3px solid transparent',
            opacity: isMissed ? 0.7 : 1
        }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700, background: 'rgba(99, 102, 241, 0.1)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>{code}</span>
                    {isLive && <span className="animate-pulse" style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></span> LIVE NOW</span>}
                    {!isLive && <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{deadline}</span>}
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.4rem', color: 'white' }}>{title}</h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        <Clock size={12} /> {duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        <CheckCircle size={12} /> {questions}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        <BarChart size={12} />
                        <span style={{
                            color: difficulty === 'Hard' ? '#ef4444' : difficulty === 'Medium' ? '#f59e0b' : '#10b981',
                            fontWeight: 500
                        }}>{difficulty}</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {tags.slice(0, 2).map((tag: string) => (
                        <span key={tag} style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    disabled={status === 'Missed'}
                    className="btn-primary"
                    style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        opacity: status === 'Missed' ? 0.5 : 1,
                        cursor: status === 'Missed' ? 'not-allowed' : 'pointer'
                    }}
                >
                    {status === 'Missed' ? 'Expired' : status === 'Live' ? 'Join Exam' : 'View Details'}
                    {status !== 'Missed' && <ArrowRight size={14} />}
                </button>
            </div>
        </div>
    );
};

export default Assessment;
