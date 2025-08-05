import React from 'react';
import './UserProfile.css';
function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto,my-20 rounded-1g shadow-lg" user-profile>
      <img class="rounded-full w-36 h-36 mx-auto"src="https://via.placeholder.com/150" alt="User" />
      <h1 class="text-x1 text-blue-800 my-4">John Doe</h1>
      <p clss="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
