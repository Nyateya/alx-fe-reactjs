import React from 'react';


function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm-[400px] mx-auto,my-20 rounded-1g shadow 1g sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm hover:shadow-xl">
      <img
        className="rounded-full w-36[150px] h-36[150px] mx-auto sm:w-24  md:w-36 h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-x1 text-blue-800 my-4 sm:text-1g md:text-x1 hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
