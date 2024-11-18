import { useState } from 'react';

export default function NewProjectForm({ onSave, onCancel}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  //Handle the save button
  function handleSave() {
    if (title && description && dueDate) {
      const newProject = { title, description, dueDate };
      onSave(newProject); // Call onSave with project data
    } else {
      setShowModal(true);//show the modal when fields are incomplete
    }
  }

  //Function to show the modal
  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-gray-700 font-Roboto shadow-lg rounded flex-1 p-6 mt-10 mx-20 my-20 ml-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Create New Project</h2>

      {/* Title Field */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-600 font-semibold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full p-3 bg-white border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter project title"
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
        />
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600 font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          className="w-full p-3 bg-white border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Due Date Field */}
      <div className="mb-6">
        <label htmlFor="dueDate" className="block text-gray-600 font-semibold mb-2">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          className="w-full p-3 bg-white border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="w-40 p-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700 transition font-semibold shadow-md"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="w-40 p-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700 transition font-semibold shadow-md"
        >
          Save
        </button>
      </div>

       {/* Modal */}
       {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gradient-to-b from-gray-200 to-gray-100 p-8 rounded-lg shadow-xl text-center w-1/3">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Incomplete Fields</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Please fill out all fields before saving.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded shadow-md hover:from-gray-600 hover:to-gray-800 font-semibold transition"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
