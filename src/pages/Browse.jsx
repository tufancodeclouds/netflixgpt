// src/pages/Browse.jsx
import EmailVerificationBanner from '../components/EmailVerificationBanner';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* <EmailVerificationBanner /> */}
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * 5
          - Cards * n 
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;