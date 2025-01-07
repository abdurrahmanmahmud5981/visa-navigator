import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner_1 from "../assets/banner_1.webp";
import banner_2 from "../assets/banner_2.webp";
import banner_3 from "../assets/banner_3.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const bannerSlides = [
    {
      title: "Simplify Your Visa Journey",
      description: "Easily navigate your visa process with confidence, ensuring a hassle-free experience every step.",
      background: "bg-blue-600",
      buttonText: "Get Started",
      buttonColor: "bg-white/90 glass text-blue-600",
      image: banner_1,
    },
    {
      title: "Real-Time Application Tracking",
      description: "Monitor every stage of your visa application in real-time for up-to-date progress updates.",
      background: "bg-green-600",
      buttonText: "Track Application",
      buttonColor: "bg-white/90 glass text-green-600",
      image: banner_2,
    },
    {
      title: "Expert Guidance at Your Fingertips",
      description: "Access personalized resources and expert advice to simplify and streamline your visa journey.",
      background: "bg-purple-600",
      buttonText: "Learn More",
      buttonColor: "bg-white/90 glass text-purple-600",
      image: banner_3,
    },
  ];
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=" rounded-xl sm:h-[500px] shadow -z-50 "
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide className="relative" key={index}>
            <div
              className={`absolute flex justify-center items-center text-center w-full h-full ${slide.background} bg-opacity-65 `}
            >
              <div className="max-w-xl mx-auto px-3">
                <h2 className=" text-lg sm:text-4xl font-semibold text-white">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg font-medium text-white my-2 sm:mt-4">
                  {slide.description}
                </p>
                <button
                  className={`btn ${slide.buttonColor}  sm:mt-4  px-3 w-fit h-fit py-2 min-h-0 sm:min-h-max sm:rounded-xl sm:py-2 sm:px-4  sm:text-lg`}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
            <img
              className="  object-center object-cover xl:object-fill "
              src={slide.image}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
