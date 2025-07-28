import React, { useState, useEffect } from 'react';
import './App.css';

// SVG ICON COMPONENTS
function UserAvatarIcon({ size = 40 }) {
  // Modern, professional-looking colored user icon SVG
  // Uses a gradient background and softer face shape for a more memorable, lively avatar
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className="avatar-svg"
      style={{ display: "block" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="User Avatar"
    >
      <defs>
        <radialGradient id="avatar-bg-grad" cx="50%" cy="50%" r="70%" fx="50%" fy="40%">
          <stop offset="0%" stopColor="#e3f0fc" />
          <stop offset="100%" stopColor="#cbe7fa" />
        </radialGradient>
        <linearGradient id="avatar-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="5%" stopColor="#1976d2" />
          <stop offset="95%" stopColor="#4592e6" />
        </linearGradient>
      </defs>
      {/* Soft round background */}
      <circle cx="20" cy="20" r="19" fill="url(#avatar-bg-grad)" stroke="url(#avatar-accent)" strokeWidth="2"/>
      {/* Face area */}
      <ellipse cx="20" cy="15.8" rx="6.8" ry="7.2" fill="#fff" stroke="#1976d2" strokeWidth="1.2"/>
      {/* Hair */}
      <path
        d="M14.5 16.5c.5-5 11-5 11 0"
        stroke="#1976d2"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.26"
      />
      {/* Smile */}
      <path
        d="M16.9 19.6c.6 1 4.6 1 5.2 0"
        stroke="#4592e6"
        strokeWidth="1.07"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eyes */}
      <ellipse cx="17.6" cy="17.2" rx="0.65" ry="0.90" fill="#1976d2" />
      <ellipse cx="22.4" cy="17.2" rx="0.65" ry="0.90" fill="#1976d2" />
      {/* Modern shadow under chin */}
      <ellipse cx="20" cy="23.8" rx="5.3" ry="2.2" fill="#e3f0fc" opacity="0.46"/>
      {/* Shoulders */}
      <path
        d="M12 32c.5-3.8 6-5.3 8-5.3s7.5 1.5 8 5.3"
        stroke="url(#avatar-accent)"
        strokeWidth="1.15"
        fill="#e9f5fe"
      />
    </svg>
  );
}

function BriefcaseIcon({ size = 18, color = "#7b8da0" }) {
  // Job role icon, outline style
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="3.5" y="7" width="13" height="8.5" rx="2" fill="none" stroke={color} strokeWidth="1.2"/>
      <rect x="7" y="4.5" width="6" height="2.5" rx="1" fill="none" stroke={color} strokeWidth="1.2"/>
      <path d="M3.5 11.5h13" stroke={color} strokeWidth="1"/>
    </svg>
  );
}

function ExperienceIcon({ size = 17, color = "#b0b9c3" }) {
  // Clock icon for years of experience
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.4" fill="none"/>
      <path d="M10 5.8v4.4l2.1 2.1" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon({ size = 18, color = "#51c185" }) {
  // Used in the primary green button
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M5 11.5l3.5 3L15 7" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function ScoreIcon({ size = 18, color = "#2d5016" }) {
  // Trophy/award icon for score display
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Mock data for this example - including score display as shown in reference image
  const assessments = [
    {
      id: 1,
      name: "Front-End Coding Skills Assessment",
      role: "Senior Software Developer",
      yearsExp: 7,
      assignee: "Alex Morgan",
      status: "New",
      date: "Jul 28, 2025",
      actionLabel: "View",
      actionScore: 150, // Score display as shown in reference image
    },
    {
      id: 2,
      name: "Backend API Development Assessment",
      role: "Senior Software Developer",
      yearsExp: 5,
      assignee: "Sarah Wilson",
      status: "In Progress",
      date: "Jul 27, 2025",
      actionLabel: "Continue",
      actionScore: null,
    }
  ];

  return (
    <div className="App">
      <header className="assessment-path-header">
        <span className="assessment-path">Assessment Dashboard</span>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <main>
        <div className="assessment-list-container">
          {assessments.map((assessment, index) => (
            <div key={assessment.id} className={`assessment-card ${index % 2 === 1 ? 'assessment-card-alt' : ''}`}>
              {/* LEFT - Avatar */}
              <div className="card-section card-section-avatar">
                <UserAvatarIcon />
              </div>
              {/* CENTER - Details */}
              <div className="card-section card-section-details">
                <div className="assessment-title">{assessment.name}</div>
                {/* Refined section: Designation and experience each on a clean single line */}
                <div className="meta-line-row">
                  <div className="single-meta meta-designation">
                    <span className="meta-icon" aria-label="Role" title="Role">
                      <BriefcaseIcon />
                    </span>
                    <span className="meta-text meta-role" title={assessment.role}>{assessment.role}</span>
                  </div>
                  <div className="single-meta meta-experience">
                    <span className="meta-icon" aria-label="Experience" title="Years of Experience">
                      <ExperienceIcon />
                    </span>
                    <span className="meta-text meta-exp">
                      {assessment.yearsExp} yrs experience
                    </span>
                  </div>
                </div>
                <div className="assignee-row">
                  <span className="assignee-name">{assessment.assignee}</span>
                </div>
                <div className="status-row">
                  <label htmlFor={`status-dropdown-${assessment.id}`} hidden>Status</label>
                  <select className="status-dropdown" id={`status-dropdown-${assessment.id}`} value={assessment.status} readOnly>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              {/* RIGHT - Date & Action */}
              <div className="card-section card-section-meta">
                <div className="date-label">{assessment.date}</div>
                <button className={`primary-action-btn ${assessment.actionScore ? 'score-highlight' : ''}`} type="button">
                  {assessment.actionScore ? (
                    <>
                      <ScoreIcon color={assessment.actionScore ? "#2d5016" : "#51c185"} /> 
                      <span>Score {assessment.actionScore}</span>
                    </>
                  ) : (
                    <>
                      <CheckIcon /> <span>{assessment.actionLabel}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
