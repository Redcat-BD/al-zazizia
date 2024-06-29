import React from 'react';

const jobs = [
  {
    id: 1,
    title: "Agriculture Store Vacancies In Romania",
    category: "Agriculture/Dairy/Environment",
    location: "Romania",
    date: "June 19, 2024",
    salary: "LKR rs162500 - LKR rs242400",
    type: "Full Time",
    imgSrc: "https://emeraldislemanpower.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-16.31.58-150x150.jpeg.webp", // Replace with actual image source
  },
  {
    id: 2,
    title: "Agriculture Store Vacancies In Qatar",
    category: "Agriculture/Dairy/Environment",
    location: "Qatar",
    date: "May 13, 2024",
    salary: "LKR rs202500",
    type: "Full Time",
    imgSrc: "https://emeraldislemanpower.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-16.31.58-150x150.jpeg.webp", // Replace with actual image source
  },
  {
    id: 3,
    title: "Irrigation Vacancies In Qatar",
    category: "Agriculture/Dairy/Environment",
    location: "Qatar",
    date: "March 13, 2024",
    salary: "LKR rs252000 - LKR rs336000",
    type: "Full Time",
    imgSrc: "https://emeraldislemanpower.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-16.31.58-150x150.jpeg.webp", // Replace with actual image source
  },
  {
    id: 4,
    title: "Vacancies In A Leading Group Of Companies In Qatar",
    category: "Agriculture/Dairy/Environment",
    location: "Qatar",
    date: "February 9, 2024",
    salary: "LKR rs85000 - LKR rs170000",
    type: "Full Time",
    imgSrc: "https://emeraldislemanpower.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-12-at-16.31.58-150x150.jpeg.webp", // Replace with actual image source
  },
];

const CategoryIcon = () => (
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"/>
  </svg>
  );

const LocationIcon = () => (
  <svg className="w-5 h-5 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
);

const DateIcon = () => (
  <svg className="w-5 h-5 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm-7-5h5v2h-5z"/></svg>
);

const SalaryIcon = () => (
  <svg className="w-5 h-5 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1zm0 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9-4.032 9-9 9zm-.5-9H7v-2h4V7h2v3h4v2h-4v3h-2v-3z"/></svg>
);

const JobList = () => {
  return (

    

    <div className='grid grid-cols-12  xl:mx-20 mx-auto gap-5 py-10'>
 <div className="hidden md:block col-span-4 w-full mx-auto p-4 bg-white border shadow-md rounded-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Search</label>
            <input type="text" placeholder="Keywords" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Location</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Category</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Type</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Min. Salary</label>
            <input type="range" min="0" max="100000" className="w-full mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Experience</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Experience</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Career Level</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Career Level</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date Posted</label>
            <div className="mt-1">
              <label className="block">
                <input type="radio" name="date-posted" className="mr-2" /> Last Hour
              </label>
              <label className="block">
                <input type="radio" name="date-posted" className="mr-2" /> Last 24 Hours
              </label>
              <label className="block">
                <input type="radio" name="date-posted" className="mr-2" /> Last 7 Days
              </label>
              <label className="block">
                <input type="radio" name="date-posted" className="mr-2" /> Last 14 Days
              </label>
              <label className="block">
                <input type="radio" name="date-posted" className="mr-2" /> Last 30 Days
              </label>
             </div>
             </div>
             <div className="mb-4">
            <label className="block text-gray-700">Salary Type</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Basic salary</option>
              <option>Negotiable Salary</option>
            </select>
          </div>
             </form>
             </div>
             <div className="col-span-8 space-y-6">
      {jobs.map((job) => (
        
        <div key={job.id} className="bg-white p-6 rounded-xl shadow-lg flex items-center w-screen md:w-full mx-auto border ">
          <img src={job.imgSrc} alt={job.title} className="w-20 h-20 object-cover rounded-lg mr-4" />
          <div className="flex-1">
          <div className='flex justify-between items-center'>
  <h2 className="text-sm md:text-xl font-semibold">{job.title}</h2>
  <div className="text-green-500 font-semibold mt-2 hidden md:block">
    <span className="px-2 py-1 bg-green-100 rounded-full text-xs md:text-sm">{job.type}</span>
  </div>
</div>

            <div className="grid grid-cols-1 md:grid-cols-4 text-gray-600 flex gap-5 text-xs md:text-sm">
              <div className=" flex items-center md:mt-2 px-2">
                <CategoryIcon />
                <span>{job.category}</span>
              </div>
             <div className='flex col-span-2'>
             <div className="flex items-center md:mt-2 px-2 md:px-8">
                <LocationIcon />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center md:mt-2 px-2 md:px-8">
                <DateIcon />
                <span>{job.date}</span>
              </div>
             </div>
              <div className="flex items-center md:mt-2 px-2">
                <SalaryIcon />
                <span>{job.salary}</span>
              </div>
            </div>
            <div className="md:hidden text-green-500 font-semibold mt-2">
            <span className="px-2  py-1 bg-green-100 rounded-full text-xs md:text-sm">{job.type}</span>
          </div>
          </div>
         



         
        </div>
       
      ))}
      
    </div>
    </div>
    
  );
};

export default JobList;
