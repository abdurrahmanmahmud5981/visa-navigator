import React from "react";
import { Slide } from "react-awesome-reveal";
import { FaAward } from "react-icons/fa";

const Achievement = () => {
    const achievements = [
        { number: "50K+", text: "Successful Applications" },
        { number: "150+", text: "Countries Served" },
        { number: "98%", text: "Success Rate" },
        { number: "24/7", text: "Support Available" },
      ];
    return (
        <div>
            <Slide>
            <div className="stats shadow w-full my-16">
              {achievements.map((stat, index) => (
                <div key={index} className="stat place-items-center">
                  <div className="stat-figure text-primary">
                    <FaAward className="text-3xl" />
                  </div>
                  <div className="stat-title">Achievement</div>
                  <div className="stat-value">{stat.number}</div>
                  <div className="stat-desc">{stat.text}</div>
                </div>
              ))}
            </div>
          </Slide>

        </div>
    );
};

export default Achievement;