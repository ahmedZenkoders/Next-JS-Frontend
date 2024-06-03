import React, { useState } from 'react';
import Modal from './ui/modal';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCourse: (course: { id: string; title: string; description: string }) => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({ isOpen, onClose, onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newCourse = { id: Date.now().toString(), title, description };
    onAddCourse(newCourse);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Course">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Course Title
        </label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Course Description
        </label>
        <Input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Course
        </Button>
        <Button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default AddCourseModal;
