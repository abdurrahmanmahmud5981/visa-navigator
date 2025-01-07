import React, { useState, useEffect } from 'react';
import { Fade, Slide, Zoom, AttentionSeeker, Bounce } from 'react-awesome-reveal';
import { Player } from '@lottiefiles/react-lottie-player';
import { Helmet } from 'react-helmet';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGlobe, FaUsers, FaUserTie, FaClock, FaAward, FaQuoteLeft, FaQuoteRight, FaStar, FaChevronUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scroll}%` }}
        />
      </div>
      {showButton && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 btn btn-circle btn-primary animate-bounce z-50"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
};

const InteractiveCard = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transform transition-all duration-300 ${
        isHovered ? 'scale-105 shadow-2xl' : 'scale-100 shadow-xl'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};



const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);


  const [hoveredCard, setHoveredCard] = useState(null);
  const [text] = useTypewriter({
    words: ["Global Visa Solutions", "Expert Guidance", "Simplified Process"],
    loop: true,
    delaySpeed: 2000,
  });

  const handleIntersection = (section) => {
    setActiveSection(section);
  };
  const features = [
    {
      icon: <FaGlobe className="text-4xl text-primary" />,
      title: "Global Coverage",
      description:
        "Operating in over 150 countries worldwide, providing comprehensive visa services for all major destinations.",
    },
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: "Expert Team",
      description:
        "Our team of visa specialists has decades of combined experience in immigration and visa processing.",
    },
    {
      icon: <FaUserTie className="text-4xl text-accent" />,
      title: "Personal Approach",
      description:
        "Tailored visa solutions for individual travelers, businesses, and organizations.",
    },
    {
      icon: <FaClock className="text-4xl text-info" />,
      title: "Fast Processing",
      description:
        "Efficient visa processing with expedited options available for urgent requirements.",
    },
  ];

  const achievements = [
    { number: "50K+", text: "Successful Applications" },
    { number: "150+", text: "Countries Served" },
    { number: "98%", text: "Success Rate" },
    { number: "24/7", text: "Support Available" },
  ];

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

  const clientStories = [
    {
      title: "From Dream to Reality",
      content: "A student's journey to studying abroad",
      image: "/api/placeholder/400/300",
      category: "Student Visa",
    },
    {
      title: "Business Without Borders",
      content: "Expanding business operations globally",
      image: "/api/placeholder/400/300",
      category: "Business Visa",
    },
    {
      title: "Family Reunion",
      content: "Bringing loved ones together",
      image: "/api/placeholder/400/300",
      category: "Family Visa",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Visa Navigator</title>
      </Helmet>

      <ScrollProgress />

{/* Enhanced Hero Section with Parallax Effect */}
<div className="hero min-h-screen bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="grid grid-cols-8 gap-4 h-full">
      {[...Array(32)].map((_, i) => (
        <div 
          key={i} 
          className="bg-primary"
          style={{
            animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
            opacity: 0.1
          }}
        />
      ))}
    </div>
  </div>
  
  <div className="hero-content text-center relative z-10">
    <div className="max-w-3xl">
      <AttentionSeeker effect="pulse">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h1>
      </AttentionSeeker>
      
      <Fade cascade damping={0.2}>
        <p className="text-xl opacity-90 mb-8 leading-relaxed">
          Your Trusted Partner in Global Mobility Solutions
        </p>
      </Fade>
      
      <div className="flex justify-center gap-4">
        <button className="btn btn-primary btn-lg glass hover:glass-hover">
          Get Started
        </button>
        <button className="btn btn-outline btn-lg">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>

{/* Interactive Features Grid with Hover Effects */}
<div className="py-20 bg-base-100">
  <div className="max-w-7xl mx-auto px-4">
    <Slide>
      <h2 className="text-4xl font-bold text-center mb-16">
        Why Choose <span className="text-primary">Us</span>
      </h2>
    </Slide>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <Zoom key={index} delay={index * 100}>
          <InteractiveCard>
            <div className="card bg-base-100">
              <div className="card-body items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-5 transform rotate-12 scale-150" />
                <div className="relative z-10">
                  {feature.icon}
                  <h3 className="card-title mt-4">{feature.title}</h3>
                  <p className="mt-2">{feature.description}</p>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </Zoom>
      ))}
    </div>
  </div>
</div>

{/* Enhanced Testimonials Carousel */}
<div className="py-20 bg-gradient-to-b from-base-100 to-base-200">
  <Fade>
    <h2 className="text-4xl font-bold text-center mb-16">
      Client <span className="text-primary">Testimonials</span>
    </h2>
  </Fade>

  <div className="max-w-6xl mx-auto px-4">
    <Swiper
      modules={[Autoplay, Pagination, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="pb-12"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} style={{ width: '350px' }}>
          <InteractiveCard className="h-full">
            <div className="card bg-base-100 h-full">
              <div className="card-body">
                <div className="flex justify-center mb-4">
                  <div className="avatar">
                    <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-4 animate-pulse">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1" />
                  ))}
                </div>
                <Fade cascade damping={0.1}>
                  <div className="text-center">
                    <FaQuoteLeft className="inline-block text-primary opacity-50 mr-2" />
                    <p className="inline">{testimonial.content}</p>
                    <FaQuoteRight className="inline-block text-primary opacity-50 ml-2" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm opacity-75">{testimonial.role}</p>
                    <p className="text-sm opacity-75">{testimonial.country}</p>
                  </div>
                </Fade>
              </div>
            </div>
          </InteractiveCard>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

{/* ... Rest of the sections with similar enhancements ... */}

<style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .glass-hover:hover {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.2);
  }
`}</style>




      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <div className="hero bg-base-200 py-16">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <Fade cascade duration={1000}>
                <h1 className="text-5xl font-bold mb-4">
                  <span>{text}</span>
                  <Cursor cursorStyle="_" />
                </h1>
                <p className="text-lg opacity-75 mb-8">
                  Your Trusted Partner in Global Mobility Solutions
                </p>
              </Fade>
              <Player
                autoplay
                loop
                src="https://lottie.host/1a2b3c4d-5e6f-7g8h-9i0j/animation.json"
                className="w-64 h-64 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Slide>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Our Story
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg mb-4">
                      Founded in 2015, Visa Navigator has been at the forefront
                      of revolutionizing the visa application process. Our
                      journey began with a simple mission: to make global travel
                      accessible to everyone through simplified visa solutions.
                    </p>
                    <p className="text-lg">
                      Today, we've grown into a trusted name in visa services,
                      helping thousands of travelers realize their dreams of
                      global exploration. Our commitment to excellence and
                      customer satisfaction remains unwavering.
                    </p>
                  </div>
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/story-animation/animation.json"
                    className="w-full h-64"
                  />
                </div>
              </div>
            </div>
          </Slide>

          {/* Features Section */}
          <div className="my-16">
            <Fade>
              <h2 className="text-3xl font-bold mb-12 text-center">
                Why Choose Us
              </h2>
            </Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Zoom key={index} delay={index * 100}>
                  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center">
                      {feature.icon}
                      <h3 className="card-title mt-4">{feature.title}</h3>
                      <p className="mt-2">{feature.description}</p>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <Slide>
            <div className="stats shadow w-full my-16">
              {achievements.map((stat, index) => (
                <div key={index} className="stat place-items-center">
                  <div className="stat-figure text-primary">
                    <FaAward className="text-3xl" />
                  </div>
                  <div className="stat-title">Achievement</div>
                  <div className="stat-value">{stat.number}</div>
                  <div className="stat-desc">{stat.text}</div>
                </div>
              ))}
            </div>
          </Slide>

          {/* Team Section */}
          <div className="my-16">
            <Fade>
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our Leadership Team
              </h2>
            </Fade>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member, index) => (
                <Zoom key={index} delay={index * 100}>
                  <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src={`/api/placeholder/150/150`}
                            alt={`Team Member ${member}`}
                          />
                        </div>
                      </div>
                    </figure>
                    <div className="card-body items-center text-center">
                      <h3 className="card-title">John Doe {member}</h3>
                      <p className="text-sm opacity-75">
                        Chief Executive Officer
                      </p>
                      <p className="mt-2">
                        15+ years of experience in immigration consulting and
                        visa services.
                      </p>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <Fade>
            <div className="card bg-primary text-primary-content my-16">
              <div className="card-body text-center">
                <h2 className="card-title justify-center text-2xl mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="mb-6">
                  Get in touch with our visa experts today and let us help you
                  navigate your global travel needs.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline btn-ghost">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </Fade>

          {/* Client Success Stories */}
          <div className="my-20 px-4">
            <Fade>
              <h2 className="text-3xl font-bold mb-12 text-center">
                Success Stories
              </h2>
            </Fade>
            <div className="grid md:grid-cols-3 gap-8">
              {clientStories.map((story, index) => (
                <AttentionSeeker key={index} effect="pulse" delay={index * 200}>
                  <div
                    className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-300"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <figure className="relative">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-primary bg-opacity-70 transition-opacity duration-300 flex items-center justify-center ${
                          hoveredCard === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <button className="btn btn-ghost text-white">
                          Read More
                        </button>
                      </div>
                    </figure>
                    <div className="card-body">
                      <div className="badge badge-primary mb-2">
                        {story.category}
                      </div>
                      <h3 className="card-title">{story.title}</h3>
                      <p>{story.content}</p>
                    </div>
                  </div>
                </AttentionSeeker>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
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

          {/* Enhanced Call-to-Action */}
          <AttentionSeeker effect="pulse">
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content my-16 mx-4">
              <div className="card-body text-center py-16">
                <h2 className="card-title justify-center text-3xl mb-4">
                  Begin Your Journey Today
                </h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  Take the first step towards your global adventures. Our expert
                  team is ready to assist you with all your visa needs.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline btn-lg glass hover:glass-hover">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            </div>
          </AttentionSeeker>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
