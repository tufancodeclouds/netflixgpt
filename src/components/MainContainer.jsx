import { useSelector } from 'react-redux';
import HeroBanner from './HeroBanner';

const MainContainer = () => {

  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <>
      <HeroBanner movie={mainMovie} />
    </>
  );
};

export default MainContainer;
