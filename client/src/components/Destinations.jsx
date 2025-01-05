import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { BiCalendar, BiGlobe } from "react-icons/bi";
import { FaDollarSign, FaStar } from "react-icons/fa6";

const Destinations = () => {
  const destinations = [
    {
      name: "Easy Access Countries",
      icon: <BiGlobe className="w-12 h-12 text-blue-500" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      description:
        "Discover destinations with simplified visa processes and quick approvals.",
      highlights: [
        "Minimal documentation",
        "Faster processing times",
        "Welcoming immigration policies",
      ],
    },
    {
      name: "Budget-Friendly Visas",
      icon: <FaDollarSign className="w-12 h-12 text-green-500" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      description:
        "Explore cost-effective visa options for budget-conscious travelers.",
      highlights: [
        "Affordable application fees",
        "Economic travel destinations",
        "Flexible visa types",
      ],
    },
    {
      name: "Extended Stay Options",
      icon: <BiCalendar className="w-12 h-12 text-purple-500" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      description:
        "Find visas offering longer stay durations and multiple entry privileges.",
      highlights: [
        "Long-term stay permissions",
        "Multiple entry benefits",
        "Work and study opportunities",
      ],
    },
  ];

  return (
    <div>
      <div className=" sm:bg-slate-50 dark:bg-neutral rounded-2xl py-16 sm:px-4">
        <div className=" mx-auto max-w-6xl overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-12  ">
            <Slide direction="down">Visa Insights Explorer</Slide>
          </h2>

          <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Slide key={index}>
                <Zoom
                  cascade
                  damping={0.1}
                  className={`
                bg-white dark:bg-base-100 dark:text-base-content rounded-2xl shadow-lg p-6 transition-all duration-300 
                cursor-pointer group 
                border-2 ${dest.borderColor}
                hover:shadow-xl
                
              `}
                >
                  <div className="">
                    <div className="flex items-center mb-4">
                      {dest.icon}
                      <h3 className="ml-4 text-xl font-bold">{dest.name}</h3>
                    </div>

                    <p className=" mb-4">{dest.description}</p>

                    <div
                      className={` ${dest.bgColor} p-4 rounded-lg  dark:bg-neutral`}
                    >
                      <h4 className="font-semibold mb-2 dark:text-base-content">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2 ">
                        {dest.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm ">
                            <FaStar className={`w-4 h-4 mr-2 ${dest.color}`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Zoom>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
