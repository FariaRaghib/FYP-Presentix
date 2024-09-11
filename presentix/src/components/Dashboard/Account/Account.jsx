import React, { useState, useEffect } from 'react';
import Profile from '../../../assets/Images/profile_icon.png';
import axios from 'axios';

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Make a GET request to fetch user data
        const response = await axios.get("http://localhost:8000/user");

        // Check if the request was successful
        if (response.status === 200) {
          // Set the user data in state
          setUserData(response.data);
        } else {
          // Handle unsuccessful response
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching user data:", error);
      }
    };

    // Call fetchUserData function
    fetchUserData();
  }, []);

  return (
    <div>
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Account Info</h1>
      </div>
      <div className="mt-9 flex flex-col bg-white justify-center items-center h-auto border border-gray-500 rounded-xl">
        <div className="flex w-full">
          <div className="w-1/3 p-6">
            <img
              src={Profile}
              alt="Profile"
              className="w-72 h-auto m-auto"
            />
          </div>

          <div className="w-2/3 p-6">
            {userData && (
              <>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={userData.username}
                    className="w-full border rounded py-2 px-3"
                    placeholder="Enter your username"
                    disabled // Disable editing of username
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={userData.email}
                    className="w-full border rounded py-2 px-3"
                    placeholder="Enter your email"
                    disabled // Disable editing of email
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={userData.password}
                    className="w-full border rounded py-2 px-3"
                    placeholder="Enter your password"
                    disabled // Disable editing of password
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="w-full mt-4 flex justify-center mb-4">
          <button className="bg-blue-500 text-white text-center py-2 px-4 rounded">Update</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
