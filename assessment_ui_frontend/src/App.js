import React, { useState, useEffect } from 'react';
import './App.css';

// SVG ICON COMPONENTS
function UserAvatarIcon({ size = 32 }) {
  // PUBLIC_INTERFACE
  // Enhanced: Sharper, circular, blue-accented modern avatar
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className="avatar-svg"
      style={{ display: "block" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="User Avatar"
    >
      <circle cx="16" cy="16" r="15" fill="#eaf4fd" stroke="#33b0ff" strokeWidth="2"/>
      <path d="M20.5 11.8c-.7-1.7-2.2-2.9-3.7-2.9-1.7 0-3.4 1.4-3.7 3.5-.36 2.24.95 4.9 2 6.36 1.47 2.08 5.5 1.36 6.5-2.56.35-1.28-.03-2.6-.96-4.4Z" fill="#fff" stroke="#33b0ff" strokeWidth="0.9"/>
      <ellipse cx="14.7" cy="13.8" rx="0.51" ry="0.78" fill="#b8bbc1"/>
      <ellipse cx="17.75" cy="13.5" rx="0.36" ry="0.45" fill="#33b0ff"/>
      <path d="M17.5 15.7c.16.33.7.38.98.01" stroke="#37c978" strokeWidth="0.7" strokeLinecap="round"/>
      <ellipse cx="16.0" cy="18.8" rx="3.65" ry="1.1" fill="#eaf4fd" opacity="0.45" />
    </svg>
  );
}

function BriefcaseIcon({ size = 15, color = "#78849e" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="3.5" y="7" width="13" height="8.5" rx="2" fill="none" stroke={color} strokeWidth="1.1"/>
      <rect x="7" y="4.5" width="6" height="2.5" rx="1" fill="none" stroke={color} strokeWidth="1"/>
      <path d="M3.5 11.5h13" stroke={color} strokeWidth="1"/>
    </svg>
  );
}

function ExperienceIcon({ size = 14, color = "#b8bbc1" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.1" fill="none"/>
      <path d="M10 5.7v4l1.7 1.7" stroke={color} strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon({ size = 16, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M5.1 11.3l3 2.4 6.2-6.2" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function ScoreIcon({ size = 17, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z"
        stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// New controls/icons for header (search, filter, toggle switch)
function SearchIcon({ size = 17, color = "#78849e" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.4"/>
      <path d="M14.2 14.2L18 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function ChevronDownIcon({ size = 18, color = "#33b0ff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M6 8l4 4 4-4" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
function Switch({ value, onClick }) {
  // Tiny switch for "Active", purely UI for demo
  return (
    <span className={`switch ${value ? "switch-on" : ""}`} onClick={onClick} role="checkbox" aria-checked={value}>
      <span className="switch-thumb" />
    </span>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [active, setActive] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sample options and items (would come from props/api)
  const assessments = [
    {
      id: 1,
      name: "Senior NodeJS + ReactJS",
      role: "Senior Application Support Engineer",
      yearsExp: 20,
      assignee: "priyamhud11",
      status: "Score",
      date: "Jul 28, 2025",
      badge: "Score",
      badgeColor: "#37c978"
    },
    {
      id: 2,
      name: "Frontend Developer (React)",
      role: "Senior Software Developer",
      yearsExp: 7,
      assignee: "Alex Morgan",
      status: "View",
      date: "Jul 27, 2025",
      badge: "View",
      badgeColor: "#37c978"
    },
    {
      id: 3,
      name: "Data Platform Engineer",
      role: "Data Analyst",
      yearsExp: 12,
      assignee: "Sarah Wilson",
      status: "Send Mail",
      date: "Jul 26, 2025",
      badge: "Send Mail",
      badgeColor: "#fca66f"
    },
    {
      id: 4,
      name: "Backend API Assessment",
      role: "Senior Software Developer",
      yearsExp: 6,
      assignee: "Michael Tan",
      status: "Evaluating",
      date: "Jul 24, 2025",
      badge: "Evaluating",
      badgeColor: "#33b0ff"
    }
  ];

  const roles = ['All', 'Data Analyst', 'Senior Software Developer'];

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => t === "light" ? "dark" : "light");
  const handleSwitch = () => setActive((a) => !a);

  return (
    <div className="App">
      {/* Modern header with filters, search, toggle */}
      <div className="topbar">
        <div className="search-section">
          <span className="search-icon"><SearchIcon /></span>
          <input
            className="search-input"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search Candidate"
            aria-label="Search Candidate"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div className="filter-section">
          <span className="filter-label">Role</span>
          <div className="filter-dropdown">
            <select
              className="role-select"
              value={roleFilter}
              onChange={e => setRoleFilter(e.target.value)}
              aria-label="Role filter"
            >
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <span className="filter-chevron"><ChevronDownIcon /></span>
          </div>
        </div>
        <div className="toggle-section">
          <label className="toggle-label">Active</label>
          <Switch value={active} onClick={handleSwitch} />
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <main>
        <div className="assessment-list-container-redesign">
          {assessments
            .filter(
              ass =>
                (roleFilter === "All" || ass.role === roleFilter) &&
                (!search ||
                  ass.name.toLowerCase().includes(search.toLowerCase()) ||
                  ass.assignee.toLowerCase().includes(search.toLowerCase()))
            )
            .map((ass, idx) => (
              <div
                key={ass.id}
                className={`assessment-card-redesign${idx % 2 === 1 ? " assessment-card-alt-redesign" : ""}`}
                tabIndex={0}
              >
                {/* Avatar/Side */}
                <div className="card-avatar-redesign">
                  <UserAvatarIcon />
                </div>
                {/* Main Info */}
                <div className="card-info-redesign">
                  <div className="title-row">
                    <span className="card-title">{ass.name}</span>
                  </div>
                  <div className="subtitle-row">
                    <span className="subtitle-meta">
                      <BriefcaseIcon />
                      <span className="subtitle-txt">{ass.role}</span>
                    </span>
                    <span className="subtitle-meta">
                      <ExperienceIcon />
                      <span className="subtitle-txt">{ass.yearsExp} yrs exp</span>
                    </span>
                  </div>
                  <div className="assignee-line">
                    <span className="assignee-name">{ass.assignee}</span>
                  </div>
                </div>
                {/* Date + Action */}
                <div className="card-meta-redesign">
                  <span className="meta-date">{ass.date}</span>
                  <button
                    className={`status-btn status-${ass.status.replace(/ /g, "-").toLowerCase()}`}
                    style={{ backgroundColor: ass.badgeColor }}
                  >
                    {/* Icons: Score/View = trophy/check, Send Mail = none, Evaluating = none */}
                    {ass.status === "Score" ? <ScoreIcon color="#fff" /> : ass.status === "View" ? <CheckIcon /> : <></>}
                    <span className="btn-txt">{ass.badge}</span>
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
