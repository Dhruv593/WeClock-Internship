import React from 'react';// Adjust the path as necessary
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import DashBoard from '../components/MainDashboard/DashBoard';

const AdminPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1">
        <Navbar />
        <main className="px-11 bg-[#f3f2f7]">
          {/* Your main content goes here */}
          <DashBoard/>
          {/* Add more components or content as needed */}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
