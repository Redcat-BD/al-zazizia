import { useState, useEffect } from 'react';
import companyLogo from './company.png';
//import HeroSection from './HeroSection';
//import UrgentJobsPage  from './UrgentjobPage';
import WhyAlzaziza from './WhyAlzaziza';
//import JobSearch from './JobSearch'


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
  

  
  < WhyAlzaziza />

{/* 
  <!-- Content section --> */}
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div class="w-full lg:max-w-lg lg:flex-auto">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We’re always looking for awesome people to join us</h2>
            <p class="mt-6 text-xl leading-8 text-gray-600">Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.</p>
            <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1344&amp;h=1104&amp;q=80" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"/>
          </div>
          <div class="w-full lg:max-w-xl lg:flex-auto">
            <h3 class="sr-only">Job openings</h3>
            <ul class="-my-8 divide-y divide-gray-100">
              <li class="py-8">
                  <dl class="relative flex flex-wrap gap-x-3">
                    <dt class="sr-only">Role</dt>
                    <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href="#">
                        Full-time designer
                        <span class="absolute inset-0" aria-hidden="true"></span>
                      </a>
                    </dd>
                    <dt class="sr-only">Description</dt>
                    <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.</dd>
                    <dt class="sr-only">Salary</dt>
                    <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$75,000 USD</dd>
                    <dt class="sr-only">Location</dt>
                    <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                        <circle cx="1" cy="1" r="1"></circle>
                      </svg>
                      San Francisco, CA
                    </dd>
                  </dl>
                </li>
              <li class="py-8">
                  <dl class="relative flex flex-wrap gap-x-3">
                    <dt class="sr-only">Role</dt>
                    <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href="#">
                        Laravel developer
                        <span class="absolute inset-0" aria-hidden="true"></span>
                      </a>
                    </dd>
                    <dt class="sr-only">Description</dt>
                    <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.</dd>
                    <dt class="sr-only">Salary</dt>
                    <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$125,000 USD</dd>
                    <dt class="sr-only">Location</dt>
                    <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                        <circle cx="1" cy="1" r="1"></circle>
                      </svg>
                      San Francisco, CA
                    </dd>
                  </dl>
                </li>
              <li class="py-8">
                  <dl class="relative flex flex-wrap gap-x-3">
                    <dt class="sr-only">Role</dt>
                    <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href="#">
                        React Native developer
                        <span class="absolute inset-0" aria-hidden="true"></span>
                      </a>
                    </dd>
                    <dt class="sr-only">Description</dt>
                    <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.</dd>
                    <dt class="sr-only">Salary</dt>
                    <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$105,000 USD</dd>
                    <dt class="sr-only">Location</dt>
                    <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                        <circle cx="1" cy="1" r="1"></circle>
                      </svg>
                      San Francisco, CA
                    </dd>
                  </dl>
                </li>
              
            </ul>
            <div class="mt-8 flex border-t border-gray-100 pt-8">
              <a href="#" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">View all openings <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt=""/>
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Leonard Krasner</h3>
              <p class="text-base leading-7 text-gray-600">Senior Designer</p>
              <p class="mt-6 text-base leading-7 text-gray-600">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.</p>
            </div>
          </li>
        <li class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt=""/>
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Floyd Miles</h3>
              <p class="text-base leading-7 text-gray-600">Principal Designer</p>
              <p class="mt-6 text-base leading-7 text-gray-600">Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.</p>
            </div>
          </li>
        <li class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt=""/>
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Emily Selman</h3>
              <p class="text-base leading-7 text-gray-600">VP, User Experience</p>
              <p class="mt-6 text-base leading-7 text-gray-600">Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.</p>
            </div>
          </li>
        <li class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt=""/>
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Kristin Watson</h3>
              <p class="text-base leading-7 text-gray-600">VP, Human Resources</p>
              <p class="mt-6 text-base leading-7 text-gray-600">Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.</p>
            </div>
          </li>
        
      </ul>
    </div>
  </div>

    </div>
    
  
  );
};

export default Header;
