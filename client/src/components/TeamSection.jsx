
import { Fade, Zoom } from "react-awesome-reveal";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
      bio: "20+ years leading global tech companies. Former VP at Microsoft and Stanford MBA graduate. Passionate about transforming businesses through innovation."
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      bio: "PhD in Computer Science from MIT. Led engineering teams at Google and Amazon. Expert in AI and cloud architecture."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      bio: "15+ years operational experience in Fortune 500 companies. Harvard Business School graduate. Specializes in scaling operations and strategic growth."
    }
  ];
    return (
        <div>
              <div className="my-16">
            <Fade>
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our Leadership Team
              </h2>
            </Fade>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Zoom key={index} delay={index * 100}>
                  <div className="card bg-base-100 shadow-xl min-h-[400px]">
                    <figure className="px-10 pt-10">
                      <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                      </div>
                    </figure>
                    <div className="card-body items-center text-center">
                      <h3 className="card-title">{member.name}</h3>
                      <p className="text-sm opacity-75">
                       {member.role}
                      </p>
                      <p className="mt-2">
                       {member.bio}
                      </p>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </div>
    );
};

export default TeamSection;