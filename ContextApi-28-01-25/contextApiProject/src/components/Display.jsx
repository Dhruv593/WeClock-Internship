// Display.js
import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Display() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-50 text-center rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold text-red-600">No User Found</h1>
      </div>
    );
  } else {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">User Details</h2>
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-green-800">
            Name: <span className="font-normal text-green-600">{user.name}</span>
          </h3>
          <h3 className="text-lg font-medium text-green-800">
            Email: <span className="font-normal text-green-600">{user.email}</span>
          </h3>
          <h3 className="text-lg font-medium text-green-800">
            Password: <span className="font-normal text-green-600">{user.password}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Display;
