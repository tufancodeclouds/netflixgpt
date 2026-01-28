// src/pages/Browse.jsx
import EmailVerificationBanner from '../components/EmailVerificationBanner';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {

  useNowPlayingMovies();
  
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