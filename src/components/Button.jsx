export default function Button({children,...props}) {
  return (
    <button className="w-full p-2 mt-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700 transition font-semibold shadow-md" {...props}>
    {children}
  </button>
  );
}