import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSeach = () => {
  return (
    <div className="pt-24">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSeach;
