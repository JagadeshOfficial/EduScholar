
import { Clock, CheckCircle } from 'lucide-react';

const Assessment = () => {
    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Available Assessments</h1>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                <AssessmentCard
                    title="Advanced Mathematics"
                    duration="90 mins"
                    questions="50 Questions"
                    difficulty="Hard"
                    tags={['Calculus', 'Algebra', 'Trig']}
                />
                <AssessmentCard
                    title="Physics Fundamentals"
                    duration="60 mins"
                    questions="40 Questions"
                    difficulty="Medium"
                    tags={['Mechanics', 'Thermodynamics']}
                />
                <AssessmentCard
                    title="Verbal Reasoning"
                    duration="45 mins"
                    questions="60 Questions"
                    difficulty="Easy"
                    tags={['Vocabulary', 'Logic']}
                />
            </div>
        </div>
    );
};

const AssessmentCard = ({ title, duration, questions, difficulty, tags }: any) => {
    return (
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        background: difficulty === 'Hard' ? 'rgba(239, 68, 68, 0.2)' : difficulty === 'Medium' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                        color: difficulty === 'Hard' ? '#ef4444' : difficulty === 'Medium' ? '#f59e0b' : '#10b981',
                        fontWeight: 600
                    }}>
                        {difficulty}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                        <Clock size={16} /> {duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                        <CheckCircle size={16} /> {questions}
                    </div>
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {tags.map((tag: string) => (
                        <span key={tag} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <button className="btn-primary">Start Now</button>
        </div>
    );
};

export default Assessment;
