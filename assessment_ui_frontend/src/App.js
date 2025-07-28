import React, { useState, useEffect } from 'react';
import './App.css';

// SVG ICON COMPONENTS
function UserAvatarIcon({ size = 40 }) {
  // PUBLIC_INTERFACE
  /**
   * A clearly modern, visually distinctive, side-facing SVG avatar icon
   * - Blue main accent
   * - Profile illustration (side view, not a frontal user)
   * - Flat look with bold separation from background
   * - Matches modern dashboard UIs
   */
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
      {/* Large blue background, bolder outline */}
      <circle cx="20" cy="20" r="19" fill="#e3f0fc" stroke="#1976d2" strokeWidth="2.4"/>
      {/* Profile face silhouette - side view */}
      <path
        d="M24.5 14.2c-.9-2.2-2.7-3.6-4.7-3.6-2.2 0-4.3 1.7-4.7 4.3-.5 2.9 1.2 6.1 2.5 7.9 1.8 2.6 6.9 1.7 8.1-3.2.43-1.6.01-3.2-.92-5.4Z"
        fill="#fff"
        stroke="#4592e6"
        strokeWidth="1.05"
      />
      {/* Side profile features: ear */}
      <ellipse cx="18.3" cy="17.9" rx="0.62" ry="1" fill="#b0b9c3" />
      {/* Side profile features: nose */}
      <path
        d="M20.9 16.5c.13.6.11 1-.22 1.11"
        stroke="#7b8da0"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      {/* Eye (side, not two dots) */}
      <ellipse cx="22.15" cy="16.6" rx="0.45" ry="0.57" fill="#1976d2" />
      {/* Mouth/smile - side profile */}
      <path
        d="M21.5 19.39c.2.4.9.47 1.25.01"
        stroke="#51c185"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Chin/neck shadow */}
      <ellipse cx="20.0" cy="23.2" rx="4.7" ry="1.5" fill="#dbeafe" opacity="0.5" />
      {/* Shoulders (offset, modern edge) */}
      <path
        d="M13.2 32.5c.5-3.7 5-5 8-5s7.5 1.3 8 5.3"
        fill="#eaf6fd"
        stroke="#1976d2"
        strokeWidth="1.05"
      />
      {/* Blue accent circle for modern style */}
      <circle cx="27.2" cy="11.1" r="2.7" fill="#1976d2" opacity="0.17" />
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
