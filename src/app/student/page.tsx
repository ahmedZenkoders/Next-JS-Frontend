"use client"
import React, { useEffect, useState } from 'react';
import EnrolledCourses from '@/components/enrolledCourses';
import AvailableCourses from '@/components/availableCourses';
import axios from 'axios';

interface Course {
  id: string;
  title: string;
  description: string;
}

const StudentDashboard: React.FC = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const enrolledResponse = await axios.get<Course[]>('/api/student/enrolledCourses');
        setEnrolledCourses(enrolledResponse.data);
        const availableResponse = await axios.get<Course[]>('/api/student/availableCourses');
        setAvailableCourses(availableResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEnroll = (courseId: string) => {
    console.log('Enrolling in course:', courseId);
  };

  const handleUnenroll = (courseId: string) => {
    console.log('Unenrolling from course:', courseId);
  };

  return (
    <div className="student-dashboard container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-12">Student Dashboard</h1>
      <EnrolledCourses courses={enrolledCourses} onUnenroll={handleUnenroll} />
      <AvailableCourses courses={availableCourses} onEnroll={handleEnroll} />
    </div>
  );
};

export default StudentDashboard;
