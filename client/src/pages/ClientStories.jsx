
import { useState } from 'react';
import { Fade, AttentionSeeker } from 'react-awesome-reveal';

const ClientStories = () => {
     const [hoveredCard, setHoveredCard] = useState(null);
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
        <div>
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
        </div>
    );
};

export default ClientStories;