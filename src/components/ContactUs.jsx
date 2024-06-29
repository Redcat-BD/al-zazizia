import { useState, useEffect } from 'react';
import companyLogo from './company.png';


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
  
  <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-4 leading-7 text-gray-600">Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {/* Collaborate */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">collaborate@example.com</a></dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>

              {/* Press */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-indigo-600" href="mailto:press@example.com">press@example.com</a></dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>

              {/* Join our team */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-indigo-600" href="mailto:careers@example.com">careers@example.com</a></dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>

              {/* Say hello */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-indigo-600" href="mailto:hello@example.com">hello@example.com</a></dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Locations Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
              <p className="mt-4 leading-7 text-gray-600">Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {/* Los Angeles */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>

              {/* New York */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">New York</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>

              {/* Toronto */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Toronto</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>

              {/* Chicago */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Chicago</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div>
            </div>
          </div>

        </div>
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
