import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdLocationOn } from "react-icons/md";
import toast from "react-hot-toast";
import contactUsImg from "../assets/contact_us.gif";
const ContactUs = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll respond within 24 hours.", {
      duration: 4000,
      position: "top-center",
      style: {
        background: darkMode ? "#374151" : "#4B5563",
        color: "#fff",
        padding: "16px",
      },
    });
    e.target.reset();
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "Phone Support",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM",
    },
    {
      icon: <FaEnvelope />,
      label: "Email Support",
      value: "support@visanavigator.com",
      description: "24/7 email response",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Office Location",
      value: "123 Visa Street",
      description: "Global City, 10001",
    },
    {
      icon: <FaClock />,
      label: "Response Time",
      value: "Within 24 Hours",
      description: "For all inquiries",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-base-200 transition-colors duration-300 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-4">
            <Typewriter
              words={["How Can We Help?", "Contact Our Team", "Get Support"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-base sm:text-lg  px-4">
            Have questions about visa requirements? Our support team is here to
            help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <Fade>
            <div className="space-y-6 sm:space-y-8">
            
              <div className="bg-base-100 dark:bg-base-300 rounded-lg  shadow-sm overflow-hidden">
                <img
                  src={contactUsImg}
                  className="w-full object-cover object-center"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className=" bg-base-100 dark:bg-base-300 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    role="region"
                    aria-label={info.label}
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-content rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium ">{info.label}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Contact Form */}
          <Fade>
            <div className=" bg-base-100 dark:bg-base-300 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {[
                  {
                    id: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email",
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "What is this regarding?",
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className={`block text-sm font-medium mb-2 ${
                        focusedField === field.id ? "" : ""
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-lg input input-bordered"
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 `}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full px-4 py-3 rounded-lg input input-bordered resize-none min-h-48 "
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full   text-white py-3 px-6 rounded-lg 
                           font-medium 
                           focus:outline-none focus:ring-2
                           bg-primary
                        transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
