import { useState, useEffect } from 'react';
import companyLogo from './company.png';
import HeroSection from './HeroSection';
import UrgentJobsPage  from './UrgentjobPage';
//import WhyAlzaziza from './WhyAlzaziza';
import JobSearch from './JobSearch'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [open, setOpen] = useState(false);


  <script src="https://cdn.tailwindcss.com"></script>

  return (
    <div>
        <header className={`sticky py-5 absolute inset-x-0 top-0 z-50 ${isScrolled ? 'bg-blue-300 text-white' : 'bg-transparent text-gray-900'}`}>
    <div className="mx-auto max-w-7xl">
      <div className="px-6 lg:max-w-7xl lg:pl-8 lg:pr-0">
        <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Your Company" className="h-10 w-20" src={companyLogo} />
          </a>
          <button
            type="button"
            className={`-m-2.5 rounded-md p-2.5 ${isScrolled ? 'text-white' : 'text-gray-700'} lg:hidden`}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
            <a href="/navhome" className="text-sm font-semibold leading-6">
              Home
            </a>
            <a href="/about" className="text-sm font-semibold leading-6">
              About Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Appointment
            </a>
            <a href="/team" className="text-sm font-semibold leading-6">
             Employer
            </a>
            <a href="/contact" className="text-sm font-semibold leading-6 whitespace-nowrap">
              Contact Us
            </a>
            <a href="/job" className="text-sm font-semibold leading-6">
              Find Job
            </a>
            <a href="/blog" className="text-sm font-semibold leading-6">
              Blog
            </a>
          </div>
        </nav>
      </div>
    </div>
    {open && (
      <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={companyLogo} alt="Your Company" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Product
              </a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Features
              </a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Marketplace
              </a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Company
              </a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Log in
              </a>
            </div>
            <div className="py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </header>
  
  < HeroSection />
  < UrgentJobsPage />
  

  {/* job post */}
<div className="bg-white">

<div className="text-center py-10">
    <h1 className="text-black text-4xl font-bold">Popular Job Categories</h1>
    <p className="text-black mt-2">2022 jobs live – 293 added today</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto pb-10">

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor"  d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Accounting / Auditing / Finance</h2>
    </div>

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Eng-Mec/Auto/Elc</h2>
    </div>

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Civil Eng/Contruction/Architecture</h2>
    </div>
    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor"  d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Accounting / Auditing / Finance</h2>
    </div>

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Eng-Mec/Auto/Elc</h2>
    </div>

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Civil Eng/Contruction/Architecture</h2>
    </div>
    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor"  d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Accounting / Auditing / Finance</h2>
    </div>

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Eng-Mec/Auto/Elc</h2>
    </div>

    <div class="bg-white border rounded-xl p-6 rounded-lg shadow-lg flex items-center">
        <div class="text-blue-500 mr-4">
        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
</svg>

        </div>
        <h2 class="text-lg font-semibold">Civil Eng/Contruction/Architecture</h2>
    </div>
    {/* <!-- Add more job categories here --> */}
</div>

</div>


{/* form quarey */}
<div className="relative overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover min-h-screen"
         style={{ backgroundImage: 'url(https://png.pngtree.com/background/20210717/original/pngtree-polygonal-geometric-dark-blue-background-picture-image_1437520.jpg)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-center text-xl font-semibold mb-6">FOR INQUIRY</h2>
          <form>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your name</label>
                <input type="text" id="name" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white bg-gray-100"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input type="email" id="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white bg-gray-100"/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" id="subject" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white bg-gray-100"/>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone No</label>
              <input type="text" id="phone" placeholder="Phone No" className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white bg-gray-100"/>
            </div>
            <div className="mb-6">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">Your Comment</label>
              <textarea id="comment" placeholder="Comment" className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white bg-gray-100 h-32"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white p-3 rounded-3xl shadow hover:bg-green-700 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  
  );
};

export default Header;
