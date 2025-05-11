import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="relative -top-24">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
