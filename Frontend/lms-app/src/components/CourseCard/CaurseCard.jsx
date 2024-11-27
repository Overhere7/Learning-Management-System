import React from 'react';
import { Clock, Users } from 'lucide-react';
import './CourseCard.css'; // Import the CSS file

const CourseCard = ({ title, instructor, duration, students, image, progress }) => {
  return (
    <div className="card-Container">
    <div className="course-card">
      <div className="course-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__instructor">by {instructor}</p>

        <div className="course-card__meta">
          <div className="meta-item">
            <Clock className="meta-icon" />
            {duration}
          </div>
          <div className="meta-item">
            <Users className="meta-icon" />
            {students} students
          </div>
        </div>

        {progress !== undefined && (
          <div className="course-card__progress">
            <div className="progress-info">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar__filled"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="course-card">
      <div className="course-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__instructor">by {instructor}</p>

        <div className="course-card__meta">
          <div className="meta-item">
            <Clock className="meta-icon" />
            {duration}
          </div>
          <div className="meta-item">
            <Users className="meta-icon" />
            {students} students
          </div>
        </div>

        {progress !== undefined && (
          <div className="course-card__progress">
            <div className="progress-info">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar__filled"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CourseCard;
