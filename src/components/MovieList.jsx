import { useState, useRef } from 'react';
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  if (!movies || movies.length === 0) return null;

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 10);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.offsetWidth - 10
    );
  };

  return (
    <div className="relative py-8">
      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>

      {showLeftArrow && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 duration-300 cursor-pointer"
          aria-label="Scroll left"
        >
          <svg 
            className="w-8 h-8 text-white drop-shadow-lg hover:scale-125 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 pr-3 duration-300 cursor-pointer"
          aria-label="Scroll right"
        >
          <svg 
            className="w-8 h-8 text-white drop-shadow-lg hover:scale-125 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;