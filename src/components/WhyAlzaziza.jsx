import React from 'react';

const WhyAlZaziza = () => {
  return (
    <section className="py-20">
      <h1 className="mb-12 text-center font-sans text-xl md:text-2xl lg:text-4xl font-bold">
        WHY AL-ZAZIZA
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" className="block h-full w-full">
            <img 
              className="w-full object-cover" 
              style={{ height: '280px' }}
              alt="featured image" 
              src="https://www.manpower.com/-/jssmedia/project/manpowergroup/manpower/manpower-us/card-blocks/info-card-block/convertedinfo-card-block-500x334--find-work-fast.webp?h=334&iar=0&w=500&hash=59D0B09760A765CD39B87B9908E79E8B" 
            />
            <div className="w-full bg-white p-4">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Find Work Fast
              </p>
              <p className="text-sm font-normal text-gray-600">
                Manpower receives new job openings every single day, from
                companies in the transportation, logistics, engineering and
                financial service sectors—and more! Find work fast by
                scrolling our job openings and connecting with a recruiter.
              </p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #js
                </div>
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #icefactory
                </div>
              </div>
            </div>
          </a>
        </article>

        <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" className="block h-full w-full">
            <img
              className="w-full object-cover" 
              style={{ height: '280px' }}
              alt="featured image"
              src="https://www.manpower.com/-/jssmedia/project/manpowergroup/manpower/manpower-us/card-blocks/info-card-block/convertedinfo-card-block-500x334--people-first.webp?h=334&iar=0&w=500&hash=111B7CA6A12C5819D6161482165D45AB"
            />
            <div className="w-full bg-white p-4">
              <p className="mb-2 text-xl font-medium text-gray-800">
                People First
              </p>
              <p className="text-sm font-normal text-gray-600">
                Advance your career with online training courses, e-learning
                programs and personalized career guidance. When you’re an
                active Manpower associate, you’ll qualify for it all!
              </p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #js
                </div>
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #icefactory
                </div>
              </div>
            </div>
          </a>
        </article>

        <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" className="block h-full w-full">
            <img
              className="w-full object-cover" 
              style={{ height: '280px' }}
              alt="featured image"
              src="https://www.manpower.com/-/jssmedia/project/manpowergroup/manpower/manpower-us/card-blocks/info-card-block/convertedinfo-card-block-500x334--diversity-inclusion.webp?h=334&iar=0&w=500&hash=F6EE21059F2B1E7F15FB7D4A698AFBA7"
            />
            <div className="w-full bg-white p-4">
              <p className="mb-2 text-xl font-medium text-gray-800">
                Diversity & Inclusion
              </p>
              <p className="text-sm font-normal text-gray-600">
                Work with us to help improve accessibility and opportunity
                within your local area. We develop and support programs that
                upskill underrepresented and underserved populations for
                meaningful and sustainable work.
              </p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #js
                </div>
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #icefactory
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default WhyAlZaziza;
