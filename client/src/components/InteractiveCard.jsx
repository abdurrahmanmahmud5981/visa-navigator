import { useState } from "react";

const InteractiveCard = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` bg-base-100 border rounded-xl  transform transition-all duration-300  ${
        isHovered ? "scale-105 shadow-xl" : "scale-100 "
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;