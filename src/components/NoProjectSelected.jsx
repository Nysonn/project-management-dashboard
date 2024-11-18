import noProjectImg from "../assets/empty-project.jpg";

export default function NoProjectSelected({ onCreateProject}) {
  return (
    <div className="text-center bg-gradient-to-b from-gray-200 to-gray-100 p-6 rounded shadow-lg mx-6 my-10 w-2/3 h-96">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-24 h-24 object-contain mx-auto"
      />
      <h2 className="text-2xl font-extrabold text-gray-700 mt-6">
        No Project Selected
      </h2>
      <p className="text-gray-500 mt-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button onClick={onCreateProject} className="p-2 px-4 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded shadow-md hover:from-gray-500 hover:to-gray-700 font-semibold transition">
          Create A New Project
        </button>
      </p>
    </div>
  );
}
