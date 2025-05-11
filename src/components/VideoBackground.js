import { useSelector } from "react-redux";
import useGetMovieVideo from "../hooks/useGetMovieVideo";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((state) => state.movies.trailerVideo);
  useGetMovieVideo(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        // src={"https://www.youtube.com/embed/" + trailer + "?&autoplay=1&mute=1"}
        src={"https://www.youtube.com/embed/" + trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
