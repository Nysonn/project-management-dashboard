import Button from "./Button";

export default function Sidebar({ onAddProject, projects, onSelectProject }) {
  return (
    <div className="h-96 bg-gradient-to-b from-gray-200 to-gray-100 text-gray-700 font-Roboto shadow-lg flex flex-col justify-start rounded w-60 p-4 font-bold mt-10 ml-10">
      <ul className="space-y-4">
        <li className="text-center text-xl font-bold">Projects</li>
        <li>
          <Button onClick={onAddProject}>Add Project</Button>
        </li>
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-2 rounded cursor-pointer transition text-center hover:bg-gray-300"
            onClick={() => onSelectProject(project)}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
