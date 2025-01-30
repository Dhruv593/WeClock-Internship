// src/components/layout/MainLayout.jsx
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[250px_1fr]">
      
      <Header className="col-span-2 h-16 bg-blue-600 text-white p-4 shadow-lg" />

      <Sidebar className="row-span-2 bg-indigo-800 shadow-lg p-4" />

      <main className="p-8 bg-gray-50 overflow-auto">{children}</main>

      <Footer className="col-start-2 bg-gray-800 text-white p-4 shadow-lg" />
    </div>
  );
}
