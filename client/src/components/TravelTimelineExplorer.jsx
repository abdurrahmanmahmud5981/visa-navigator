import { Slide, Zoom } from "react-awesome-reveal";
import { BiPlanet } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FiCreditCard, FiFileText, FiMapPin } from "react-icons/fi";

const TravelTimelineExplorer = () => {
  const travelPreparationStages = [
    {
      title: "Strategic Documentation",
      icon: <FiFileText className="w-10 h-10 text-blue-500" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      description: "Comprehensive document preparation and verification",
      details: [
        "Passport validity check (minimum 6 months beyond travel date)",
        "Visa document compilation",
        "Digital and physical document backups",
        "Translation of critical documents",
      ],
      timeframe: "3-4 weeks before travel",
    },
    {
      title: "Financial & Insurance Readiness",
      icon: <FiCreditCard className="w-10 h-10 text-green-500" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      description: "Financial planning and travel protection strategies",
      details: [
        "Travel insurance coverage verification",
        "International banking notifications",
        "Currency exchange and payment method planning",
        "Emergency fund preparation",
      ],
      timeframe: "2-3 weeks before departure",
    },
    {
      title: "Pre-Departure Risk Management",
      icon: <BsShieldCheck className="w-10 h-10 text-red-500" />,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      description: "Safety and contingency planning",
      details: [
        "Country-specific health and safety research",
        "Emergency contact documentation",
        "Local embassy registration",
        "Travel advisory monitoring",
      ],
      timeframe: "1-2 weeks before travel",
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral rounded-2xl sm:py-12 sm:px-6">
      <div className=" mx-auto ">
     
        <Slide direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
              Travel Expedition <span className="text-primary">Framework</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
          </Slide>

        <div className=" grid  sm:grid-cols-2  xl:grid-cols-3 gap-6">
          {travelPreparationStages?.map((stage, index) => (
            <div
              key={index}
              className={`
                rounded-xl p-3 sm:p-6 
                hover:shadow-lg transition-all dark:bg-base-100 cursor-pointer 
              border-2 ${stage.borderColor}
              `}
            >
              <div className="flex justify-between items-center mb-4 ">
                <div className="flex items-center justify-between gap-4">
                  <div className="mr-6">{stage.icon}</div>
                  <div>
                    <h3 className="sm:text-xl font-bold">{stage.title}</h3>
                    <p className=" text-sm">{stage.timeframe}</p>
                  </div>
                </div>
                <FiMapPin className={`w-5 h-5 ${stage.color}`} />
              </div>

              <p className=" mb-4">{stage.description}</p>

              <div
                className={`p-4 rounded-lg ${stage.bgColor} dark:bg-neutral`}
              >
                <h4 className="font-semibold mb-2">Key Action Items:</h4>
                <ul className="space-y-2">
                  {stage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm ">
                      <BiPlanet
                        className={`w-4 h-4 mr-2 mt-1 ${stage.color}`}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTimelineExplorer;
