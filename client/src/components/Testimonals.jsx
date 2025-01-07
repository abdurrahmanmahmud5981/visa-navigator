import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonals = () => {
    const testimonials = [
        {
          name: "Sarah Johnson",
          country: "United States",
          image: "/api/placeholder/80/80",
          role: "Business Traveler",
          content:
            "The visa process was incredibly smooth. Their expert team guided me through every step, making what seemed complicated very straightforward.",
          rating: 5,
        },
        {
          name: "Mohammed Ali",
          country: "UAE",
          image: "/api/placeholder/80/80",
          role: "Student",
          content:
            "Getting my student visa was stress-free thanks to Visa Navigator. Their attention to detail and prompt support made all the difference.",
          rating: 5,
        },
        {
          name: "Elena Rodriguez",
          country: "Spain",
          image: "/api/placeholder/80/80",
          role: "Digital Nomad",
          content:
            "As someone who travels frequently, having Visa Navigator as my visa partner has been invaluable. They're efficient, reliable, and always available.",
          rating: 5,
        },
        {
          name: "David Chen",
          country: "Singapore",
          image: "/api/placeholder/80/80",
          role: "Corporate Client",
          content:
            "Outstanding service! They handled our company's multiple visa applications with exceptional professionalism and efficiency.",
          rating: 5,
        },
      ];
    
  return (

      <div className="my-20 bg-base-200 py-16">
      <Fade>
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
      </Fade>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Zoom>
                <div className="card bg-base-100 shadow-xl h-full">
                  <div className="card-body">
                    <div className="flex justify-center mb-4">
                      <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 mx-1"
                        />
                      ))}
                    </div>
                    <div className="text-center">
                      <FaQuoteLeft className="inline-block text-primary opacity-50 mr-2" />
                      <p className="inline">{testimonial.content}</p>
                      <FaQuoteRight className="inline-block text-primary opacity-50 ml-2" />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm opacity-75">
                        {testimonial.role}
                      </p>
                      <p className="text-sm opacity-75">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                </div>
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonals