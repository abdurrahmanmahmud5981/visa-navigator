import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaGlobe, FaUsers, FaUserTie, FaClock } from "react-icons/fa";

const FeaturesSection = () => {
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
    <div>
      <div className="my-16">
     
        <Slide direction="up" triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Us</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Slide>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Zoom key={index} delay={index * 100}>
              <div className="card  min-h-[250px] border overflow-hidden">
                <div className="card-body ">
                  <div className="relative z-10">
                    {feature.icon}
                    <h3 className="card-title mt-4">{feature.title}</h3>
                    <p className="mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
