import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative">
  <div className="mx-auto max-w-7xl">
    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
      <svg
        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 100,0 50,100 0,100" fill="white" />
      </svg>

      <div className="relative px-6 py-14 lg:py-28 lg:px-8 lg:pr-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <div className="hidden sm:mb-10 sm:flex">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <h1 className="text-left text-2xl font-bold tracking-tight text-green-900 sm:text-5xl">
            Better Service <span className="text-blue-900">Starts Here</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
            AL-ZAZIZA Isle Manpower and Travel Services is an award-winning recruitment agency in Bangladesh, known for its passionate, skilled recruitment officers who provide professional, honest, and customer-driven services.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="text-sm border border-blue-500 rounded-2xl font-semibold leading-6 text-gray-900 px-4 py-1">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-[350px] md:h-[450px] lg:h-[600px] ">
  <form className="flex items-center justify-center h-full relative">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')" }}>
      <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-sm w-full mx-auto mt-40">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Find Your Job</h2>
        
   
        <div class="relative my-3 w-full">
    <input type="text" id="email1" class="border-1 peer block w-full appearance-none rounded-lg border border-blue-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Job Title/Industry" />
    <label for="email1" class="absolute top-2 left-3 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white rounded-xl px-3 text-sm text-gray-500 duration-300">Job Title/Industry</label>
</div>

<div class="relative my-4 w-full">
    <input type="text" id="email2" class="border-1 peer block w-full appearance-none rounded-lg border border-blue-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Your Location/Zip Code" />
    <label for="email2" class="absolute top-2 left-3 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white rounded-xl px-3 text-sm text-gray-500 duration-300">Your Location/Zip Code</label>
    <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/>
        </svg>
    </div>
</div>

<div className='flex items-center justify-center'>
<button type="submit" className=" border border-blue-700 w-48 text-black flex  bg-white-500 py-1 px-4 rounded-3xl flex items-center justify-center text-center">
        <svg class="w-7 h-7 text-gray-800 dark:text-white pr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

            Search Job</button>
</div>

      </div>
    </div>
  </form>
</div>


  </div>
</div>

  );
};

export default HeroSection;
