import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <div>
      <form
        className="flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="w-1/2 p-2 border border-black outline-none mr-10"
          placeholder={lang[langKey].gptSeachPlaceholder}
        />
        <button className="bg-red-600 text-white w-20 rounded-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
