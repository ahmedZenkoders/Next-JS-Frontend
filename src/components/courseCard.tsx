

import React from 'react';
import { Button } from './ui/button';

interface Course {
  id: string;
  title: string;
  description: string;
}

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
  onUnenroll?: (courseId: string) => void;
  enrolled: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onUnenroll, enrolled }) => {
  return (
    <div className="course-card">
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
      <div className="course-actions">
        {enrolled ? (
          <Button onClick={() => onUnenroll && onUnenroll(course.id)} className="unenroll-button">
            Unenroll
          </Button>
        ) : (
          <Button onClick={() => onEnroll && onEnroll(course.id)} className="enroll-button">
            Enroll
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
