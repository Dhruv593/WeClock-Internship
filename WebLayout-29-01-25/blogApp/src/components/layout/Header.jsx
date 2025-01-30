import { Link } from "react-router-dom";

// src/components/layout/Header.jsx
export default function Header({ className }) {
  return (
    <header className={`${className} transition-all m-3 rounded-lg shadow-lg bg-blue-600 text-white p-4`}>
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="text-2xl font-bold">BlogSphere</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
