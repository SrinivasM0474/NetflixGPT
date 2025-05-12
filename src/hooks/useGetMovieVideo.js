import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetMovieVideo = (movieId) => {
  const dispatch = useDispatch();
  const { trailerVideo } = useSelector((state) => state.movies);

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTrailerVideo(json.results?.[0]?.key));
  };
};

export default useGetMovieVideo;
