import React from 'react';

const JobSearch = () => {
  return (
    <body className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center mb-6">
          <div className="flex w-full max-w-7xl mx-auto bg-white p-4 rounded-lg shadow-lg space-x-4">
            <input
              type="text"
              placeholder="Job title, keywords..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="Location"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
              <option>All Categories</option>
            </select>
            <button className="bg-green-600 text-white p-3 rounded-lg shadow hover:bg-green-700 transition duration-300">
              Find Jobs
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-2 mb-4">
            <span>Popular Searches: </span>
            <span className="text-blue-500 cursor-pointer">Designer</span>
            <span className="text-blue-500 cursor-pointer">Developer</span>
            <span className="text-blue-500 cursor-pointer">Web</span>
            <span className="text-blue-500 cursor-pointer">iOS</span>
            <span className="text-blue-500 cursor-pointer">PHP</span>
            <span className="text-blue-500 cursor-pointer">Senior</span>
            <span className="text-blue-500 cursor-pointer">Engineer</span>
          </div>
          <div className="mb-4">
            <span>Showing 1 - 25 of 90 results</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Card 1 */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-yellow-400 text-sm px-2 py-1 rounded-2xl">Urgent</span>
                <span className="bg-green-200 text-sm px-2 py-1 rounded-3xl">Full Time</span>
              </div>
              <div className="flex pt-2">
                <img
                  src="https://emeraldislemanpower.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-25-at-15.57.44-150x150.jpeg"
                  alt="Job Image"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <div className="px-5">
                  <h2 className="text-lg font-bold mb-2">
                    Vacancy Available for Light Vehicle Drivers in Qatar
                  </h2>
                  <p className="text-gray-600">Qatar</p>
                </div>
              </div>
            </div>
            {/* Job Card 2 */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-yellow-400 text-sm px-2 py-1 rounded-2xl">Urgent</span>
                <span className="bg-green-200 text-sm px-2 py-1 rounded-3xl">Full Time</span>
              </div>
              <div className="flex pt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWdJ5A6BUMQy8IYWMXTn5v0v7nUGlimGC6w&s"
                  alt="Job Image"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <div className="px-5">
                  <h2 className="text-lg font-bold mb-2">
                    Elevate Your Nursing Profession in Kuwait
                  </h2>
                  <p className="text-gray-600">Kuwait</p>
                </div>
              </div>
            </div>
            {/* Job Card 3 */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-yellow-400 text-sm px-2 py-1 rounded-2xl">Urgent</span>
                <span className="bg-green-200 text-sm px-2 py-1 rounded-3xl">Full Time</span>
              </div>
              <div className="flex pt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa613Rl3DK0Oyfc8zZv2bPKPdamfOHcjQfiw&s"
                  alt="Job Image"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <div className="px-5">
                  <h2 className="text-lg font-bold mb-2">
                    Restaurant Careers Available In Kuwait and Bahrain
                  </h2>
                  <p className="text-gray-600">Bahrain, Kuwait</p>
                </div>
              </div>
            </div>
            {/* Job Card 4 */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-yellow-400 text-sm px-2 py-1 rounded-2xl">Urgent</span>
                <span className="bg-green-200 text-sm px-2 py-1 rounded-3xl">Full Time</span>
              </div>
              <div className="flex pt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvTy5I6Zh3cGKS_wYUcc2sxuckvHKnHnTtw&s"
                  alt="Job Image"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <div className="px-5">
                  <h2 className="text-lg font-bold mb-2">
                    Full Stack Developer Vacancy In Oman
                  </h2>
                  <p className="text-gray-600">Oman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default JobSearch;
