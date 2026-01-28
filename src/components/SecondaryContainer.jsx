import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);
  const popularMovies = useSelector(state => state.movies.popularMovies);
  const topRatedMovies = useSelector(state => state.movies.topRatedMovies);
  const upcomingMovies = useSelector(state => state.movies.upcomingMovies);

  return (
    <>
      {/*
        MovieList - NowPlaying
          - MovieCard * n
        MovieList - Popular
        MovieList - Top Rated
        MovieList - Upcoming
      */}
      <div className="container mx-auto px-5">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}  />
        <MovieList title={"Popular"} movies={popularMovies}  />
        <MovieList title={"Top Rated"} movies={topRatedMovies}  />
        <MovieList title={"Upcoming"} movies={upcomingMovies}  />
      </div>
    </>
  )
}

export default SecondaryContainer;