const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-12 absolute bottom-0 text-white flex justify-center flex-col bg-gradient-to-r from-black ">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black px-8 py-2 rounded-md mr-2 ">
          Play
        </button>
        <button className="bg-gray-600 text-white px-8 py-2 rounded-md bg-opacity-80 mr-2">
          More Info...
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
