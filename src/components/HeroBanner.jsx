import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const HeroBanner = ({ movie }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <VideoBackground id={movie?.id} />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent z-10" />

      <div className="absolute top-1/3 left-0 z-20 w-full">
        <div className="container mx-auto px-5">
          <VideoTitle title={movie?.title} overview={movie?.overview} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
