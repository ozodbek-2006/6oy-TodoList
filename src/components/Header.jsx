import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-100 py-4 px-6 flex justify-between items-center">
      <Link
        to="/todos"
        className="text-2xl font-bold bg-fuchsia-500 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-600 transition-colors"
      >
        TODOS
      </Link>
      <Link
        to="/"
        className="text-fuchsia-500 hover:text-fuchsia-600 transition-colors"
      >
        Create
      </Link>
    </div>
  );
}
