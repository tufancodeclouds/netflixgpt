import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);

  const trailerKey = useSelector((state) => state.movies?.trailerVideo);

  if (!trailerKey) return null;

  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full scale-150 origin-center pointer-events-none"
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
      title="Background Trailer"
      frameBorder="0"
      allow="autoplay; encrypted-media"
    />
  )
};

export default VideoBackground;
