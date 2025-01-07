import React, { useState } from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { Player } from '@lottiefiles/react-lottie-player';
import { 
  FaRocket, 
  FaAward, 
  FaGlobe, 
  FaUsers, 
  FaHistory,
  FaLightbulb,
  FaChartLine
} from 'react-icons/fa';

const StorySection = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  const milestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Started with a vision to revolutionize visa services',
      icon: <FaLightbulb className="text-primary" />
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Expanded to 50+ countries globally',
      icon: <FaGlobe className="text-primary" />
    },
    {
      year: '2021',
      title: 'Innovation',
      description: 'Launched digital visa processing platform',
      icon: <FaRocket className="text-primary" />
    },
    {
      year: '2024',
      title: 'Leadership',
      description: 'Became industry leader in visa solutions',
      icon: <FaChartLine className="text-primary" />
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <Slide direction="up" triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Slide>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="space-y-6">
              <div className="tabs tabs-boxed justify-center bg-base-200/50 p-2">
                <button 
                  className={`tab tab-lg ${activeTab === 'mission' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                >
                  <FaRocket className="mr-2" />
                  Our Mission
                </button>
                <button 
                  className={`tab tab-lg ${activeTab === 'journey' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('journey')}
                >
                  <FaHistory className="mr-2" />
                  Our Journey
                </button>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  {activeTab === 'mission' ? (
                    <Fade key="mission">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                          <FaRocket className="text-2xl" />
                          <h3 className="text-xl font-bold">Our Mission</h3>
                        </div>
                        <p className="text-lg leading-relaxed">
                          Founded in 2015, Visa Navigator has been at the forefront
                          of revolutionizing the visa application process. Our
                          journey began with a simple mission: to make global travel
                          accessible to everyone through simplified visa solutions.
                        </p>
                        <div className="flex items-center gap-3 text-primary mt-6">
                          <FaAward className="text-2xl" />
                          <h3 className="text-xl font-bold">Our Achievement</h3>
                        </div>
                        <p className="text-lg leading-relaxed">
                          Today, we've grown into a trusted name in visa services,
                          helping thousands of travelers realize their dreams of
                          global exploration. Our commitment to excellence and
                          customer satisfaction remains unwavering.
                        </p>
                      </div>
                    </Fade>
                  ) : (
                    <Fade key="journey">
                      <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                          <div 
                            key={milestone.year}
                            className="flex items-start gap-4 relative"
                          >
                            <div className="flex flex-col items-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                {milestone.icon}
                              </div>
                              {index !== milestones.length - 1 && (
                                <div className="w-0.5 h-16 bg-primary/20" />
                              )}
                            </div>
                            <div className="pt-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                                  {milestone.year}
                                </span>
                                <h3 className="text-lg font-bold">{milestone.title}</h3>
                              </div>
                              <p className="text-base-content/70 mt-1">{milestone.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Fade>
                  )}
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={200} triggerOnce>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <div className="card bg-base-100 shadow-xl relative">
                <div className="card-body">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/story-animation/animation.json"
                    className="w-full h-96"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="stat bg-base-200/50 rounded-xl">
                      <div className="stat-figure text-primary">
                        <FaGlobe className="text-3xl" />
                      </div>
                      <div className="stat-title">Global Presence</div>
                      <div className="stat-value text-primary">150+</div>
                      <div className="stat-desc">Countries Served</div>
                    </div>
                    <div className="stat bg-base-200/50 rounded-xl">
                      <div className="stat-figure text-primary">
                        <FaUsers className="text-3xl" />
                      </div>
                      <div className="stat-title">Happy Clients</div>
                      <div className="stat-value text-primary">50K+</div>
                      <div className="stat-desc">And Growing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default StorySection;