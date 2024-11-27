import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CourseCard from './components/CourseCard/CourseCard.jsx';

function App() {
  const courses = [
    {
      title: "Advanced Web Development",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      students: 1234,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      progress: 65
    },
    // Additional course objects...
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>
          <h1>Welcome back, Avinash!</h1>
          <div className="course-list">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
