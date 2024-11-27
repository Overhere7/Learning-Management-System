import React from 'react';
import { Bell, BookOpen, Search, Settings, User } from 'lucide-react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex-row">
          <div className="brand">
            <BookOpen className="icon" />
            <span className="brand-name">PolarisLMS</span>
          </div>
          <div className="nav-links">
            <a href="#" className="link">Calendar</a>
          </div>
        </div>
        <div className="search-and-icons">
          <div className="search">
            <Search className="search-icon" />
            <input type="text" placeholder="Search courses..." className="search-input" />
          </div>
          <div className="icons">
            <Bell className="icon" />
            <Settings className="icon" />
            <div className="user">
              <User className="user-icon" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
