import { useSelector } from 'react-redux';
import HeroBanner from './HeroBanner';

const MainContainer = () => {

  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <>
      <HeroBanner movie={mainMovie} />

      <div className="container mx-auto px-4 py-8">
        MainContainer
      </div>
    </>
  );
};

export default MainContainer;
