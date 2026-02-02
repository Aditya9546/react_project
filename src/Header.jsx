import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Main Page Title */}
        <div className="header-title">My React App</div>
        
        {/* Navigation Box */}
        <nav className="nav-box">
          <button className="nav-btn home-btn">🏠 Home</button>
          <button className="nav-btn settings-btn">⚙️ Settings</button>
        </nav>
      </div>
    </header>
  )
}
