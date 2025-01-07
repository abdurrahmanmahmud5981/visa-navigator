import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const [focusedField, setFocusedField] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll respond within 24 hours.', {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#4B5563',
        color: '#fff',
        padding: '16px'
      }
    });
    e.target.reset();
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "Phone Support",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: <FaEnvelope />,
      label: "Email Support",
      value: "support@visanavigator.com",
      description: "24/7 email response"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Office Location",
      value: "123 Visa Street",
      description: "Global City, 10001"
    },
    {
      icon: <FaClock />,
      label: "Response Time",
      value: "Within 24 Hours",
      description: "For all inquiries"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <Typewriter
              words={['How Can We Help?', 'Contact Our Team', 'Get Support']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about visa requirements? Our support team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Fade>
            <div className="space-y-8">
              {/* Lottie Animation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/95831c1a-dee3-430e-a4a8-c2c48b9f91f9/dhRgUcDYN4.json"
                  className="w-full h-64"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    role="region"
                    aria-label={info.label}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{info.label}</h3>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Contact Form */}
          <Fade>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this regarding?' }
                ].map((field) => (
                  <div key={field.id}>
                    <label 
                      htmlFor={field.id}
                      className={`block text-sm font-medium mb-2 ${
                        focusedField === field.id ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                ))}

                <div>
                  <label 
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      focusedField === 'message' ? 'text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
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