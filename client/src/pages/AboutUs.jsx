import React, { useState, useEffect } from "react";
import {
  Fade,
  Slide,
  Zoom,
  AttentionSeeker,
  Bounce,
} from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGlobe,
  FaUsers,
  FaUserTie,
  FaClock,
  FaAward,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaChevronUp,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Testimonals from "../components/Testimonals";
import ClientStories from "./ClientStories";
import TeamSection from "../components/TeamSection";
import Achievement from "../components/Achievement";
import FeaturesSection from "../components/FeaturesSection";
import ClientTestimonial from "../components/ClientTestimonial";
import InteractiveCard from "../components/InteractiveCard";
import StorySection from "../components/StorySection";

const AboutUs = () => {
  const [text] = useTypewriter({
    words: ["Global Visa Solutions", "Expert Guidance", "Simplified Process"],
    loop: true,
    delaySpeed: 2000,
  });

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

  return (
    <>
      <Helmet>
        <title>About Us | Visa Navigator</title>
      </Helmet>

    
      <div className=" hero py-16  ">
        <div className="hero-content text-center ">
          <div className="max-w-3xl">
            <AttentionSeeker effect="pulse">
              <h1 className="text-5xl font-bold mb-4 ">
                <span>{text}</span>
                <Cursor cursorStyle="_" />
              </h1>
            </AttentionSeeker>

            <Fade cascade damping={0.2}>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Your Trusted Partner in Global Mobility Solutions
              </p>
            </Fade>
          </div>
        </div>
      </div>

     

      <div className="">
        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <StorySection />

          {/* Features Section */}
          <FeaturesSection />

          {/* Achievement Stats */}
          <Achievement />
          {/* Team Section */}

          <TeamSection />
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

          <ClientStories />
          <Testimonals />

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
