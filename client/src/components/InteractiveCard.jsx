import { useState } from "react";

const InteractiveCard = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transform transition-all duration-300 ${
        isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-xl"
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;