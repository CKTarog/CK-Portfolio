import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Pagination, Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProjectCarousel = ({currentProject, activeProject, setActiveProject, getID}) => {
  return (
    <>
    <div className="w-full">
        <Swiper direction="vertical" slidesPerView={'auto'} spaceBetween={100} pagination={{ dynamicBullets: true,}} loop={true} mousewheel={true} effect={'coverflow'} grabCursor={true} centeredSlides={true} coverflowEffect={{ rotate: 50, stretch: 0,  depth: 110, modifier: 1, slideShadows: false}} onSlideChange={(swiper) => { getID(swiper.realIndex)}} modules={[EffectCoverflow, Mousewheel, Pagination]} className="lg:h-160 md:h-120 h-90">

            {currentProject.map((currentProject) => (
              <SwiperSlide key={currentProject.id} className="place-content-center justify-center @container">
                <div className="flex @lg:flex-row place-content-center items-center">

                  <button onClick={() => setActiveProject(currentProject)} className=" lg:flex lg:flex-row justify-center max-w-230 rounded-xl shadow-lg transition-transform duration-300 cursor-pointer">
                    <img src={currentProject.image} alt={currentProject.title} className="flex hover:scale-105 aspect-square lg:w-120 lg:h-110 md:w-90 md:h-80 w-70 h-60 object-cover rounded-xl"/>

                    <div className="flex flex-col flex-wrap justify-center px-4 lg:text-start text-center lg:w-150 md:w-90 w-70 p-3">
                      <figcaption className='font-bold md:text-5xl text-3xl text-[#270E12] dark:text-[#fff1dc]'>{currentProject.title}</figcaption>
                      <p className='font-semibold  md:text-2xl text-lg text-[#635147] dark:text-[#d2b48c]'>{currentProject.about}</p>
                    </div>
                    
                  </button>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
          </div>

      {activeProject && (
        <section className='fixed inset-0 z-50 backdrop-blur-3xl dark:text-[#fff1dc] text-[#270E12]'>
          <div className="h-dvh flex lg:flex-row flex-col align-middle">

            <div className="absolute p-4">
              <button onClick={() => setActiveProject(null)} className="p-1 hover:dark:bg-[#fff1dc] hover:bg-[#270E12] hover:dark:text-[#270E12] hover:text-[#fff1dc] text-[#270E12] dark:text-[#fff1dc] border-2 dark:border-[#fff1dc] border-[#270E12] rounded-full transition-colors duration-300"><MdKeyboardArrowLeft className="w-7 h-7"/></button>
            </div>

            <h1 className='md:text-5xl text-4xl text-center lg:top-2 lg:left-20 lg:absolute lg:p-0 lg:text-start static self-center font-bold p-4 w-80'>{activeProject.title}</h1>

            <div className="order-1 m-5 lg:self-end self-center lg:text-start text-center lg:w-160">
              <h1 className='font-bold text-3xl pb-2 text-[#d2b48c]'>Role in Project</h1>
              <p className='md:text-normal lg:text-start text-center text-sm'>{activeProject.role.join(', ')}</p>
            </div>

            <div className="px-4 lg:order-2 order-3 mt-4 self-start overflow-scroll no-scrollbar w-full h-230">
              {activeProject.projImages.map((image, index) => (
                  <div className="mb-5">
                    <img key={index} src={image} className="rounded-xl w-full" />
                  </div>
              ))}
            </div>

            <div className="lg:order-3 order-2 m-5 self-center w-90">
              <h1 className='font-bold text-center text-3xl pb-2 text-[#d2b48c]'>Created With</h1>
              <ul className='text-lg list-disc list-inside lg:text-start text-center'>{activeProject.lang.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}</ul>
            </div>

            
          </div>
            
          
           
        </section>
      )}
    </>
  );
}

export default ProjectCarousel;