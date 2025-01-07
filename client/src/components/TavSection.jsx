import  { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TabSection = ({ activeTab, setActiveTab }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const tabs = ['all', 'documents', 'financial', 'legal', 'travel', 'processing'];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Mobile View - Dropdown */}
      <select 
        className="select select-bordered w-full md:hidden mb-4"
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
      >
        {tabs.map(tab => (
          <option key={tab} value={tab}>
            {tab === 'all' ? 'All Categories' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </option>
        ))}
      </select>

      {/* Tablet and Desktop View - Tabs */}
      <div className="hidden md:flex items-center ">
        {/* Left Scroll Button */}
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="btn btn-circle btn-sm btn-ghost absolute left-0 z-10 bg-base-100 bg-opacity-75"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Scrollable Tabs Container */}
        <div 
          ref={scrollContainerRef}
          className="tabs tabs-boxed overflow-x-auto flex-1 scrollbar-hide px-4 py-2"
          onScroll={checkScroll}
        >
          <div className="flex flex-nowrap min-w-max gap-2">
            {tabs.map(tab => (
              <a
                key={tab}
                className={`tab tab-md whitespace-nowrap transition-all duration-300
                  ${activeTab === tab ? 'tab-active' : ''}
                  hover:bg-base-200`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Categories' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="btn btn-circle btn-sm btn-ghost absolute right-0 z-10 bg-base-100 bg-opacity-75"
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TabSection;