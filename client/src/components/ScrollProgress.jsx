import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scroll}%` }}
        />
      </div>
      {showButton && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 btn btn-circle btn-primary animate-bounce z-50"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
};

export default ScrollProgress;