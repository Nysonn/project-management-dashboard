export default function ProjectDetails({ project, onDelete }) {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-gray-700 font-Roboto shadow-lg rounded flex-1 p-6 mt-10 mx-20 my-20 ml-10">
    <h2 className="text-2xl font-bold text-gray-700 mb-6">{project.title}</h2>
    <p className="text-gray-600 mb-4">
      <strong>Description:</strong> {project.description}
    </p>
    <p className="text-gray-600">
      <strong>Due Date:</strong> {project.dueDate}
    </p>

     {/* Delete Button */}
     <button
        onClick={() => onDelete(project)}
        className="px-3 py-3 mt-24 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded shadow-md hover:from-gray-600 hover:to-gray-800 font-semibold transition"
      >
        Delete Project
      </button>
  </div>
  );
}