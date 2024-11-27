import React from 'react';
import { BookOpen, Compass, GraduationCap, LayoutDashboard, MessageSquare, Star } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <div className="sidebar-links">
            <a href="#" className="sidebar-link active">
              <LayoutDashboard className="icon" />
              Dashboard
            </a>
            <a href="#" className="sidebar-link">
              <Compass className="icon" />
              Browse Courses
            </a>
            <a href="#" className="sidebar-link">
              <BookOpen className="icon" />
              My Courses
            </a>
            <a href="#" className="sidebar-link">
              <GraduationCap className="icon" />
              Achievements
            </a>
            <a href="#" className="sidebar-link">
              <MessageSquare className="icon" />
              Messages
            </a>
            <a href="#" className="sidebar-link">
              <Star className="icon" />
              Favorites
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
