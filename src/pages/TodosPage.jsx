import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/Header";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (editTitle.trim()) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodo.id
          ? { ...todo, title: editTitle, description: editDescription }
          : todo
      );
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">
            Hali todos yo'q. Boshlash uchun yarating!{" "}
          </p>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-gray-800 text-white rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-medium">{todo.title}</h3>
                  <p className="text-gray-400 mt-1">
                    {todo.description || "No description"}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-red-400 hover:text-red-300 transition-colors p-1"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Todo</h2>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description:
                </label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent h-32 resize-none"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
