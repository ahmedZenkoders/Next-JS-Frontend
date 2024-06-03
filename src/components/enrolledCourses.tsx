

import React from 'react';
import CourseCard from './courseCard';

interface Course {
  id: string;
  title: string;
  description: string;
}

const EnrolledCourses: React.FC<{
  courses: Course[];
  onUnenroll: (courseId: string) => void;
}> = ({ courses, onUnenroll }) => {
  return (
    <div className="enrolled-courses mb-12">
      <h2 className="text-3xl font-semibold mb-6">Enrolled Courses</h2>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} onUnenroll={onUnenroll} enrolled={true} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="text-gray-500 text-center mb-4">You are not enrolled in any courses.</p>
          <img src="/empty-enrolled-courses.svg" alt="Empty Enrolled Courses" className="mx-auto w-64" />
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
