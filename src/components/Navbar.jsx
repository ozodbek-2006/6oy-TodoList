import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            TODOS
          </Link>
          <Link to="/create" className="btn btn-primary">
            Create New
          </Link>
        </div>
      </div>
    </nav>
  );
}
