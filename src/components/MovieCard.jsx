import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ movie, index }) => {
  const { poster_path, title, vote_average, release_date } = movie;

  if (!poster_path) return null;

  // Format rating
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
  const year = release_date ? new Date(release_date).getFullYear() : '';

  return (
    <div 
      className="relative shrink-0 w-44 group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
      }}
    >
      <div 
        className="relative rounded-lg overflow-hidden
        transition-all duration-300
        shadow-lg shadow-black/20
        group-hover:shadow-2xl group-hover:shadow-black/60
        z-0 group-hover:z-10"
      >
        <img
          src={`${IMG_CDN}${poster_path}`}
          alt={title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0
          bg-linear-to-t from-black/90 via-black/30 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300" />

        <div 
          className="absolute bottom-0 left-0 right-0 p-4
          transform translate-y-4 opacity-0
          transition-all duration-300
          group-hover:translate-y-0 group-hover:opacity-100"
        >
          <h3 className="text-white font-bold text-sm mb-2 line-clamp-2 drop-shadow-lg">
            {title}
          </h3>
          
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              {vote_average > 0 && (
                <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-md font-bold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {rating}
                </span>
              )}
              
              {year && (
                <span className="text-gray-300 font-medium">
                  {year}
                </span>
              )}
            </div>

            <button 
              className="bg-white hover:bg-gray-200 text-black rounded-full p-1.5 transition-all hover:scale-110 cursor-pointer"
              aria-label={`Play ${title}`}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;