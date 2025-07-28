import React, { useState, useEffect } from 'react';
import './App.css';

// SVG ICON COMPONENTS
function UserAvatarIcon({ size = 40 }) {
  // Simple blue outline avatar icon as SVG
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className="avatar-svg"
      style={{ display: 'block' }}
    >
      <circle cx="20" cy="20" r="18" stroke="#1976d2" strokeWidth="2.5" fill="white" />
      <ellipse cx="20" cy="16" rx="6" ry="6.5" stroke="#1976d2" strokeWidth="1.5" fill="#ecf7fa" />
      <path
        d="M10 32c0-4.4 4.48-8 10-8s10 3.6 10 8"
        stroke="#1976d2"
        strokeWidth="1.5"
        fill="none"
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

  // Mock data for this example
  const assessment = {
    name: "Front-End Coding Skills Assessment",
    role: "Senior Software Developer",
    yearsExp: 7,
    assignee: "Alex Morgan",
    status: "New",
    date: "Jul 28, 2025",
    actionLabel: "View",
    actionScore: null, // use e.g. 150 for a score display
  };

  return (
    <div className="App">
      <header className="assessment-path-header">
        <span className="assessment-path">{assessment.name}</span>
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
          {/* Only one card per brief; design supports list for scale */}
          <div className="assessment-card assessment-card-alt">
            {/* LEFT - Avatar */}
            <div className="card-section card-section-avatar">
              <UserAvatarIcon />
            </div>
            {/* CENTER - Details */}
            <div className="card-section card-section-details">
              <div className="assessment-title">{assessment.name}</div>
              <div className="designation-row">
                <span className="designation-icon" title="Role"><BriefcaseIcon /></span>
                <span className="designation-text">{assessment.role}</span>
                <span className="exp-sep" />
                <span className="exp-icon" title="Years of Experience"><ExperienceIcon /></span>
                <span className="exp-text">{assessment.yearsExp} yrs exp</span>
              </div>
              <div className="assignee-row">
                <span className="assignee-name">{assessment.assignee}</span>
              </div>
              <div className="status-row">
                <label htmlFor="status-dropdown" hidden>Status</label>
                <select className="status-dropdown" id="status-dropdown" value={assessment.status} readOnly>
                  <option value="New">New</option>
                  {/* Add more status as needed */}
                </select>
              </div>
            </div>
            {/* RIGHT - Date & Action */}
            <div className="card-section card-section-meta">
              <div className="date-label">{assessment.date}</div>
              <button className="primary-action-btn" type="button">
                {assessment.actionScore ? (
                  <>
                    <CheckIcon /> <span>Score {assessment.actionScore}</span>
                  </>
                ) : (
                  <>
                    <CheckIcon /> <span>{assessment.actionLabel}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
