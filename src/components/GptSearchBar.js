import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query :" +
    //   searchRef.current.value +
    //   ". only give me names of 5 movies, comma seperated. like the exaple result given ahead. Example result: Gadar, sholay, Don, MAD, MAD2";
    // const gptResults = await client.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    // console.log(gptResults.choices[0].message.content);

    //Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi DO Yaaro, Padosan

    // const gptMovies = gptResults.choices[0].message.content);
    const gptMovies =
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi DO Yaaro, Padosan";

    const gptMoviesArr = gptMovies.split(",");
    const promiseArray = gptMoviesArr.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({
        movieNames: gptMoviesArr,
        movieResults: tmdbResults,
      }),
    );
  };
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
          ref={searchRef}
        />
        <button
          className="bg-red-600 text-white w-20 rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
