import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((state) => state.gpt);
  if (!movieNames) return null;
  return (
    <div>
      {movieNames?.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
