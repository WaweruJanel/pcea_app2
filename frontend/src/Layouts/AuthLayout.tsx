import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 p-6 text-white bg-blue-600">
        <h2 className="mb-8 text-2xl font-bold">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/members" className="text-white hover:text-gray-200">Members</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/events" className="text-white hover:text-gray-200">Events</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/prayers" className="text-white hover:text-gray-200">Prayer Requests</Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/notifications" className="text-white hover:text-gray-200">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="text-xl font-bold text-gray-800">Welcome to the Dashboard</div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/notifications" className="text-gray-800 hover:text-blue-500">Notifications</Link>
            <Link to="/dashboard/profile" className="text-gray-800 hover:text-blue-500">Profile</Link>
            <Link to="/" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Logout</Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
