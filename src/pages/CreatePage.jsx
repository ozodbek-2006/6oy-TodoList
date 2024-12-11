import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const todos = JSON.parse(localStorage.getItem("todos") || "[]");
      const newTodo = { id: Date.now(), title, description };
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      navigate("/todos");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Add New Todo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-shadow outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of todo"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-shadow outline-none h-32 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
