import React, { useState } from 'react';
import AvailableCourses from '@/components/availableCourses';
import AddCourseModal from '@/components/addCourseModal';
import EnrolledCourses from '@/components/enrolledCourses';
import ManageCourses from '@/components/manageCouses';
import { Button } from '../../components/ui/button';

interface Course {
  id: string;
  title: string;
  description: string;
}

const TeacherDashboard: React.FC = () => {
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);

  const handleEnroll = (courseId: string) => {
    console.log(`Enrolled in course ${courseId}`);
  };

  const handleUnenroll = (courseId: string) => {
    console.log(`Unenrolled from course ${courseId}`);
  };

  const handleAddCourse = (newCourse: Course) => {
    setAvailableCourses([...availableCourses, newCourse]);
  };

  return (
    <div className="teacher-dashboard container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Teacher Dashboard</h1>

      <div className="mb-8">
        <Button onClick={() => setIsAddCourseModalOpen(true)} className="mb-4">
          Add New Course
        </Button>
        <AddCourseModal
          isOpen={isAddCourseModalOpen}
          onClose={() => setIsAddCourseModalOpen(false)}
          onAddCourse={handleAddCourse}
        />
      </div>

      <AvailableCourses courses={availableCourses} onEnroll={handleEnroll} />

      <EnrolledCourses courses={enrolledCourses} onUnenroll={handleUnenroll} />

      <ManageCourses courses={availableCourses} setCourses={setAvailableCourses} />
    </div>
  );
};

export default TeacherDashboard;
