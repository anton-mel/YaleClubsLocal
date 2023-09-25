
export const PageButton = ({ onClick, label }) => (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300"
    >
      {label}
    </button>
);