const { useState, useEffect, useMemo, useRef, useCallback } = React;

// ================ UTILITY COMPONENTS ================

// Toast notification
const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-forest text-white px-5 py-2.5 rounded-xl shadow-lg z-50 no-print text-sm font-medium animate-slideIn">
            ✓ {message}
        </div>
    );
};

// Progress ring component
const ProgressRing = ({ progress, size = 48, strokeWidth = 4 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;
    
    return (
        <svg width={size} height={size} className="transform -rotate-90">
            <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#EBEEDF" strokeWidth={strokeWidth} />
            <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={progress === 100 ? "#4C7033" : "#839463"} strokeWidth={strokeWidth}
                strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-500" />
            <text x={size/2} y={size/2} textAnchor="middle" dy="0.35em" className="fill-wood text-xs font-bold transform rotate-90" style={{transformOrigin: 'center'}}>
                {progress}%
            </text>
        </svg>
    );
};

// Test Info Modal
const TestInfoModal = ({ testId, onClose }) => {
    const info = TEST_INFO[testId];
    if (!info) return null;

    const sections = [
        { icon: '👤', title: 'Who This Test Is For', content: info.designedFor },
        { icon: '📋', title: 'Versions & Translations', content: info.versions },
        { icon: '✍️', title: 'Taking The Test', content: info.takingTest },
        { icon: '📊', title: 'Scoring', content: info.scoring },
        { icon: '✓', title: 'Validity', content: info.validity },
        { icon: '💬', title: 'Discussion', content: info.discussion }
    ];

    return (
        <div className="fixed inset-0 bg-wood/90 flex items-center justify-center p-4 z-50 no-print" onClick={onClose}>
            <div className="bg-paper rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="bg-forest text-white p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black">{info.fullName}</h2>
                            <p className="text-white/80 text-sm mt-1">Test Information & Background</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                    <div className="space-y-5">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-parchment/50 rounded-xl p-4">
                                <h3 className="font-bold text-wood flex items-center gap-2 mb-2">
                                    <span className="text-lg">{section.icon}</span>
                                    {section.title}
                                </h3>
                                <p className="text-ash text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ================ ONBOARDING MODAL ================

const OnboardingModal = ({ onComplete }) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onComplete({ name, dob, gender });
    };

    return (
        <div className="fixed inset-0 bg-wood/90 flex items-center justify-center p-4 z-50">
            <div className="bg-paper rounded-3xl w-full max-w-md p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🧠</span>
                    </div>
                    <h1 className="text-2xl font-black text-wood mb-2">Welcome</h1>
                    <p className="text-ash text-sm">Let's set up your screening profile</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-wood mb-2">Your Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full p-4 rounded-xl border-2 border-sage/30 focus:border-forest focus:outline-none transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-wood mb-2">Date of Birth</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-sage/30 focus:border-forest focus:outline-none transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-wood mb-2">Gender</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-sage/30 focus:border-forest focus:outline-none transition-colors bg-white"
                            required
                        >
                            <option value="">Select gender...</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Non-Binary">Non-Binary</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-forest text-white font-bold rounded-xl hover:bg-[#3A5A25] transition-all shadow-lg mt-6"
                    >
                        Start Screening →
                    </button>
                </form>
            </div>
        </div>
    );
};

// ================ TEST CARD ================

const TestCard = ({ test, progress, onClick }) => {
    const isComplete = progress === 100;
    
    return (
        <button
            onClick={onClick}
            className={`bg-paper rounded-2xl p-6 border-2 transition-all text-left w-full hover:shadow-lg hover:scale-[1.02] ${
                isComplete ? 'border-forest bg-forest/5' : 'border-sage/30 hover:border-forest/50'
            }`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isComplete ? 'bg-forest text-white' : 'bg-sage/20 text-sage'}`}>
                    {isComplete ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <span className="text-xl">📝</span>
                    )}
                </div>
                <ProgressRing progress={progress} size={44} strokeWidth={3} />
            </div>
            <h3 className="text-lg font-bold text-wood mb-1">{test.title}</h3>
            <p className="text-sm text-ash line-clamp-2">{test.description}</p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-sage font-medium">{QUESTIONS[test.id]?.length || 0} questions</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    isComplete ? 'bg-forest text-white' : progress > 0 ? 'bg-sage/20 text-sage' : 'bg-parchment text-ash/50'
                }`}>
                    {isComplete ? 'Complete' : progress > 0 ? 'In Progress' : 'Not Started'}
                </span>
            </div>
        </button>
    );
};

// ================ QUESTION ITEM ================

const QuestionItem = ({ item, index, scale, response, note, onUpdate, onNoteUpdate, onClear, isAnswered }) => {
    const [showNote, setShowNote] = useState(!!note);
    const itemRef = useRef(null);

    return (
        <div 
            ref={itemRef}
            className={`bg-white p-3 md:p-4 rounded-xl border-2 transition-all print:shadow-none ${
                isAnswered ? 'border-forest/30 bg-forest/5' : 'border-sage/20 hover:border-sage/40'
            }`}
            data-question-id={item.id}
        >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
                {/* Question */}
                <div className="flex items-start gap-2 flex-grow">
                    {isAnswered && (
                        <span className="text-forest mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    )}
                    <span className="text-ash/40 text-xs font-mono mt-0.5">{index + 1}.</span>
                    <h4 className="text-sm font-medium text-wood leading-snug flex-grow">{item.q}</h4>
                    <div className="flex items-center gap-1 flex-shrink-0 no-print">
                        <button
                            onClick={() => setShowNote(!showNote)}
                            className={`p-1.5 rounded-full transition-colors ${showNote || note ? 'text-amber-600 bg-amber-50' : 'text-ash/30 hover:text-amber-600'}`}
                            title="Add note"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isAnswered && (
                            <button
                                onClick={onClear}
                                className="p-1.5 rounded-full text-ash/30 hover:text-red-500 transition-colors"
                                title="Clear selection"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Radio options */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                    {scale.map((label, sIdx) => (
                        <button
                            key={sIdx}
                            onClick={() => onUpdate(item.id, sIdx)}
                            className="group relative"
                            title={label}
                        >
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                response === sIdx
                                    ? 'border-forest bg-forest'
                                    : 'border-sage/40 bg-white hover:border-forest/60'
                            }`}>
                                {response === sIdx && <span className="w-2 h-2 rounded-full bg-white"></span>}
                            </span>
                            <span className="hidden md:block absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[9px] text-ash/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity max-w-[60px] truncate">
                                {label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Print scale display */}
            {isAnswered && (
                <div className="hidden print:block mt-1 text-[10px] text-forest font-medium pl-6">
                    → {scale[response]}
                </div>
            )}

            {/* Note area */}
            {(showNote || note) && (
                <div className="mt-3 pl-6">
                    <textarea
                        value={note || ''}
                        onChange={(e) => onNoteUpdate(item.id, e.target.value)}
                        placeholder="Add context or examples..."
                        className="w-full p-2 rounded-lg border border-amber-200 bg-amber-50/50 text-xs text-wood focus:outline-none focus:ring-2 focus:ring-amber-300 min-h-[40px] no-print"
                    />
                    {note && (
                        <div className="hidden print:block p-2 bg-amber-50 rounded text-xs text-wood italic border-l-2 border-amber-400">
                            📝 {note}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// ================ SECTION COMPONENT ================

const Section = ({ section, scale, responses, notes, sectionNote, onUpdate, onNoteUpdate, onClear, onSectionNoteUpdate, isOpen, onToggle }) => {
    const [showSectionNote, setShowSectionNote] = useState(!!sectionNote);
    const answered = section.items.filter(i => responses[i.id] !== undefined).length;
    const total = section.items.length;
    const isComplete = answered === total;

    return (
        <div className={`bg-paper rounded-xl border-2 overflow-hidden transition-all ${isComplete ? 'border-forest/30' : 'border-sage/30'} print:border-sage/20`}>
            {/* Section Header */}
            <div 
                className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${isComplete ? 'bg-forest/5' : 'hover:bg-parchment/50'} print:bg-forest/5`}
                onClick={onToggle}
            >
                <div className="flex items-center gap-3">
                    <div className={`no-print transition-transform ${isOpen ? 'rotate-90' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {isComplete && (
                        <span className="text-forest">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </span>
                    )}
                    <span className="font-bold text-wood">{section.name}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowSectionNote(!showSectionNote); }}
                        className={`p-1.5 rounded-full transition-colors no-print ${showSectionNote || sectionNote ? 'text-amber-600 bg-amber-50' : 'text-ash/30 hover:text-amber-600'}`}
                        title="Section note"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${isComplete ? 'bg-forest text-white' : 'bg-parchment text-ash'}`}>
                        {answered}/{total}
                    </span>
                </div>
            </div>

            {/* Section Note */}
            {(showSectionNote || sectionNote) && (
                <div className="px-4 py-3 bg-amber-50/50 border-t border-amber-200/50">
                    <textarea
                        value={sectionNote || ''}
                        onChange={(e) => onSectionNoteUpdate(section.key, e.target.value)}
                        placeholder="Notes for this entire section..."
                        className="w-full p-2 rounded-lg border border-amber-200 bg-white text-sm text-wood focus:outline-none focus:ring-2 focus:ring-amber-300 min-h-[50px] no-print"
                    />
                    {sectionNote && (
                        <div className="hidden print:block py-2 text-sm text-wood italic border-l-2 border-amber-400 pl-2">
                            📋 <strong>Section Note:</strong> {sectionNote}
                        </div>
                    )}
                </div>
            )}

            {/* Questions */}
            {isOpen && (
                <div className="p-4 border-t border-sage/20 space-y-2 print:space-y-1">
                    {section.items.map((item, idx) => (
                        <QuestionItem
                            key={item.id}
                            item={item}
                            index={idx}
                            scale={scale}
                            response={responses[item.id]}
                            note={notes[item.id]}
                            onUpdate={onUpdate}
                            onNoteUpdate={onNoteUpdate}
                            onClear={() => onClear(item.id)}
                            isAnswered={responses[item.id] !== undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// ================ MAIN APP ================

const App = () => {
    // State
    const [profile, setProfile] = useState(() => {
        const saved = localStorage.getItem('nd_profile');
        return saved ? JSON.parse(saved) : null;
    });
    const [responses, setResponses] = useState(() => {
        const saved = localStorage.getItem('nd_responses');
        return saved ? JSON.parse(saved) : {};
    });
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem('nd_notes');
        return saved ? JSON.parse(saved) : {};
    });
    const [sectionNotes, setSectionNotes] = useState(() => {
        const saved = localStorage.getItem('nd_section_notes');
        return saved ? JSON.parse(saved) : {};
    });
    const [activeTest, setActiveTest] = useState(null);
    const [toast, setToast] = useState(null);
    const [showProfileEdit, setShowProfileEdit] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [showTestInfo, setShowTestInfo] = useState(false);
    const saveTimer = useRef(null);

    // Calculate age
    const calculateAge = useCallback((dob) => {
        if (!dob) return null;
        const birth = new Date(dob);
        const now = new Date();
        let age = now.getFullYear() - birth.getFullYear();
        if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }, []);

    // Calculate progress
    const calculateProgress = useCallback((testId) => {
        const total = QUESTIONS[testId]?.length || 0;
        const answered = Object.keys(responses[testId] || {}).length;
        return total > 0 ? Math.round((answered / total) * 100) : 0;
    }, [responses]);

    // Overall progress
    const overallProgress = useMemo(() => {
        let total = 0, answered = 0;
        TEST_CONFIG.forEach(test => {
            total += QUESTIONS[test.id]?.length || 0;
            answered += Object.keys(responses[test.id] || {}).length;
        });
        return total > 0 ? Math.round((answered / total) * 100) : 0;
    }, [responses]);

    // Auto-save
    useEffect(() => {
        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => {
            localStorage.setItem('nd_profile', JSON.stringify(profile));
            localStorage.setItem('nd_responses', JSON.stringify(responses));
            localStorage.setItem('nd_notes', JSON.stringify(notes));
            localStorage.setItem('nd_section_notes', JSON.stringify(sectionNotes));
            if (profile) setToast('Saved');
        }, 800);
    }, [profile, responses, notes, sectionNotes]);

    // Group questions
    const groupedQuestions = useMemo(() => {
        if (!activeTest) return [];
        const list = QUESTIONS[activeTest] || [];
        const groups = {};
        list.forEach(item => {
            const groupName = item.group || item.part || "Questions";
            if (!groups[groupName]) groups[groupName] = [];
            groups[groupName].push(item);
        });
        return Object.entries(groups).map(([name, items]) => ({
            name,
            key: `${activeTest}_${name}`,
            items
        }));
    }, [activeTest]);

    // Handlers
    const handleOnboardingComplete = (data) => {
        setProfile(data);
    };

    const handleUpdate = (questionId, value) => {
        setResponses(prev => ({
            ...prev,
            [activeTest]: { ...(prev[activeTest] || {}), [questionId]: value }
        }));
        
        // Auto-advance to next unanswered
        setTimeout(() => {
            const allQ = document.querySelectorAll('[data-question-id]');
            const currentIdx = Array.from(allQ).findIndex(el => el.dataset.questionId === questionId);
            for (let i = currentIdx + 1; i < allQ.length; i++) {
                const qId = allQ[i].dataset.questionId;
                if (responses[activeTest]?.[qId] === undefined) {
                    allQ[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break;
                }
            }
        }, 100);
    };

    const handleClear = (questionId) => {
        setResponses(prev => {
            const newTestResponses = { ...(prev[activeTest] || {}) };
            delete newTestResponses[questionId];
            return { ...prev, [activeTest]: newTestResponses };
        });
    };

    const handleNoteUpdate = (qId, val) => {
        setNotes(prev => ({ ...prev, [qId]: val }));
    };

    const handleSectionNoteUpdate = (sectionKey, val) => {
        setSectionNotes(prev => ({ ...prev, [sectionKey]: val }));
    };

    const handlePrint = () => {
        window.print();
    };

    const handleExport = () => {
        const data = { version: '3.0', date: new Date().toISOString(), profile, responses, notes, sectionNotes };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `screening_${profile?.name?.replace(/\s+/g, '_') || 'backup'}_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        setToast('Exported!');
    };

    const handleImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                if (confirm('This will replace your current data. Continue?')) {
                    if (data.profile) setProfile(data.profile);
                    if (data.responses) setResponses(data.responses);
                    if (data.notes) setNotes(data.notes);
                    if (data.sectionNotes) setSectionNotes(data.sectionNotes);
                    setToast('Imported!');
                }
            } catch { setToast('Invalid file'); }
        };
        reader.readAsText(file);
        e.target.value = null;
    };

    const handleReset = () => {
        if (confirm('Delete all data? This cannot be undone.')) {
            localStorage.clear();
            window.location.reload();
        }
    };

    const currentTest = TEST_CONFIG.find(t => t.id === activeTest);

    // ================ RENDER ================

    // Show onboarding if no profile
    if (!profile) {
        return <OnboardingModal onComplete={handleOnboardingComplete} />;
    }

    // Show home screen (test cards)
    if (!activeTest) {
        return (
            <div className="min-h-screen bg-parchment p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-black text-wood mb-1">Neurodivergence Screening</h1>
                            <button 
                                onClick={() => setShowProfileEdit(true)}
                                className="text-ash hover:text-forest transition-colors flex items-center gap-2"
                            >
                                {profile.name} • {calculateAge(profile.dob)}y • {profile.gender}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <label className="bg-sage text-white px-3 py-2 rounded-lg text-xs font-bold cursor-pointer hover:bg-forest transition-all">
                                Import
                                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                            </label>
                            <button onClick={handleExport} className="bg-sage text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-forest transition-all">
                                Export
                            </button>
                            <button onClick={handleReset} className="bg-paper text-red-600 px-3 py-2 rounded-lg text-xs font-semibold border border-red-200 hover:bg-red-50 transition-all">
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Overall Progress */}
                    <div className="bg-paper rounded-2xl p-6 mb-8 border border-sage/30">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-bold text-wood">Overall Progress</span>
                            <span className="text-2xl font-black text-forest">{overallProgress}%</span>
                        </div>
                        <div className="h-3 bg-parchment rounded-full overflow-hidden">
                            <div className="h-full bg-forest rounded-full transition-all duration-500" style={{ width: `${overallProgress}%` }} />
                        </div>
                        <p className="text-xs text-ash mt-2">
                            {TEST_CONFIG.filter(t => calculateProgress(t.id) === 100).length} of {TEST_CONFIG.length} tests complete
                        </p>
                    </div>

                    {/* Test Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {TEST_CONFIG.map(test => (
                            <TestCard
                                key={test.id}
                                test={test}
                                progress={calculateProgress(test.id)}
                                onClick={() => setActiveTest(test.id)}
                            />
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <p className="text-center text-ash/60 text-xs mt-8">
                        This is a self-assessment tool and does not constitute a diagnosis.
                    </p>
                </div>

                {/* Profile Edit Modal */}
                {showProfileEdit && (
                    <div className="fixed inset-0 bg-wood/80 flex items-center justify-center p-4 z-50">
                        <div className="bg-paper rounded-2xl w-full max-w-md p-6">
                            <h2 className="text-xl font-bold text-wood mb-4">Edit Profile</h2>
                            <div className="space-y-4">
                                <input type="text" value={profile.name} onChange={(e) => setProfile(p => ({ ...p, name: e.target.value }))}
                                    className="w-full p-3 rounded-xl border-2 border-sage/30 focus:border-forest focus:outline-none" placeholder="Name" />
                                <input type="date" value={profile.dob} onChange={(e) => setProfile(p => ({ ...p, dob: e.target.value }))}
                                    className="w-full p-3 rounded-xl border-2 border-sage/30 focus:border-forest focus:outline-none" />
                                <select value={profile.gender} onChange={(e) => setProfile(p => ({ ...p, gender: e.target.value }))}
                                    className="w-full p-3 rounded-xl border-2 border-sage/30 focus:border-forest focus:outline-none bg-white">
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Non-Binary">Non-Binary</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                            <div className="flex gap-3 mt-6">
                                <button onClick={() => setShowProfileEdit(false)} className="flex-1 py-3 rounded-xl border border-sage/30 font-semibold">Cancel</button>
                                <button onClick={() => setShowProfileEdit(false)} className="flex-1 py-3 rounded-xl bg-forest text-white font-semibold">Save</button>
                            </div>
                        </div>
                    </div>
                )}

                {toast && <Toast message={toast} onClose={() => setToast(null)} />}
            </div>
        );
    }

    // Show test view
    return (
        <div className="min-h-screen bg-parchment p-4 md:p-8 print:p-4 print:bg-white">
            <div className="max-w-4xl mx-auto print:max-w-none">
                {/* Print Header */}
                <div className="hidden print:block mb-6 pb-4 border-b-2 border-forest">
                    <h1 className="text-2xl font-black text-wood">{currentTest.title} - Screening Report</h1>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-ash">
                        <span><strong>Patient:</strong> {profile.name}</span>
                        <span><strong>DOB:</strong> {new Date(profile.dob).toLocaleDateString()}</span>
                        <span><strong>Age:</strong> {calculateAge(profile.dob)}</span>
                        <span><strong>Gender:</strong> {profile.gender}</span>
                        <span><strong>Date:</strong> {new Date().toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Screen Header */}
                <div className="flex items-center justify-between mb-6 no-print">
                    <button onClick={() => setActiveTest(null)} className="flex items-center gap-2 text-ash hover:text-forest transition-colors font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Tests
                    </button>
                    <button onClick={handlePrint} className="bg-forest text-white px-5 py-2 rounded-lg font-bold hover:bg-[#3A5A25] transition-all flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        Print This Test
                    </button>
                </div>

                {/* Test Info */}
                <div className="bg-paper border-l-4 border-forest p-5 rounded-r-xl mb-6 print:border-l-2 print:p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-wood">{currentTest.title}</h2>
                            <p className="text-sm text-ash italic">{currentTest.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => setShowTestInfo(true)}
                                className="p-2.5 rounded-full bg-sage/10 hover:bg-sage/20 text-forest transition-colors no-print"
                                title="About this test"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <ProgressRing progress={calculateProgress(activeTest)} size={56} strokeWidth={4} />
                        </div>
                    </div>
                </div>

                {/* Scale Legend */}
                <div className="bg-paper p-4 rounded-xl mb-6 border border-sage/30 print:bg-parchment/50">
                    <p className="text-xs font-bold text-wood mb-2">Response Scale:</p>
                    <div className="flex flex-wrap gap-3">
                        {currentTest.scale.map((label, idx) => (
                            <span key={idx} className="text-xs text-ash bg-parchment px-2 py-1 rounded">{idx}: {label}</span>
                        ))}
                    </div>
                </div>

                {/* Expand/Collapse All Buttons */}
                <div className="flex gap-2 mb-4 no-print">
                    <button
                        onClick={() => {
                            const newState = {};
                            groupedQuestions.forEach(s => newState[s.key] = true);
                            setExpandedSections(prev => ({ ...prev, [activeTest]: newState }));
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-paper border border-sage/30 rounded-lg text-xs font-semibold text-ash hover:bg-forest/10 hover:text-forest transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        Expand All
                    </button>
                    <button
                        onClick={() => {
                            const newState = {};
                            groupedQuestions.forEach(s => newState[s.key] = false);
                            setExpandedSections(prev => ({ ...prev, [activeTest]: newState }));
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-paper border border-sage/30 rounded-lg text-xs font-semibold text-ash hover:bg-forest/10 hover:text-forest transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        Collapse All
                    </button>
                </div>

                {/* Sections */}
                <div className="space-y-4 print:space-y-3">
                    {groupedQuestions.map((section, idx) => (
                        <Section
                            key={idx}
                            section={section}
                            scale={currentTest.scale}
                            responses={responses[activeTest] || {}}
                            notes={notes}
                            sectionNote={sectionNotes[section.key]}
                            onUpdate={handleUpdate}
                            onNoteUpdate={handleNoteUpdate}
                            onClear={handleClear}
                            onSectionNoteUpdate={handleSectionNoteUpdate}
                            isOpen={expandedSections[activeTest]?.[section.key] !== false}
                            onToggle={() => setExpandedSections(prev => ({
                                ...prev,
                                [activeTest]: {
                                    ...prev[activeTest],
                                    [section.key]: !(prev[activeTest]?.[section.key] !== false)
                                }
                            }))}
                        />
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-ash/60 text-xs print:mt-6 print:border-t print:pt-4">
                    <p>This is a self-assessment tool and does not constitute a diagnosis.</p>
                    <p className="mt-1">Please consult a qualified healthcare professional for proper evaluation.</p>
                </footer>
            </div>

            {showTestInfo && <TestInfoModal testId={activeTest} onClose={() => setShowTestInfo(false)} />}
            {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </div>
    );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
