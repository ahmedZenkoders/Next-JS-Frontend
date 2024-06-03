import React from 'react';
import { Button } from './ui/button';
import CourseCard from './courseCard';

interface Course {
  id: string;
  title: string;
  description: string;
}

interface ManageCoursesProps {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

const ManageCourses: React.FC<ManageCoursesProps> = ({ courses, setCourses }) => {
  const handleDelete = (courseId: string) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  return (
    <div className="manage-courses mt-12">
      <h2 className="text-3xl font-semibold mb-6">Manage Courses</h2>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="relative">
              <CourseCard course={course} enrolled={false} />
              <Button onClick={() => handleDelete(course.id)} className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No courses to manage.</p>
      )}
    </div>
  );
};

export default ManageCourses;
