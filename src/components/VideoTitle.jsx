import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white space-y-4">
      
      <h1 className="text-5xl font-extrabold drop-shadow-lg max-w-xl">
        {title}
      </h1>

      <p className="text-lg text-gray-200 line-clamp-3 max-w-xl">
        {overview}
      </p>

      <div className="flex gap-4 mt-6 max-w-xl">
        
        <button className="flex items-center gap-3 bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-200 transition cursor-pointer">
          <FaPlay />
          Play
        </button>

        <button className="flex items-center gap-3 bg-gray-600/70 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-600 transition cursor-pointer">
          <AiOutlineInfoCircle className="text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
