import React from 'react';// Adjust the path as necessary
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar';

const AdminPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-[#f3f2f7]">
          {/* Your main content goes here */}
          <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
          {/* Add more components or content as needed */}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
