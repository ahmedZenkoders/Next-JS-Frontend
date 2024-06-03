import React from 'react';
import CourseCard from './courseCard';

interface Course {
  id: string;
  title: string;
  description: string;
}

const AvailableCourses: React.FC<{
  courses: Course[];
  onEnroll: (courseId: string) => void;
}> = ({ courses, onEnroll }) => {
  return (
    <div className="available-courses mb-12">
      <h2 className="text-3xl font-semibold mb-6">Available Courses</h2>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} onEnroll={onEnroll} enrolled={false} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="text-gray-500 text-center mb-4">No courses available for enrollment.</p>
          <img src="/empty-available-courses.svg" alt="Empty Available Courses" className="mx-auto w-64" />
        </div>
      )}
    </div>
  );
};

export default AvailableCourses;
