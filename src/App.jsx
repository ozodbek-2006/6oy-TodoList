import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import TodosPage from "./pages/TodosPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </Router>
  );
}
