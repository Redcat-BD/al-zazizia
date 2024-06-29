import { useState, useEffect } from 'react';
import companyLogo from './company.png';
//import HeroSection from './HeroSection';
//import UrgentJobsPage  from './UrgentjobPage';
//import WhyAlzaziza from './WhyAlzaziza';
//import JobSearch from './JobSearch'
import JobSearch from './JobSearch';
import JobList from './JobList';
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
  

  
  < JobSearch />

< JobList />
    </div>
    
  
  );
};

export default Header;
