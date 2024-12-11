import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
