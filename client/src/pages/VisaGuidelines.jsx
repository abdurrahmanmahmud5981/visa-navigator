import React, { useState } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaSearch, FaPassport, FaMoneyBillWave, FaFileAlt, FaPlane, FaClock, FaUserCheck } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import TabSection from '../components/TavSection';

const VisaGuidelines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  

  const [text] = useTypewriter({
    words: ['Plan Your Journey', 'Simplify Visa Process', 'Travel With Confidence'],
    loop: true,
    delaySpeed: 2000,
  });

  const guidelines = [
    {
      category: "Document Requirements",
      icon: <FaPassport className="text-3xl text-primary" />,
      type: "documents",
      items: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photographs",
        "Proof of travel insurance",
        "Proof of accommodation arrangements"
      ]
    },
    {
      category: "Financial Guidelines",
      icon: <FaMoneyBillWave className="text-3xl text-success" />,
      type: "financial",
      items: [
        "Bank statements for the last 3-6 months",
        "Proof of employment or business ownership",
        "Income tax returns",
        "Travel budget estimation",
        "Sponsorship letter (if applicable)"
      ]
    },
    {
      category: "Legal Requirements",
      icon: <FaFileAlt className="text-3xl text-warning" />,
      type: "legal",
      items: [
        "Clean criminal record certificate",
        "Legal affidavits if required",
        "Previous visa copies (if any)",
        "Employment contract/Business registration",
        "Property ownership documents"
      ]
    },
    {
      category: "Travel Requirements",
      icon: <FaPlane className="text-3xl text-info" />,
      type: "travel",
      items: [
        "Round-trip flight reservations",
        "Hotel bookings for entire stay",
        "Travel itinerary",
        "Tour package details if applicable",
        "Travel insurance coverage"
      ]
    },
    {
      category: "Processing Guidelines",
      icon: <FaClock className="text-3xl text-error" />,
      type: "processing",
      items: [
        "Standard processing: 5-10 working days",
        "Express processing available",
        "Track application status online",
        "Interview scheduling if required",
        "Visa collection procedure"
      ]
    }
  ];

  const filteredGuidelines = guidelines.filter(section =>
    (activeTab === 'all' || section.type === activeTab) &&
    (searchTerm === '' || 
      section.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const stats = [
    { number: "95%", text: "Success Rate" },
    { number: "24/7", text: "Support" },
    { number: "150+", text: "Countries" },
    { number: "1M+", text: "Happy Travelers" }
  ];

  return (
    <>
      <Helmet>
        <title>Visa Guidelines | Visa Navigator</title>
      </Helmet>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <div className=" hero py-16  ">
          <div className="hero-content text-center ">
            <div className="max-w-3xl ">
              <Fade cascade duration={1000}>
                <h1 className="text-5xl font-bold mb-4 ">
                  <span>{text}</span>
                  <Cursor cursorStyle="_" />
                </h1>
                <p className="text-lg opacity-75 mb-8">
                  Your comprehensive guide to successful visa applications
                </p>
              </Fade>
              {/* <Player
                autoplay
                loop
                src="https://lottie.host/2d519f8a-fd06-4f8e-9d45-be71d7ea3b9e/Ku2tkR2qpA.json"
                className="w-64 h-64 mx-auto"
              /> */}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Stats Section */}
          <div className="mb-16">
            <Slide>
              <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                {stats.map((stat, index) => (
                  <div key={index} className="stat place-items-center">
                    <div className="stat-title">Success Metrics</div>
                    <div className="stat-value">{stat.number}</div>
                    <div className="stat-desc">{stat.text}</div>
                  </div>
                ))}
              </div>
            </Slide>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="form-control flex-1">
                <div className="input-group relative">
                  <input
                    type="text"
                    placeholder="Search guidelines..."
                    className="input input-bordered w-full min-w-80"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className=" absolute right-0 btn btn-square btn-primary ">
                    <FaSearch className="h-6 w-6" />
                  </button>
                </div>
              </div>
             <TabSection activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
          </div>

          {/* Guidelines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuidelines.map((section, index) => (
              <Zoom key={index} delay={index * 100}>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-400/30">
                  <div className="card-body">
                    <h2 className="card-title flex items-center gap-3">
                      {section.icon}
                      <span>{section.category}</span>
                    </h2>
                    <ul className="space-y-3 mt-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">Learn More</button>
                    </div> */}
                  </div>
                </div>
              </Zoom>
            ))}
          </div>

          {/* Quick Tips Section */}
          <Fade delay={200}>
            <div className="mt-16">
              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title flex items-center gap-2">
                    <FaUserCheck className="text-2xl" />
                    Pro Tips for Successful Applications
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="bg-primary-focus p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Early Application</h3>
                      <p>Apply at least 3 months before travel date</p>
                    </div>
                    <div className="bg-primary-focus p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Document Quality</h3>
                      <p>Ensure all documents are clear and legible</p>
                    </div>
                    <div className="bg-primary-focus p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Stay Updated</h3>
                      <p>Check requirements regularly for changes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* Important Notes Section */}
          <Slide direction="up">
            <div className="mt-8">
              <div className="alert alert-info shadow-lg">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="font-bold">⚠️</span>
                      <p>Processing times vary by country and visa type. Apply well in advance of your planned travel date.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">💡</span>
                      <p>Requirements may change without notice. Always verify with the official embassy website.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default VisaGuidelines;